import { ShieldCheck } from 'lucide-react';

const DefenseSystem = () => {
  return (
    <div className="bg-gray-900 p-6 rounded-lg shadow-lg h-full">
      <div className="flex items-center space-x-4 mb-4">
        <ShieldCheck className="w-8 h-8 text-blue-500" />
        <h2 className="text-xl font-bold">Defense System</h2>
      </div>
      <p className="text-blue-500">Status: All systems nominal</p>
    </div>
  );
};

export default DefenseSystem;
