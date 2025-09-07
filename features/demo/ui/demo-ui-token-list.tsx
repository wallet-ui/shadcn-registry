import { ellipsify } from '@/lib/utils'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import { AppExplorerLink } from '@/components/app-explorer-link'
import { TokenAccount } from "@/registry/wallet-ui/blocks/solana-hooks/use-get-token-accounts";

export function AccountUiTokens({ accounts }: { accounts: TokenAccount[] }) {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Public Key</TableHead>
          <TableHead>Mint</TableHead>
          <TableHead className="text-right">Balance</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {accounts?.map(({ account, pubkey }) => (
          <TableRow key={pubkey.toString()}>
            <TableCell>
              <div className="flex space-x-2">
                <span className="font-mono">
                  <AppExplorerLink label={ellipsify(pubkey.toString())} address={pubkey.toString()} />
                </span>
              </div>
            </TableCell>
            <TableCell>
              <div className="flex space-x-2">
                <span className="font-mono">
                  <AppExplorerLink
                    label={ellipsify(account.data.parsed.info.mint)}
                    address={account.data.parsed.info.mint.toString()}
                  />
                </span>
              </div>
            </TableCell>
            <TableCell className="text-right">
              <span className="font-mono">{account.data.parsed.info.tokenAmount.uiAmount}</span>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}
