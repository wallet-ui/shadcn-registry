import * as React from "react"
import { OpenInV0Button } from "@/components/open-in-v0-button"
import { ClusterDropdown } from "@/registry/new-york/blocks/cluster-dropdown/cluster-dropdown"
import { WalletDropdown } from "@/registry/new-york/blocks/wallet-dropdown/wallet-dropdown";
// This page displays items from the custom registry.
// You are free to implement this with your own design as needed.

export default function Home() {
  return (
    <div className="max-w-3xl mx-auto flex flex-col min-h-svh px-4 py-8 gap-8">
      <header className="flex flex-col gap-1">
        <h1 className="text-3xl font-bold tracking-tight">Wallet UI Shadcn Registry</h1>
        <p className="text-muted-foreground">
          A registry for Wallet UI components built with Shadcn.
        </p>
      </header>
      <main className="flex flex-col flex-1 gap-8">
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
