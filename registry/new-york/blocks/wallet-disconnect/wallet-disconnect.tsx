'use client';

import * as React from 'react';
import { useWalletUi } from '@wallet-ui/react';
import { Button } from '@/registry/new-york/ui/button';

function WalletDisconnect(props: React.ComponentProps<typeof Button>) {
  const { connected, disconnect } = useWalletUi();
  return (
    <Button
      variant="outline"
      className='cursor-pointer'
      {...props}
      onClick={disconnect}
      disabled={!connected}
    >
      Disconnect
    </Button>
  );
}


export { WalletDisconnect }