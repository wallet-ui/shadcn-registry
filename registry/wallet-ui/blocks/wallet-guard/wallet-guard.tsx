import React from 'react';

import { WalletDropdown } from "@/registry/wallet-ui/blocks/wallet-dropdown/wallet-dropdown";
import { useWalletUiAccount, WalletUiAccountInfo } from '@wallet-ui/react';

export interface WalletGuardProps {
  fallback?: React.ReactNode;
  render: (info: WalletUiAccountInfo) => React.ReactNode;
}

export function WalletGuard({ fallback = <WalletDropdown />, render }: WalletGuardProps) {
  const { account, accountKeys, cluster, wallet } = useWalletUiAccount();

  return account ? render({ account, accountKeys, cluster, wallet }) : fallback;
}
