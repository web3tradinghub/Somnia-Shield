import { BarChart } from 'lucide-react';

const SignalFrequency = () => {
  return (
    <div className="bg-gray-900 p-6 rounded-lg shadow-lg">
      <div className="flex items-center space-x-4 mb-4">
        <BarChart className="w-8 h-8 text-blue-500" />
        <h2 className="text-xl font-bold">Signal Frequency</h2>
      </div>
      <p className="text-blue-500">7.8 GHz</p>
    </div>
  );
};

export default SignalFrequency;
