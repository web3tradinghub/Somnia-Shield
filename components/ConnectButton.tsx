'use client';
import { useWeb3Modal } from '@web3modal/wagmi/react';

export function ConnectButton() {
  const { open } = useWeb3Modal();

  return (
    <button
      onClick={() => open()}
      className="bg-pink-500 hover:bg-pink-600 text-white font-bold py-2 px-4 rounded-full"
    >
      Connect Wallet
    </button>
  );
}
