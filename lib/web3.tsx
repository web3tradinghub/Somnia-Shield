'use client';
import { createWeb3Modal, defaultWagmiConfig } from '@web3modal/wagmi/react';

import { mainnet, arbitrum } from 'viem/chains';
import { WagmiProvider } from 'wagmi';
import { useEffect, useState } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

// 1. Get projectID at https://cloud.walletconnect.com
const projectId = process.env.NEXT_PUBLIC_PROJECT_ID;
if (!projectId) {
  throw new Error('You need to provide NEXT_PUBLIC_PROJECT_ID env variable');
}

// 2. Create wagmiConfig
const metadata = {
  name: 'Somnia Shield',
  description: 'Somnia Shield V2.0',
  url: 'https://web3modal.com',
  icons: ['https://avatars.githubusercontent.com/u/37784886']
};

const chains = [mainnet, arbitrum] as const;
export const wagmiConfig = defaultWagmiConfig({ chains, projectId, metadata, ssr: true });

// 3. Create modal
if (typeof window !== 'undefined') {
  createWeb3Modal({ wagmiConfig, projectId });
}

const queryClient = new QueryClient();

export function Web3ModalProvider({ children }: { children: React.ReactNode }) {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  return (
    <WagmiProvider config={wagmiConfig}>
      <QueryClientProvider client={queryClient}>
        {mounted && children}
      </QueryClientProvider>
    </WagmiProvider>
  );
}