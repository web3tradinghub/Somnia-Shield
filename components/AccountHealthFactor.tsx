'use client';
import React from 'react';
import { Shield } from 'lucide-react';

const AccountHealthFactor = () => {
  return (
    <div className="bg-gray-900 p-6 rounded-lg shadow-lg">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold">Account Health Factor</h2>
        <Shield className="w-8 h-8 text-pink-500" />
      </div>
      <p className="text-4xl font-bold text-center text-pink-500 my-4">1.5000</p>
      <p className="text-center text-gray-400">LIQUIDATION THRESHOLD: 1.0000</p>
    </div>
  );
};

export default AccountHealthFactor;
