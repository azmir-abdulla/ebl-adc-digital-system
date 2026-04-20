import React from 'react';
import { AlertCircle, Plus, ChevronRight, MessageCircle, Clock } from 'lucide-react';
import { Badge } from '../shared/UI';
import { motion } from 'motion/react';

const MobileTickets: React.FC = () => {
  const tickets = [
    { id: "TKT-0301", title: "Card Reader Fault", atm: "ATM-0051", time: "2h ago", status: "In Progress" },
    { id: "TKT-0298", title: "Printer Jam", atm: "ATM-0043", time: "1d ago", status: "Resolved" },
  ];

  return (
    <div className="flex flex-col h-full bg-[#141f30]">
       <header className="p-5 flex items-center justify-between border-b border-white/5">
          <h2 className="text-white font-bold">Issue Tracking</h2>
          <button className="w-9 h-9 rounded-xl bg-[#12b886] text-[#0a1a14] flex items-center justify-center shadow-lg active:scale-95 transition-all">
             <Plus size={20} />
          </button>
       </header>

       <div className="flex-1 p-5 overflow-y-auto space-y-5 pb-20">
          <div className="space-y-3">
             <h3 className="text-white/30 text-[10px] font-bold uppercase tracking-widest px-1">My Recent Tickets</h3>
             {tickets.map((t, i) => (
                <motion.div 
                   key={t.id}
                   initial={{ opacity: 0, y: 10 }}
                   animate={{ opacity: 1, y: 0 }}
                   transition={{ delay: i * 0.1 }}
                   className="bg-[#1b2b42] rounded-3xl p-5 border border-white/5 group active:scale-[0.98] transition-all"
                >
                   <div className="flex justify-between items-start mb-4">
                      <div>
                         <div className="mono text-[10px] text-white/30 font-bold uppercase tracking-wider">{t.id}</div>
                         <div className="text-white text-sm font-bold mt-1 group-hover:text-[#12b886] transition-colors">{t.title}</div>
                      </div>
                      <div className={`px-2 py-1 rounded-full text-[8px] font-bold uppercase tracking-widest ${
                        t.status === 'Resolved' ? 'bg-emerald-500/10 text-emerald-500' : 'bg-amber-500/10 text-amber-500'
                      }`}>
                         {t.status}
                      </div>
                   </div>
                   
                   <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                         <div className="flex items-center gap-1.5 text-[10px] text-white/30 font-bold">
                            <AlertCircle size={12} className="text-blue-500" /> {t.atm}
                         </div>
                         <div className="flex items-center gap-1.5 text-[10px] text-white/30 font-bold">
                            <Clock size={12} /> {t.time}
                         </div>
                      </div>
                      <div className="text-white/20">
                         <ChevronRight size={16} />
                      </div>
                   </div>
                </motion.div>
             ))}
          </div>

          <div className="bg-blue-600/10 rounded-3xl p-6 border border-blue-500/20 shadow-inner">
             <div className="w-10 h-10 rounded-2xl bg-blue-500 text-white flex items-center justify-center mb-4">
                <MessageCircle size={20} />
             </div>
             <h4 className="text-white font-bold text-sm mb-1">Response from Bank</h4>
             <p className="text-white/40 text-[10px] leading-relaxed mb-4">
                "Technical team is dispatched for your ticket TKT-0301. Please wait at location for OTP sync."
             </p>
             <button className="text-blue-500 text-[10px] font-bold uppercase tracking-widest border-b border-blue-500/20 pb-0.5">
                Reply to In-Charge
             </button>
          </div>

          <div className="pt-4">
             <div className="text-[10px] text-white/20 font-bold uppercase tracking-widest mb-4 px-1 text-center">New Issue Report</div>
             <div className="grid grid-cols-2 gap-3">
                <button className="bg-slate-800/50 p-4 rounded-2xl flex flex-col items-center gap-2 active:bg-[#12b886]/10 transition-colors">
                   <div className="w-8 h-8 rounded-full bg-slate-700 flex items-center justify-center text-rose-500">
                      <AlertCircle size={18} />
                   </div>
                   <span className="text-white font-bold text-[10px] uppercase tracking-wide">Hardware</span>
                </button>
                <button className="bg-slate-800/50 p-4 rounded-2xl flex flex-col items-center gap-2 active:bg-[#12b886]/10 transition-colors">
                   <div className="w-8 h-8 rounded-full bg-slate-700 flex items-center justify-center text-blue-500">
                      <Plus size={18} />
                   </div>
                   <span className="text-white font-bold text-[10px] uppercase tracking-wide">Network</span>
                </button>
             </div>
          </div>
       </div>
    </div>
  );
};

export default MobileTickets;
