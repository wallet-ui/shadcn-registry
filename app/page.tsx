'use client'
import * as React from "react"
import { OpenInV0Button } from "@/components/open-in-v0-button"
import { ClusterDropdown } from "@/registry/new-york/blocks/cluster-dropdown/cluster-dropdown"
import { WalletDisconnect } from "@/registry/new-york/blocks/wallet-disconnect/wallet-disconnect";
import { WalletDropdown } from "@/registry/new-york/blocks/wallet-dropdown/wallet-dropdown";
import {
  codeUpdateLayout,
  codeUpdatePage,
  codeUpdateShadcn,
  InstallationCodeBlock
} from "@/components/installation-code-block";
import { InstallationInstallPackage } from "@/components/installation-install-package";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { LucideBird } from "lucide-react";
import { address, lamportsToSol } from "gill";
import { useSolana } from "@/registry/new-york/blocks/solana-provider/use-solana";
import { WalletUiAccountGuard, WalletUiAccountInfo } from "@wallet-ui/react";
import { useQuery } from "@tanstack/react-query";

export default function Home() {
  return (
    <div className="max-w-3xl mx-auto flex flex-col min-h-svh px-4 py-8 gap-8">
      <header className="flex flex-col gap-2">
        <h1 className="text-3xl font-bold tracking-tight">Wallet UI Shadcn Registry</h1>
        <p className="text-muted-foreground">
          The <a target="_blank" rel="noopener noreferrer" className="underline" href='https://ui.shadcn.com/docs/registry'>Shadcn registry</a>{' '}
          for <a target="_blank" rel="noopener noreferrer" className="underline" href='https://wallet-ui.dev'>Wallet UI</a> components
          gets you started with Solana faster than ever!
        </p>
        <p className="text-muted-foreground">
          Support for Solana Mobile comes out of the box!
        </p>
        <p className="text-muted-foreground">
          Head over to <a target="_blank" rel="noopener noreferrer" className="underline" href='https://tweakcn.com/editor/theme'>tweakcn</a>{' '}
          to theme your components!
        </p>
      </header>
      <main className="flex flex-col flex-1 gap-8">
        <Alert variant='warning'>
          <LucideBird />
          <AlertTitle className='font-bold'>You&apos;re on the bleeding edge!</AlertTitle>
          <AlertDescription>
            <p>
              These components use a <strong className='font-bold'>canary</strong> release of <code className='font-bold'>@wallet-ui v2.0</code>.
            </p>
            <p>
              Please <a target="_blank" rel="noopener noreferrer" className="underline" href='https://github.com/wallet-ui/wallet-ui/issues'>reach out</a> if you
              have any issues or suggestions.
            </p>
          </AlertDescription>
        </Alert>
        <div className="flex flex-col gap-4 border rounded-lg p-4 min-h-[450px] relative">
          <div className="flex items-center justify-between">
            <h2 className="text-sm text-muted-foreground sm:pl-3">
              Demo: select wallet and cluster to fetch your balance.
            </h2>
            <OpenInV0Button name="wallet-dropdown" className="w-fit" />
          </div>
          <div className="flex flex-col items-center justify-center min-h-[400px] relative">
            <WalletUiAccountGuard fallback={<WalletDropdown />} render={(props) => <AccountBalance {...props}  />}/>
          </div>
        </div>
        <h2 className="text-2xl font-bold tracking-tight">Getting started</h2>
        <h3 className="text-xl font-semibold">1. Configure your shadcn config</h3>
        <p className="text-foreground">
          Add the <code className='font-bold'>@wallet-ui</code> registry in your shadcn config.
        </p>
        <InstallationCodeBlock code={codeUpdateShadcn} />
        <h3 className="text-xl font-semibold">2. Generate the components</h3>
        <p className="text-foreground">
          Generate the <code className='font-bold'>SolanaProvider</code> with the {' '}
          <a target="_blank" rel="noopener noreferrer" className="underline" href='https://docs.solanamobile.com/mobile-wallet-adapter/web-apps'>
            Solana Mobile Wallet Adapter
          </a> and the <code className='font-bold'>useSolana</code>{' '} hook.
        </p>
        <InstallationInstallPackage packageName='@wallet-ui/solana-provider' />
        <p className="text-foreground">
          Generate the <code className='font-bold'>ClusterDropdown</code> and <code className='font-bold'>WalletDropdown</code>{' '}
          components.
        </p>
        <InstallationInstallPackage packageName='@wallet-ui/cluster-dropdown @wallet-ui/wallet-dropdown' />
        <h3 className="text-xl font-semibold">3. Update layout</h3>
        <p className="text-foreground">
          Add the <code className='font-bold'>SolanaProvider</code> to the root layout of your app.
        </p>
        <InstallationCodeBlock code={codeUpdateLayout} />
        <h3 className="text-xl font-semibold">4. Use the components</h3>
        <p className="text-foreground">
          Add the <code className='font-bold'>ClusterDropdown</code> and the <code className='font-bold'>WalletDropdown</code> components to your page.
        </p>
        <InstallationCodeBlock code={codeUpdatePage} />
        <h3 className="text-xl font-semibold">Done!</h3>
        <p className="text-foreground">
          You completed the <a target="_blank" rel="noopener noreferrer" className="underline" href='https://wallet-ui.dev'>Wallet UI</a>{' '}
          setup and can now use it in our apps!
        </p>
        <h2 className="text-2xl font-bold tracking-tight">Components</h2>
        <div className="flex flex-col gap-4 border rounded-lg p-4 min-h-[450px] relative">
          <div className="flex items-center justify-between">
            <h2 className="text-sm text-muted-foreground sm:pl-3">
              <code className="font-bold">@wallet-ui/cluster-dropdown</code> A cluster dropdown to select Solana clusters
            </h2>
            <OpenInV0Button name="cluster-dropdown" className="w-fit" />
          </div>
          <div className="flex items-center justify-center min-h-[400px] relative">
            <ClusterDropdown />
          </div>
        </div>
        <div className="flex flex-col gap-4 border rounded-lg p-4 min-h-[450px] relative">
          <div className="flex items-center justify-between">
            <h2 className="text-sm text-muted-foreground sm:pl-3">
              <code className="font-bold">@wallet-ui/wallet-disconnect</code> A button to disconnect the connected Solana wallets
            </h2>
            <OpenInV0Button name="wallet-disconnect" className="w-fit" />
          </div>
          <div className="flex flex-col items-center justify-center min-h-[400px] relative">
            <WalletDisconnect />
          </div>
        </div>
        <div className="flex flex-col gap-4 border rounded-lg p-4 min-h-[450px] relative">
          <div className="flex items-center justify-between">
            <h2 className="text-sm text-muted-foreground sm:pl-3">
              <code className="font-bold">@wallet-ui/wallet-dropdown</code> A wallet dropdown to select Solana wallets
            </h2>
            <OpenInV0Button name="wallet-dropdown" className="w-fit" />
          </div>
          <div className="flex flex-col items-center justify-center min-h-[400px] relative">
            <WalletDropdown />
          </div>
        </div>
      </main>
    </div>
  )
}


function useBalanceQuery({account, accountKeys}: WalletUiAccountInfo) {
  const { client } = useSolana()

  return useQuery({
    retry: false,
    queryKey: accountKeys,
    queryFn: () => client.rpc.getBalance(address(account.address)).send(),
  })
}

function AccountBalance(props: WalletUiAccountInfo) {
  const query = useBalanceQuery(props)
  const balance = query.data?.value?.toString()
  return <div className="flex items-center justify-center relative gap-2">
    <WalletDropdown />
    <WalletDisconnect />
    <ClusterDropdown />
    {query.isLoading ? 'Loading...' : query.isError ? `${query.error}` : balance ? `${lamportsToSol(Number.parseInt(balance))} SOL` : '?'}
  </div>
}
