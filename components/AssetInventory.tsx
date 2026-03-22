'use client';
import React from 'react';

const AssetInventory = () => {
  return (
    <div className="bg-gray-900 p-6 rounded-lg shadow-lg">
      <h2 className="text-xl font-bold mb-4">Asset Inventory</h2>
      <div className="mt-4">
        <div className="flex justify-between items-center mb-2">
          <p className="m-0 text-white">ETH</p>
          <p className="m-0 text-white">1.2</p>
        </div>
        <div className="w-full h-1 bg-gray-700 mb-4 rounded-full overflow-hidden">
          <div className="w-[60%] h-full bg-blue-500" />
        </div>
      </div>
      <div className="mt-4">
        <div className="flex justify-between items-center mb-2">
          <p className="m-0 text-white">USDC</p>
          <p className="m-0 text-white">3,450</p>
        </div>
        <div className="w-full h-1 bg-gray-700 mb-4 rounded-full overflow-hidden">
          <div className="w-[80%] h-full bg-orange-500" />
        </div>
      </div>
    </div>
  );
};

export default AssetInventory;
