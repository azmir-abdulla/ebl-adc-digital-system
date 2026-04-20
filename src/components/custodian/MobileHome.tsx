import React from 'react';
import { Badge } from '../shared/UI';
import { Smartphone, Bell, ChevronRight, Activity, ShieldCheck, MapPin } from 'lucide-react';
import { motion } from 'motion/react';

const MobileHome: React.FC<{ onSetScreen: (s: string) => void }> = ({ onSetScreen }) => {
  const tasks = [
    { id: "T1", title: "Cash Loading", atm: "ATM-0055", loc: "Gulshan 1", time: "10:00 AM", type: "Active", duo: "Arif Karim" },
    { id: "T2", title: "Site Audit", atm: "ATM-0042", loc: "Gulshan 2", time: "02:30 PM", type: "Upcoming", duo: "Rasel Ahmed" },
  ];

  return (
    <div className="p-5 space-y-6">
       <header className="flex justify-between items-center">
          <div>
             <h1 className="text-white text-xl font-bold">Safe Deposit</h1>
             <div className="flex items-center gap-1.5 text-[#008244] mt-1">
                <ShieldCheck size={12} />
                <span className="text-[10px] font-bold uppercase tracking-wider">Motiur Rahman · Key Holder</span>
             </div>
          </div>
          <div className="relative">
             <div className="w-9 h-9 rounded-full bg-slate-800 border border-white/5 flex items-center justify-center text-white/50">
                <Bell size={18} />
             </div>
             <div className="absolute top-0 right-0 w-2.5 h-2.5 bg-rose-500 rounded-full border-2 border-[#141f30]" />
          </div>
       </header>

       <div className="bg-[#008244] rounded-2xl p-5 shadow-lg shadow-emerald-900/40 relative overflow-hidden">
          <div className="relative z-10">
             <div className="text-emerald-900 text-[10px] font-bold uppercase tracking-widest mb-1">Today's Earnings</div>
             <div className="text-emerald-950 text-3xl font-bold mono">2,450 <span className="text-sm font-medium">BDT</span></div>
             <div className="flex items-center gap-1.5 text-emerald-900/60 mt-2 text-[10px] font-bold uppercase tracking-wider">
                <Activity size={10} /> 3 Complete Tasks
             </div>
          </div>
          <div className="absolute right-0 bottom-0 p-4 opacity-20">
             <Smartphone size={100} className="text-emerald-950" />
          </div>
       </div>

       <div className="space-y-4">
          <div className="flex justify-between items-end">
             <h2 className="text-white/60 text-[10px] font-bold uppercase tracking-[2px]">My Schedule</h2>
             <span className="text-[#008244] text-[10px] font-bold cursor-pointer hover:underline" onClick={() => onSetScreen('calls')}>See All</span>
          </div>

          <div className="space-y-3">
             {tasks.map((task, i) => (
                <motion.div 
                  key={task.id}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  onClick={() => onSetScreen('calls')}
                  className="bg-slate-800/50 border border-white/5 rounded-2xl p-4 flex items-center gap-4 group active:scale-95 transition-all"
                >
                   <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 ${
                     task.type === 'Active' ? 'bg-amber-500 text-amber-950' : 'bg-slate-700 text-white/30'
                   }`}>
                      <Smartphone size={20} />
                   </div>
                   <div className="flex-1">
                      <div className="text-white text-xs font-bold">{task.title}</div>
                      <div className="text-white/40 text-[10px] mt-0.5">{task.atm} · {task.loc}</div>
                      <div className="text-[#008244] text-[9px] font-bold mt-1 uppercase tracking-wide">Pair: {task.duo}</div>
                   </div>
                   <div className="text-right">
                      <div className="text-white text-[10px] font-bold mono">{task.time}</div>
                      <div className={`text-[8px] font-bold uppercase px-1.5 py-0.5 rounded-full mt-1 inline-block ${
                        task.type === 'Active' ? 'bg-amber-500/10 text-amber-500' : 'bg-slate-700/50 text-slate-500'
                      }`}>
                         {task.type}
                      </div>
                   </div>
                </motion.div>
             ))}
          </div>
       </div>

       <div className="pt-2">
         <div className="bg-[#1b2b42] rounded-2xl p-4 border border-white/5 flex items-center gap-4">
            <div className="w-10 h-10 rounded-full bg-blue-500/10 flex items-center justify-center text-blue-500 shrink-0">
               <MapPin size={20} />
            </div>
            <div>
               <div className="text-white/80 text-[11px] font-bold leading-tight">GPS Tracking Active</div>
               <div className="text-white/30 text-[9px] mt-1 uppercase tracking-widest mono">23.79N, 90.40E</div>
            </div>
            <div className="ml-auto flex items-center gap-2">
               <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping" />
               <div className="text-[10px] font-bold text-emerald-500">Live</div>
            </div>
         </div>
         <p className="text-[8px] text-white/20 text-center mt-3 uppercase tracking-wider">
            Travel distance auto-syncing for conveyance claims
         </p>
       </div>
    </div>
  );
};

export default MobileHome;
