import { ClipboardList } from 'lucide-react';

const ActivityAudit = () => {
  return (
    <div className="bg-gray-900 p-6 rounded-lg shadow-lg">
      <div className="flex items-center space-x-4 mb-4">
        <ClipboardList className="w-8 h-8 text-orange-500" />
        <h2 className="text-xl font-bold">Activity Audit</h2>
      </div>
      <ul>
        <li className="border-b border-gray-700 py-2">System Scan Initiated</li>
        <li className="border-b border-gray-700 py-2">User Login from IP 192.168.1.1</li>
        <li className="py-2">Asset Transfer Completed</li>
      </ul>
    </div>
  );
};

export default ActivityAudit;
