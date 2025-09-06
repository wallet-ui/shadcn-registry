'use client'

import React from 'react'
import { SolanaProvider } from '@/registry/wallet-ui/blocks/solana-provider/solana-provider'
import { ReactQueryProvider } from "@/components/react-query-provider";

export function AppProviders({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <ReactQueryProvider>
      <SolanaProvider>{children}</SolanaProvider>
    </ReactQueryProvider>
  )
}