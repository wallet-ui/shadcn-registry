import * as React from "react"
import { getRegistryBaseUrl } from "@/lib/get-registry-url";
import { HomeFeature } from "@/features/home/home-feature";

export const dynamic = 'force-dynamic';
const registryBaseUrl = getRegistryBaseUrl()

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
      <HomeFeature registryBaseUrl={registryBaseUrl} />
    </div>
  )
}
