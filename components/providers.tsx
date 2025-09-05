'use client'

import React from 'react'
import { SolanaProvider } from '@/registry/new-york/blocks/solana-provider/solana-provider'
import { ReactQueryProvider } from "@/components/react-query-provider";

export function AppProviders({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <ReactQueryProvider>
      <SolanaProvider>{children}</SolanaProvider>
    </ReactQueryProvider>
  )
}