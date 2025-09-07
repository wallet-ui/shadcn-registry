'use client'

import React from 'react'
import { ThemeProvider } from "next-themes";
import { SolanaProvider } from '@/registry/wallet-ui/blocks/solana-provider/solana-provider'
import { ReactQueryProvider } from "@/components/react-query-provider";

export function AppProviders({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <ReactQueryProvider>
      <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
        <SolanaProvider>{children}</SolanaProvider>
      </ThemeProvider>
    </ReactQueryProvider>
  )
}