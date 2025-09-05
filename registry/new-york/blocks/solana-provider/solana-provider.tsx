'use client'

import dynamic from 'next/dynamic'
import { ReactNode } from 'react'
import {
  createSolanaDevnet,
  createSolanaLocalnet,
  createSolanaTestnet,
  createWalletUiConfig,
  WalletUi
} from '@wallet-ui/react'
import { WalletUiGillProvider } from '@wallet-ui/react-gill'

export const WalletButton = dynamic(async () => (await import('@wallet-ui/react')).WalletUiDropdown, {
  ssr: false,
})
export const ClusterButton = dynamic(async () => (await import('@wallet-ui/react')).WalletUiClusterDropdown, {
  ssr: false,
})

const config = createWalletUiConfig({
  clusters: [createSolanaDevnet(), createSolanaLocalnet(), createSolanaTestnet()],
})

export function SolanaProvider({ children }: { children: ReactNode }) {
  return <WalletUi config={config}>
    <WalletUiGillProvider>
      {children}
    </WalletUiGillProvider>
  </WalletUi>
}
