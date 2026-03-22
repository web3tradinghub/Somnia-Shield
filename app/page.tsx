import ActivityAudit from '@/components/ActivityAudit';
import AccountHealthFactor from '@/components/AccountHealthFactor';
import SignalFrequency from '@/components/SignalFrequency';
import TestnetLatency from '@/components/TestnetLatency';
import LivePulseMonitor from '@/components/LivePulseMonitor';
import DefenseSystem from '@/components/DefenseSystem';
import AssetInventory from '@/components/AssetInventory';
import Header from '@/components/Header';

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white p-5">
      <Header />
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 mt-5">
        <div className="lg:col-span-1">
          <ActivityAudit />
        </div>
        <div className="lg:col-span-2 grid grid-rows-[auto_auto_1fr] gap-5">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            <AccountHealthFactor />
            <SignalFrequency />
            <TestnetLatency />
          </div>
          <LivePulseMonitor />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            <div className="md:col-span-2">
              <DefenseSystem />
            </div>
            <div className="md:col-span-1">
              <AssetInventory />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
