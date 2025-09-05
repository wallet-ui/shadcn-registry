'use client'

import { ReactNode } from 'react'
import {
  createSolanaDevnet,
  createSolanaLocalnet,
  createSolanaTestnet,
  createWalletUiConfig,
  WalletUi
} from '@wallet-ui/react'
import { WalletUiGillProvider } from '@wallet-ui/react-gill'

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
