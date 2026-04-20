import React from 'react';
import { Smartphone, Clock, MapPin, Users, CheckCircle, ChevronLeft } from 'lucide-react';
import { motion } from 'motion/react';

const MobileCalls: React.FC<{ onSetScreen: (s: string) => void }> = ({ onSetScreen }) => {
  return (
    <div className="flex flex-col h-full bg-[#141f30]">
       <header className="p-5 flex items-center gap-3 border-b border-white/5">
          <button 
            onClick={() => onSetScreen('home')}
            className="w-8 h-8 rounded-lg bg-slate-800 flex items-center justify-center text-white/50"
          >
             <ChevronLeft size={18} />
          </button>
          <h2 className="text-white font-bold">Today's Tasks</h2>
       </header>

       <div className="flex-1 overflow-y-auto p-5 pb-20 space-y-4">
          <div className="space-y-3">
             <h3 className="text-white/40 text-[10px] font-bold uppercase tracking-wider">Active Call — Urgent</h3>
             <div className="bg-[#1b2b42] rounded-3xl p-5 border border-[#12b886]/30 shadow-lg relative overscroll-hidden">
                <div className="flex justify-between items-start mb-4">
                   <div>
                      <div className="mono text-[10px] text-[#12b886] font-bold">CALL-0218</div>
                      <div className="text-white text-lg font-bold">Cash Loading</div>
                   </div>
                   <div className="px-2 py-1 bg-rose-500/20 text-rose-500 rounded-full text-[9px] font-bold uppercase tracking-tighter">Low Cash</div>
                </div>

                <div className="space-y-3 mb-6">
                   <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-slate-700/50 flex items-center justify-center text-white/40 shrink-0">
                         <MapPin size={16} />
                      </div>
                      <div className="text-white/60 text-xs">ATM-0055 · Gulshan 1 DCC Market</div>
                   </div>
                   <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-slate-700/50 flex items-center justify-center text-white/40 shrink-0">
                         <Clock size={16} />
                      </div>
                      <div className="text-white/60 text-xs">Started at 10:05 AM (0h 15m elapsed)</div>
                   </div>
                   <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-slate-700/50 flex items-center justify-center text-white/40 shrink-0">
                         <Users size={16} />
                      </div>
                      <div className="text-emerald-400 text-xs font-bold underline decoration-emerald-400/20">Arif Karim · Combo Holder</div>
                   </div>
                </div>

                <div className="bg-[#0a1628]/50 rounded-2xl p-3 border border-white/5 mb-6 text-xs text-white/40 leading-relaxed italic">
                   Note: Critical balance alert. Load 20L BDT as priority. Verify shuttle mechanism after load.
                </div>

                <button 
                  onClick={() => onSetScreen('scanner')}
                  className="w-full bg-[#12b886] text-[#0a1a14] py-4 rounded-2xl font-bold text-sm shadow-xl shadow-emerald-900/40 active:scale-95 transition-all flex items-center justify-center gap-2"
                >
                   Open ATM Scanner <CheckCircle size={18} />
                </button>
             </div>
          </div>

          <div className="space-y-3 pt-4">
             <h3 className="text-white/40 text-[10px] font-bold uppercase tracking-wider">Queue</h3>
             <div className="bg-slate-800/30 rounded-3xl p-5 border border-white/5 opacity-50 grayscale">
                <div className="flex justify-between items-center mb-3">
                   <div className="text-white font-bold text-sm">Site Inspection</div>
                   <div className="mono text-[10px] text-white/30">CALL-0219</div>
                </div>
                <div className="text-xs text-white/40">ATM-0042 · Gulshan 2 · Next Due: 02:30 PM</div>
                <div className="mt-4 flex gap-2">
                   <div className="w-6 h-6 rounded-full bg-slate-700 border border-white/10" />
                   <div className="w-6 h-6 rounded-full bg-slate-700 border border-white/10" />
                </div>
             </div>
          </div>
       </div>
    </div>
  );
};

export default MobileCalls;
