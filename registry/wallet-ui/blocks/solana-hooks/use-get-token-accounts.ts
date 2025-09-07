import { Address, address as addressFn, SolanaClient } from 'gill'
import { TOKEN_2022_PROGRAM_ADDRESS, TOKEN_PROGRAM_ADDRESS } from 'gill/programs/token'
import { useQuery } from '@tanstack/react-query'
import { useSolana } from "@/registry/wallet-ui/blocks/solana-provider/use-solana";

export function useGetTokenAccounts(props: { address: Address | string }) {
  const solana = useSolana()
  const address = addressFn(props.address)

  return useQuery({
      queryKey: ['solana.get-token-accounts', [ address, solana.cluster.id ]],
      queryFn: async () => {
        return Promise.all([
          getTokenAccountsByOwner(solana.client.rpc, { address, programId: TOKEN_PROGRAM_ADDRESS }),
          getTokenAccountsByOwner(solana.client.rpc, { address, programId: TOKEN_2022_PROGRAM_ADDRESS }),
        ]).then(([tokenAccounts, token2022Accounts]) => [...tokenAccounts, ...token2022Accounts].sort(
          (a, b) => (b.account.data.parsed.info.tokenAmount.uiAmount ?? 0) - (a.account.data.parsed.info.tokenAmount.uiAmount ?? 0)
        ));
      },
    }
  )
}


export async function getTokenAccountsByOwner( rpc: SolanaClient['rpc'], { address, programId }: { address: Address; programId: Address }, ) {
  if (!address.length) {
    console.log(`No address provided, returning empty array`)
    return []
  }
  return await rpc
    .getTokenAccountsByOwner(address, { programId }, { commitment: 'confirmed', encoding: 'jsonParsed' })
    .send()
    .then((res) => {
      console.log(`Got ${res.value.length} token accounts for ${address}`)
      return res.value ?? [];
    })
}

export type TokenAccount = Awaited<ReturnType<typeof getTokenAccountsByOwner>>[number]