import { DemoUiUseGetBalance, DemoUiUseGetTokenAccounts } from "@/features/demo/ui/demo-ui-use-get-balance";
import * as React from "react";
import { ReactNode } from "react";
import { WalletGuard } from "@/registry/wallet-ui/blocks/wallet-guard/wallet-guard";
import { WalletDropdown } from "@/registry/wallet-ui/blocks/wallet-dropdown/wallet-dropdown";
import { ClusterDropdown } from "@/registry/wallet-ui/blocks/cluster-dropdown/cluster-dropdown";
import { ThemeToggle } from "@/components/mode-toggle";

export function DemoFeature() {
  return <div className="flex flex-col flex-1 gap-16">
    <DemoUiCard title="useGetBalance">
      <WalletGuard render={({ account }) => <DemoUiUseGetBalance address={account.address} />} />
    </DemoUiCard>
    <DemoUiCard title="useGetTokenAccounts">
      <WalletGuard render={({ account }) => <DemoUiUseGetTokenAccounts address={account.address} />} />
    </DemoUiCard>
  </div>
}

export function DemoUiCard({ children, title }: { children: ReactNode, title: ReactNode }) {
  return <div className="flex flex-col flex-1 gap-8">
    <div className="flex flex-col gap-4 border rounded-lg p-4 min-h-[450px] relative">
      <div className="flex items-center justify-between">
        <h2 className="text-sm text-muted-foreground sm:pl-3">
          { title }
        </h2>
        <div className="flex gap-2 justify-center">
          <WalletDropdown />
          <ClusterDropdown />
          <ThemeToggle />
        </div>
      </div>
      <div className="flex items-center justify-center min-h-[400px] relative">
        { children }
      </div>
    </div>
  </div>
}