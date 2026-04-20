import React, { useState } from 'react';
import { 
  Home, 
  ClipboardList, 
  QrCode, 
  Truck, 
  AlertCircle, 
  Key,
  LogOut,
  Bell,
  Wifi,
  Battery,
  Signal
} from 'lucide-react';
import { Badge } from '../shared/UI';
import { motion, AnimatePresence } from 'motion/react';

// Sub-screens
import MobileHome from './MobileHome';
import MobileCalls from './MobileCalls';
import MobileScanner from './MobileScanner';
import MobileConveyance from './MobileConveyance';
import MobileTickets from './MobileTickets';
import MobileOtp from './MobileOtp';

interface CustodianMobileAppProps {
  onBack: () => void;
}

const CustodianMobileApp: React.FC<CustodianMobileAppProps> = ({ onBack }) => {
  const [screen, setScreen] = useState('home');

  const navItems = [
    { id: 'home', label: 'Home', icon: <Home size={20} /> },
    { id: 'calls', label: 'Tasks', icon: <ClipboardList size={20} />, badge: '2' },
    { id: 'scanner', label: 'Scan', icon: <QrCode size={20} /> },
    { id: 'conveyance', label: 'Travel', icon: <Truck size={20} /> },
    { id: 'tickets', label: 'Issue', icon: <AlertCircle size={20} /> },
  ];

  return (
    <div className="flex flex-col items-center">
      {/* Device Wrapper */}
      <div className="relative w-[340px] h-[680px] bg-[#141f30] rounded-[44px] border-[10px] border-slate-800 shadow-2xl overflow-hidden flex flex-col">
        {/* Notch Area */}
        <div className="h-7 w-full bg-[#141f30] flex items-center justify-between px-8 pt-1">
          <div className="flex items-center gap-1.5">
             <span className="text-[#008244] text-[9px] font-black italic">EBL</span>
             <div className="text-[10px] font-bold text-white/30 mono tracking-tighter">9:41</div>
          </div>
          <div className="w-20 h-4 bg-black rounded-b-xl absolute left-1/2 -translate-x-1/2 flex items-center justify-center">
              <div className="w-10 h-1 bg-white/10 rounded-full" />
          </div>
          <div className="flex items-center gap-1.5 text-white/50">
             <Signal size={10} />
             <Wifi size={10} />
             <Battery size={10} />
          </div>
        </div>

        {/* Dynamic Content */}
        <div className="flex-1 overflow-hidden flex flex-col relative bg-[#141f30]">
           <AnimatePresence mode="wait">
              <motion.div
                key={screen}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="flex-1 overflow-y-auto pb-20 no-scrollbar"
              >
                {screen === 'home' && <MobileHome onSetScreen={setScreen} />}
                {screen === 'calls' && <MobileCalls onSetScreen={setScreen} />}
                {screen === 'scanner' && <MobileScanner />}
                {screen === 'conveyance' && <MobileConveyance />}
                {screen === 'tickets' && <MobileTickets />}
                {screen === 'otp' && <MobileOtp onComplete={() => setScreen('home')} />}
              </motion.div>
           </AnimatePresence>

           {/* Mobile Tab Bar */}
           <div className="absolute bottom-0 inset-x-0 h-16 bg-[#0a1628]/95 backdrop-blur-md border-t border-white/5 flex items-center justify-around px-2 z-20 pb-2">
              {navItems.map(item => (
                <button
                  key={item.id}
                  onClick={() => setScreen(item.id)}
                  className={`flex flex-col items-center gap-1 transition-all ${
                    screen === item.id ? "text-[#008244]" : "text-slate-500"
                  }`}
                >
                  <div className="relative">
                    {item.icon}
                    {item.badge && (
                      <span className="absolute -top-1.5 -right-1.5 w-4 h-4 rounded-full bg-rose-500 text-white text-[8px] font-bold flex items-center justify-center border-2 border-[#0a1628]">
                        {item.badge}
                      </span>
                    )}
                  </div>
                  <span className="text-[9px] font-bold uppercase tracking-wider">{item.label}</span>
                </button>
              ))}
           </div>
        </div>
        
        {/* iOS Home Indicator */}
        <div className="h-5 w-full flex items-center justify-center pb-1">
           <div className="w-1/3 h-1 bg-white/20 rounded-full" />
        </div>
      </div>

      <button
        onClick={onBack}
        className="mt-8 flex items-center gap-2 text-white/40 hover:text-white transition-colors text-xs font-semibold"
      >
        <LogOut size={14} /> Exit Mobile Portal
      </button>
    </div>
  );
};

export default CustodianMobileApp;
