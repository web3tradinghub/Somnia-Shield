import { HeartPulse } from 'lucide-react';

const LivePulseMonitor = () => {
  return (
    <div className="bg-gray-900 p-6 rounded-lg shadow-lg">
      <div className="flex items-center space-x-4 mb-4">
        <HeartPulse className="w-8 h-8 text-pink-500" />
        <h2 className="text-xl font-bold">Live Pulse Monitor</h2>
      </div>
      {/* Placeholder for chart */}
      <div className="h-32 bg-gray-800 rounded-lg"></div>
    </div>
  );
};

export default LivePulseMonitor;
