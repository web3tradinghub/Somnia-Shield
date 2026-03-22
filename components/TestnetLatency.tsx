import { Network } from 'lucide-react';

const TestnetLatency = () => {
  return (
    <div className="bg-gray-900 p-6 rounded-lg shadow-lg">
      <div className="flex items-center space-x-4 mb-4">
        <Network className="w-8 h-8 text-yellow-500" />
        <h2 className="text-xl font-bold">Testnet Latency</h2>
      </div>
      <p className="text-yellow-500">120ms</p>
    </div>
  );
};

export default TestnetLatency;
