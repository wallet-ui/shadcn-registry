'use client'

import React from 'react'
import { SolanaProvider } from '@/registry/new-york/blocks/solana-provider/solana-provider'

export function AppProviders({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
      <SolanaProvider>{children}</SolanaProvider>
  )
}