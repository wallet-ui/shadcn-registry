import * as React from "react"
import { OpenInV0Button } from "@/components/open-in-v0-button"
import { ClusterDropdown } from "@/registry/new-york/blocks/cluster-dropdown/cluster-dropdown"
import { WalletDropdown } from "@/registry/new-york/blocks/wallet-dropdown/wallet-dropdown";
import {
  codeUpdateLayout,
  codeUpdatePage,
  codeUpdateShadcn,
  InstallationUpdateFile
} from "@/components/installation-update-file";
import { InstallationInstallPackage } from "@/components/installation-install-package";

export default function Home() {
  return (
    <div className="max-w-3xl mx-auto flex flex-col min-h-svh px-4 py-8 gap-8">
      <header className="flex flex-col gap-1">
        <h1 className="text-3xl font-bold tracking-tight">Wallet UI Shadcn Registry</h1>
        <p className="text-muted-foreground">
          The <a target="_blank" rel="noopener noreferrer" className="underline" href='https://ui.shadcn.com/docs/registry'>Shadcn registry</a>{' '}
          for <a target="_blank" rel="noopener noreferrer" className="underline" href='https://wallet-ui.dev'>Wallet UI</a> components.
        </p>
      </header>
      <main className="flex flex-col flex-1 gap-8">
        <h2 className="text-2xl font-bold tracking-tight">Getting started</h2>
        <h3 className="text-xl font-semibold">1. Configure your shadcn config</h3>
        <p className="text-foreground">
          Add the <code>@wallet-ui</code> registry in your shadcn config.
        </p>
        <InstallationUpdateFile code={codeUpdateShadcn} />
        <h3 className="text-xl font-semibold">2. Generate a Solana Provider</h3>
        <p className="text-foreground">
          Generate the <code>SolanaProvider</code> and the <code>useSolana</code> hook.
        </p>
        <InstallationInstallPackage packageName='@wallet-ui/solana-provider' />
        <h3 className="text-xl font-semibold">3. Update layout</h3>
        <p className="text-foreground">
          Add the <code>SolanaProvider</code> to the root layout of your app.
        </p>
        <InstallationUpdateFile code={codeUpdateLayout} />
        <h3 className="text-xl font-semibold">4. Generate the components</h3>
        <p className="text-foreground">
          Generate the <code>ClusterDropdown</code> and the <code>WalletDropdown</code> components.
        </p>
        <InstallationInstallPackage packageName='@wallet-ui/cluster-dropdown' />
        <InstallationInstallPackage packageName='@wallet-ui/wallet-dropdown' />
        <h3 className="text-xl font-semibold">5. Update page</h3>
        <p className="text-foreground">
          Add the <code>ClusterDropdown</code> and the <code>WalletDropdown</code> components to your page.
        </p>
        <InstallationUpdateFile code={codeUpdatePage} />
        <h3 className="text-xl font-semibold">Done!</h3>
        <p className="text-foreground">
          You completed the <a target="_blank" rel="noopener noreferrer" className="underline" href='https://wallet-ui.dev'>Wallet UI</a>{' '}
          setup and can now use it in our apps!
        </p>
        <h2 className="text-2xl font-bold tracking-tight">Components</h2>
        <div className="flex flex-col gap-4 border rounded-lg p-4 min-h-[450px] relative">
          <div className="flex items-center justify-between">
            <h2 className="text-sm text-muted-foreground sm:pl-3">
              A cluster dropdown to select Solana clusters
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
              A wallet dropdown to select Solana wallets
            </h2>
            <OpenInV0Button name="wallet-dropdown" className="w-fit" />
          </div>
          <div className="flex items-center justify-center min-h-[400px] relative">
            <WalletDropdown />
          </div>
        </div>







      </main>
    </div>
  )
}
