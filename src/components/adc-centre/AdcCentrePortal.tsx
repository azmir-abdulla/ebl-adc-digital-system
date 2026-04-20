import React, { useState } from 'react';
import { 
  LayoutDashboard, 
  Coins, 
  Users, 
  Truck, 
  PhoneCall, 
  Ticket, 
  Monitor, 
  FileText,
  LogOut,
  Bell,
  Settings
} from 'lucide-react';
import { Screen } from '../../types';
import { Button } from '../shared/UI';
import { motion, AnimatePresence } from 'motion/react';

// Sub-screens
import CentreDashboard from './CentreDashboard';
import CentreReplenishment from './CentreReplenishment';
import CentreCustodians from './CentreCustodians';
import CustodianTracking from './CustodianTracking';
import CentreReports from './CentreReports';
import CentreConveyance from './CentreConveyance';
import CentreTickets from './CentreTickets';
import CentreCalls from './CentreCalls';
import AssetManagement from '../adc-head/AssetManagement'; 

interface AdcCentrePortalProps {
  onBack: () => void;
}

const AdcCentrePortal: React.FC<AdcCentrePortalProps> = ({ onBack }) => {
  const [screen, setScreen] = useState<Screen>('dashboard');

  const navItems = [
    { id: 'dashboard' as Screen, label: 'Dashboard', icon: <LayoutDashboard size={14} />, group: 'Overview' },
    { id: 'tracking' as Screen, label: 'Live Tracking', icon: <Truck size={14} />, group: 'Overview' },
    { id: 'cashpos' as Screen, label: 'Cash Position', icon: <Monitor size={14} />, group: 'Overview' },
    { id: 'replenishment' as Screen, label: 'Cash Replenishment', icon: <Coins size={14} />, group: 'Operations' },
    { id: 'conveyance' as Screen, label: 'Conveyance', icon: <Truck size={14} />, group: 'Operations', badge: '3' },
    { id: 'calls' as Screen, label: 'Call Management', icon: <PhoneCall size={14} />, group: 'Operations' },
    { id: 'tickets' as Screen, label: 'Tickets', icon: <Ticket size={14} />, group: 'Operations', badge: '5' },
    { id: 'custodians' as Screen, label: 'Custodians', icon: <Users size={14} />, group: 'People' },
    { id: 'atms' as Screen, label: 'ATM Management', icon: <Monitor size={14} />, group: 'Infrastructure' },
    { id: 'reports' as Screen, label: 'Reports', icon: <FileText size={14} />, group: 'Reports' },
  ];

  const groups = Array.from(new Set(navItems.map(n => n.group)));

  return (
    <div className="flex h-screen bg-slate-50 text-slate-900 font-sans">
      {/* Sidebar - High Density */}
      <aside className="w-56 bg-slate-50 border-r border-slate-200 flex flex-col flex-shrink-0 font-sans">
        <div className="h-10 px-4 flex items-center gap-2 border-b border-slate-200 bg-white">
           <div className="w-5 h-5 bg-[#008244] rounded-sm flex items-center justify-center">
              <span className="text-white text-[7px] font-black italic">EBL</span>
           </div>
           <h1 className="text-[10px] font-black tracking-tight text-[#003366] uppercase">GULSHAN_ADC_OPS</h1>
        </div>

        <nav className="flex-1 overflow-y-auto pt-2 px-2">
          {groups.map(group => (
            <div key={group} className="mb-2">
              <div className="px-2 py-1 text-[9px] font-bold text-slate-400 uppercase tracking-widest">
                {group}
              </div>
              <div className="space-y-0.5">
                {navItems.filter(n => n.group === group).map(item => (
                  <button
                    key={item.id}
                    onClick={() => setScreen(item.id)}
                    className={`w-full flex items-center gap-2 px-2 py-1.5 rounded transition-colors text-[11px] ${
                      screen === item.id 
                        ? "bg-[#008244]/10 text-[#008244] font-bold" 
                        : "text-slate-600 hover:bg-slate-200"
                    }`}
                  >
                    <span className={screen === item.id ? "text-[#008244]" : "text-slate-400"}>{item.icon}</span>
                    <span className={`flex-1 text-left ${screen === item.id ? "serif-italic" : ""}`}>{item.label}</span>
                    {item.badge && (
                      <span className="text-[9px] font-bold px-1 rounded-sm bg-[#008244] text-white leading-tight">
                        {item.badge}
                      </span>
                    )}
                  </button>
                ))}
              </div>
            </div>
          ))}
        </nav>

        <div className="p-3 border-t border-slate-200 bg-white">
          <div className="flex items-center gap-2 mb-3 p-1.5 bg-slate-50 rounded border border-slate-100 shadow-inner">
            <div className="w-6 h-6 rounded bg-[#003366] text-white flex items-center justify-center font-bold text-[9px]">KA</div>
            <div className="flex-1 min-w-0">
              <div className="text-[10px] font-bold text-slate-700 truncate capitalize leading-tight">Kabir Ahmed</div>
              <div className="text-[9px] text-slate-400 font-medium">ADC In-Charge</div>
            </div>
          </div>
          <Button 
            variant="ghost" 
            size="sm" 
            className="w-full justify-center h-7 text-[10px] border-slate-200 hover:bg-rose-50 hover:text-rose-600 transition-colors"
            onClick={onBack}
          >
            <LogOut size={12} className="mr-1.5" /> Close Terminal
          </Button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col bg-white overflow-hidden">
        <header className="h-10 bg-white border-b border-slate-200 px-4 flex items-center justify-between shadow-sm z-10">
          <div className="flex items-center gap-4">
            <h2 className="text-xs font-semibold tracking-tight text-slate-800">
              {navItems.find(n => n.id === screen)?.label?.toUpperCase()?.replace(' ', '_')}
            </h2>
            <nav className="flex text-[10px] text-slate-400 font-medium">
              <span className="text-[#008244]">BRANCH_OPS</span>
              <span className="mx-2 text-slate-300">/</span>
              <span className="text-slate-600">REPLENISHMENT_EXEC</span>
            </nav>
          </div>
          <div className="flex items-center gap-4">
             <div className="flex items-center gap-2 px-2 py-0.5 bg-slate-100 border border-slate-200 rounded">
                <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse shadow-[0_0_4px_rgba(34,197,94,0.4)]" />
                <span className="text-[9px] font-bold text-slate-500 mono">6_CUST_ONLINE</span>
             </div>
             <div className="w-px h-6 bg-slate-200 mx-1" />
             <Button variant="teal" size="sm" className="h-7 px-3 rounded-md" onClick={() => setScreen('replenishment')}>
               EXECUTE_REFILL
             </Button>
          </div>
        </header>

        <div className="flex-1 overflow-y-auto px-4 py-3 bg-slate-50/50">
          <AnimatePresence mode="wait">
            <motion.div
              key={screen}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.1 }}
            >
              {screen === 'dashboard' && <CentreDashboard onSetScreen={setScreen} />}
              {screen === 'replenishment' && <CentreReplenishment />}
              {screen === 'custodians' && <CentreCustodians />}
              {screen === 'tracking' && <CustodianTracking />}
              {screen === 'reports' && <CentreReports />}
              {screen === 'conveyance' && <CentreConveyance />}
              {screen === 'tickets' && <CentreTickets />}
              {screen === 'calls' && <CentreCalls />}
              {screen === 'atms' && <AssetManagement />}
              
              {!['dashboard', 'replenishment', 'custodians', 'tracking', 'reports', 'conveyance', 'tickets', 'calls', 'atms'].includes(screen) && (
                <div className="h-[60vh] flex flex-col items-center justify-center text-slate-300 gap-2">
                  <div className="text-4xl mb-2 opacity-50">0x0F</div>
                  <div className="text-[11px] font-bold text-slate-400 uppercase tracking-widest">{navItems.find(n => n.id === screen)?.label} MODULE</div>
                  <div className="text-[10px] text-slate-400 font-mono tracking-tighter">Awaiting regional deployment...</div>
                  <Button 
                    variant="ghost" 
                    size="sm" 
                    className="mt-4 h-7 text-[10px]"
                    onClick={() => setScreen('dashboard')}
                  >
                    RETURN_TO_SECURE_ROOT
                  </Button>
                </div>
              )}
            </motion.div>
          </AnimatePresence>
        </div>
      </main>
    </div>
  );
};

export default AdcCentrePortal;
