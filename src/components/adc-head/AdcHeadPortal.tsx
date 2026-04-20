import React, { useState } from 'react';
import { 
  BarChart3, 
  Building2, 
  CheckCircle2, 
  Coins, 
  FileText, 
  History, 
  LayoutDashboard, 
  Settings, 
  Ticket, 
  Truck,
  Users,
  LogOut,
  ChevronRight
} from 'lucide-react';
import { Screen } from '../../types';
import { Badge, Button, Panel } from '../shared/UI';
import { motion, AnimatePresence } from 'motion/react';

// Sub-screens
import Dashboard from './Dashboard';
import Centres from './Centres';
import Approvals from './Approvals';
import Reports from './Reports';
import AuditLogs from './AuditLogs';
import AssetManagement from './AssetManagement';
import TicketOverview from './TicketOverview';
import UserRoles from './UserRoles';
import CashReplenishment from './CashReplenishment';
import Conveyance from './Conveyance';

interface AdcHeadPortalProps {
  onBack: () => void;
}

const AdcHeadPortal: React.FC<AdcHeadPortalProps> = ({ onBack }) => {
  const [screen, setScreen] = useState<Screen>('dashboard');

  const navItems = [
    { id: 'dashboard' as Screen, label: 'Dashboard', icon: <LayoutDashboard size={14} />, group: 'Overview' },
    { id: 'centres' as Screen, label: 'ADC Centres', icon: <Building2 size={14} />, group: 'Overview', badge: '13' },
    { id: 'approvals' as Screen, label: 'Pending Approvals', icon: <CheckCircle2 size={14} />, group: 'Operations', badge: '7', badgeColor: '#008244' },
    { id: 'cash' as Screen, label: 'Cash Replenishment', icon: <Coins size={14} />, group: 'Operations' },
    { id: 'conveyance' as Screen, label: 'Conveyance', icon: <Truck size={14} />, group: 'Operations' },
    { id: 'assets' as Screen, label: 'Asset Management', icon: <BarChart3 size={14} />, group: 'Infrastructure' },
    { id: 'tickets' as Screen, label: 'Ticket Overview', icon: <Ticket size={14} />, group: 'Infrastructure' },
    { id: 'reports' as Screen, label: 'Reports', icon: <FileText size={14} />, group: 'Administration' },
    { id: 'roles' as Screen, label: 'Roles & Users', icon: <Users size={14} />, group: 'Administration' },
    { id: 'audit' as Screen, label: 'Audit Log', icon: <History size={14} />, group: 'Administration' },
  ];

  const groups = Array.from(new Set(navItems.map(n => n.group)));

  return (
    <div className="flex h-screen bg-slate-50 text-slate-900 font-sans">
      {/* Sidebar - High Density */}
      <aside className="w-56 bg-slate-50 border-r border-slate-200 flex flex-col flex-shrink-0">
        <div className="h-10 px-4 flex items-center gap-2 border-b border-slate-200 bg-white">
           <div className="w-6 h-6 bg-[#008244] rounded flex items-center justify-center">
              <span className="text-white text-[8px] font-black">EBL</span>
           </div>
           <h1 className="text-[10px] font-black tracking-tighter text-[#003366] uppercase">ADC_MANAGEMENT</h1>
        </div>

        <nav className="flex-1 overflow-y-auto pt-2 px-2 scrollbar-hide">
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
                        ? "bg-[#003366]/5 text-[#003366] font-bold" 
                        : "text-slate-600 hover:bg-slate-200"
                    }`}
                  >
                    <span className={screen === item.id ? "text-[#008244]" : "text-slate-400"}>{item.icon}</span>
                    <span className={`flex-1 text-left ${screen === item.id ? "serif-italic" : ""}`}>{item.label}</span>
                    {item.badge && (
                      <span 
                        className="text-[9px] font-bold px-1 rounded-sm bg-[#008244] text-white"
                      >
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
          <div className="flex justify-between items-center mb-2">
            <span className="text-[9px] font-bold text-slate-400 uppercase tracking-tight">ADC Health</span>
            <span className="text-[9px] font-mono text-[#003366]">92%</span>
          </div>
          <div className="w-full bg-slate-100 h-1 rounded-full overflow-hidden mb-3">
            <div className="bg-[#008244] h-full w-[92%]"></div>
          </div>
          
          <div className="flex items-center gap-2 mb-2 p-1.5 bg-slate-50 rounded border border-slate-100">
            <div className="w-6 h-6 rounded bg-[#003366] text-white flex items-center justify-center font-bold text-[9px]">RH</div>
            <div className="flex-1 min-w-0">
              <div className="text-[10px] font-bold text-slate-700 truncate capitalize">Rahman Hossain</div>
              <div className="text-[9px] text-slate-400 font-medium">Head Administrator</div>
            </div>
          </div>
          <Button 
            variant="ghost" 
            size="sm" 
            className="w-full justify-center h-7 text-[10px] border-slate-200"
            onClick={onBack}
          >
            <LogOut size={12} className="mr-1.5" /> Terminate Session
          </Button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col bg-white overflow-hidden">
        <header className="h-10 bg-white border-b border-slate-200 px-4 flex items-center justify-between z-10">
          <div className="flex items-center gap-4">
            <h2 className="text-xs font-semibold tracking-tight text-slate-800">
              {navItems.find(n => n.id === screen)?.label?.toUpperCase()?.replace(' ', '_')}
            </h2>
            <nav className="flex text-[10px] text-slate-400 font-medium">
              <span className="hover:text-[#008244] cursor-pointer">ADC_CORE</span>
              <span className="mx-2 text-slate-300">/</span>
              <span className="text-slate-600">INTERNAL_SPEC</span>
            </nav>
          </div>
          <div className="flex items-center gap-3">
             <div className="flex items-center bg-slate-100 rounded px-2 py-0.5 border border-slate-200">
               <span className="text-[9px] font-mono text-slate-500 uppercase">SYS_LOG_V1.2</span>
             </div>
             <Button variant="primary" size="sm" className="h-7 px-3 rounded-md">Live Sync</Button>
          </div>
        </header>

        <div className="flex-1 overflow-y-auto px-4 py-3 scrollbar-dense bg-slate-50/30">
          <AnimatePresence mode="wait">
            <motion.div
              key={screen}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.1 }}
            >
              {screen === 'dashboard' && <Dashboard onSetScreen={setScreen} />}
              {screen === 'centres' && <Centres />}
              {screen === 'approvals' && <Approvals />}
              {screen === 'reports' && <Reports />}
              {screen === 'audit' && <AuditLogs />}
              {screen === 'assets' && <AssetManagement />}
              {screen === 'tickets' && <TicketOverview />}
              {screen === 'roles' && <UserRoles />}
              {screen === 'cash' && <CashReplenishment />}
              
               {screen === 'conveyance' && <Conveyance />}
               {!['dashboard', 'centres', 'approvals', 'reports', 'audit', 'assets', 'tickets', 'roles', 'cash', 'conveyance'].includes(screen) && (
                <div className="h-[60vh] flex flex-col items-center justify-center text-slate-300">
                  <div className="text-5xl mb-4">🚧</div>
                  <div className="text-sm font-medium text-slate-400">Section Under Construction</div>
                  <div className="text-xs text-slate-400 mt-1">This module is coming in the next phase of the project.</div>
                  <Button 
                    variant="ghost" 
                    size="sm" 
                    className="mt-6"
                    onClick={() => setScreen('dashboard')}
                  >
                    Return to Dashboard
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

export default AdcHeadPortal;
