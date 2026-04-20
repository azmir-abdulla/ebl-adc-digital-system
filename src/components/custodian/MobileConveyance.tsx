import React, { useState } from 'react';
import { Truck, MapPin, Navigation, ArrowRight, ShieldCheck } from 'lucide-react';
import { Badge } from '../shared/UI';
import { motion } from 'motion/react';

const MobileConveyance: React.FC = () => {
  return (
    <div className="flex flex-col h-full bg-[#141f30]">
       <header className="p-5 flex items-center justify-between border-b border-white/5">
          <h2 className="text-white font-bold">New Conveyance</h2>
          <div className="text-[10px] text-blue-400 font-bold uppercase tracking-widest flex items-center gap-1.5">
             <Navigation size={14} /> Location Logged
          </div>
       </header>

       <div className="flex-1 p-5 overflow-y-auto space-y-6 pb-20">
          <div className="bg-[#1b2b42] p-4 rounded-2xl border border-white/5 flex gap-4 items-center">
             <div className="w-10 h-10 rounded-xl bg-blue-500/10 text-blue-500 flex items-center justify-center shrink-0 shadow-inner">
                <MapPin size={22} />
             </div>
             <div>
                <div className="text-white text-xs font-bold leading-tight">Gulshan 1 Branch ADC</div>
                <div className="text-white/30 text-[9px] mt-1 uppercase tracking-widest mono">Current Sync Point</div>
             </div>
             <div className="ml-auto">
                <div className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
             </div>
          </div>

          <div className="space-y-4">
             <div>
                <label className="block text-[10px] font-bold text-white/30 uppercase tracking-widest mb-2 px-1">Task Reference</label>
                <select className="w-full h-14 px-4 bg-slate-800 border-none rounded-2xl text-white text-sm focus:ring-2 focus:ring-[#12b886]/20 outline-none transition-all">
                  <option>CALL-0218 — Gulshan DCC</option>
                  <option>CALL-0213 — Motijheel Circle</option>
                  <option>General Audit Task</option>
                </select>
             </div>

             <div className="grid grid-cols-2 gap-4">
                <div>
                   <label className="block text-[10px] font-bold text-white/30 uppercase tracking-widest mb-2 px-1">Distance (KM)</label>
                   <input defaultValue="12.4" className="w-full h-14 px-4 bg-slate-800 border-none rounded-2xl text-white text-sm mono font-bold focus:ring-2 focus:ring-[#12b886]/20 outline-none transition-all" />
                </div>
                <div>
                   <label className="block text-[10px] font-bold text-white/30 uppercase tracking-widest mb-2 px-1">Amount (BDT)</label>
                   <input defaultValue="1,800" className="w-full h-14 px-4 bg-slate-800 border-none rounded-2xl text-white text-sm mono font-bold focus:ring-2 focus:ring-[#12b886]/20 outline-none transition-all" />
                </div>
             </div>

             <div>
                <label className="block text-[10px] font-bold text-white/30 uppercase tracking-widest mb-2 px-1">Transport Mode</label>
                <div className="flex gap-2">
                   {['CNG', 'Rickshaw', 'Bus', 'Bike'].map(mode => (
                      <button key={mode} className={`flex-1 py-3 rounded-xl text-[10px] font-bold border transition-all ${
                        mode === 'CNG' ? 'bg-[#12b886] border-[#12b886] text-[#0a1a14]' : 'bg-slate-800 border-white/5 text-white/40'
                      }`}>
                         {mode}
                      </button>
                   ))}
                </div>
             </div>

             <div>
                <label className="block text-[10px] font-bold text-white/30 uppercase tracking-widest mb-2 px-1">Attach Note</label>
                <textarea rows={3} placeholder="Traveled from ADC to Gulshan 1 DCC via secondary road due to traffic..." className="w-full px-4 py-3 bg-slate-800 border-none rounded-2xl text-white/60 text-xs focus:ring-2 focus:ring-[#12b886]/20 outline-none transition-all resize-none shadow-inner" />
             </div>
          </div>

          <div className="pt-2">
             <button className="w-full bg-[#12b886] text-[#0a1a14] py-4 rounded-2xl font-bold text-sm shadow-xl shadow-emerald-900/40 active:scale-95 transition-all flex items-center justify-center gap-2">
                Submit Claim <ArrowRight size={18} />
             </button>
             <p className="text-[9px] text-white/20 text-center mt-3 uppercase tracking-[2px] px-8">
                Claims will be cross-checked against call history and location logs.
             </p>
          </div>
       </div>
    </div>
  );
};

export default MobileConveyance;
