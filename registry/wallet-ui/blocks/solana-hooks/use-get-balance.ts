import { Address, address as addressFn } from 'gill'
import { useSolana } from "@/registry/wallet-ui/blocks/solana-provider/use-solana";
import { useQuery } from "@tanstack/react-query";

export function useGetBalance(props: { address: Address | string }) {
  const solana = useSolana()
  const address = addressFn(props.address)

  return useQuery({
    enabled: !!address,
    retry: false,
    queryKey: ['solana.get-balance', [ address, solana.cluster.id ]],
    queryFn: async () => {
      return solana.client.rpc.getBalance(address).send();
    },
  })
}

