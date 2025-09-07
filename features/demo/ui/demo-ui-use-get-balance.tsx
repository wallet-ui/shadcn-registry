import { useGetBalance } from "@/registry/wallet-ui/blocks/solana-hooks/use-get-balance";
import { useGetTokenAccounts } from "@/registry/wallet-ui/blocks/solana-hooks/use-get-token-accounts";
import { lamportsToSol } from "gill";
import * as React from "react";
import { Button } from "@/components/ui/button";
import { LucideRefreshCcw } from "lucide-react";
import { AccountUiTokens } from "./demo-ui-token-list";

export function DemoUiUseGetBalance({ address }: { address: string }) {
  const query = useGetBalance({ address })
  const balance = query.data?.value?.toString()

  return <div className="flex flex-col items-center justify-center relative gap-2">
    <div>
      {query.isLoading ? 'Loading...' : query.isError ? `${query.error}` : balance ? <DemoUiSolBalance balance={balance} /> : '?'}
    </div>
    <Button size='icon' onClick={() => query.refetch()}>
      <LucideRefreshCcw />
    </Button>
  </div>
}

function DemoUiSolBalance({ balance }:{ balance: string }) {
  return <span>{lamportsToSol(Number.parseInt(balance))} SOL</span>
}

export function DemoUiUseGetTokenAccounts({ address }: { address: string }) {
  const query = useGetTokenAccounts({ address })

  return <div className="flex flex-col items-center justify-stretch border border-orange-300 w-full relative gap-2">
    <div className={'border border-red-300 w-full'}>
      {query.isLoading
        ? 'Loading...'
        : query.isError
          ? `${query.error}`
          : query.data?.length
            ? <AccountUiTokens accounts={query.data} />
            : 'No token account found'
      }
      <pre>{JSON.stringify({ items: query.data?.length ?? 0, query: query.status }, null, 2)}</pre>
    </div>
    <Button size='icon' onClick={() => query.refetch()}>
      <LucideRefreshCcw />
    </Button>
  </div>
}
