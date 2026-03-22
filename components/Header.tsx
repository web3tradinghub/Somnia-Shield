import { ConnectButton } from '@/components/ConnectButton';
import { Bell, Search } from 'lucide-react';

const Header = () => {
  return (
    <header className="flex items-center justify-between p-4 bg-black text-white">
      <div className="flex items-center space-x-4">
        <h1 className="text-2xl font-bold text-pink-500">Somnia Shield</h1>
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
          <input
            type="text"
            placeholder="Search..."
            className="bg-gray-800 border border-gray-700 rounded-full py-2 pl-10 pr-4 focus:outline-none focus:ring-2 focus:ring-pink-500"
          />
        </div>
      </div>
      <div className="flex items-center space-x-4">
        <Bell className="w-6 h-6 text-gray-400" />
        <ConnectButton />
      </div>
    </header>
  );
};

export default Header;
