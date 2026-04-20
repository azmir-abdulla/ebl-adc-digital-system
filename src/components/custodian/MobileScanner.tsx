import React, { useState } from 'react';
import { Camera, QrCode, ClipboardCheck, ArrowLeft, RefreshCw } from 'lucide-react';
import { motion } from 'motion/react';
import { Button } from '../shared/UI';

const MobileScanner: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState<{ id: string, loc: string, plan: string, existing: string } | null>(null);

  const handleScan = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setData({
        id: "ATM-0055",
        loc: "Gulshan 1 DCC Market",
        plan: "20,00,000",
        existing: "80,000"
      });
    }, 1500);
  };

  return (
    <div className="flex flex-col h-full bg-[#141f30]">
       <header className="p-5 flex items-center justify-between border-b border-white/5">
          <h2 className="text-white font-bold">ATM Scanner</h2>
          <div className="text-[10px] text-emerald-400 font-bold uppercase tracking-widest flex items-center gap-1.5">
             <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" /> Camera Active
          </div>
       </header>

       <div className="flex-1 p-5 flex flex-col gap-6">
          {!data && !loading && (
             <div className="flex-1 flex flex-col items-center justify-center space-y-8">
                <div className="relative w-56 h-56 rounded-3xl overflow-hidden border-2 border-emerald-500/50 bg-slate-900 flex items-center justify-center">
                   <div className="absolute inset-0 scan-line" />
                   <QrCode size={120} className="text-white/10" />
                   <div className="absolute top-2 left-2 w-4 h-4 border-t-2 border-l-2 border-emerald-500 rounded-tl-lg" />
                   <div className="absolute top-2 right-2 w-4 h-4 border-t-2 border-r-2 border-emerald-500 rounded-tr-lg" />
                   <div className="absolute bottom-2 left-2 w-4 h-4 border-b-2 border-l-2 border-emerald-500 rounded-bl-lg" />
                   <div className="absolute bottom-2 right-2 w-4 h-4 border-b-2 border-r-2 border-emerald-500 rounded-br-lg" />
                </div>
                <div className="text-center">
                   <p className="text-white/60 text-xs px-8 leading-relaxed">
                      Align the ATM identification QR code within the frame to verify location and security protocols.
                   </p>
                </div>
                <button 
                  onClick={handleScan}
                  className="bg-white/10 text-white p-6 rounded-full hover:bg-white/20 active:scale-95 transition-all shadow-xl"
                >
                  <Camera size={24} />
                </button>
             </div>
          )}

          {loading && (
             <div className="flex-1 flex flex-col items-center justify-center">
                <RefreshCw size={40} className="text-[#12b886] animate-spin mb-4" />
                <div className="text-white text-xs font-bold uppercase tracking-widest">Validating QR Security...</div>
             </div>
          )}

          {data && (
             <motion.div 
               initial={{ opacity: 0, scale: 0.9 }}
               animate={{ opacity: 1, scale: 1 }}
               className="space-y-4"
             >
                <div className="bg-[#1b2b42] rounded-3xl p-6 border border-[#12b886]/30 shadow-2xl">
                   <div className="flex items-center gap-3 mb-6 bg-emerald-500/10 p-4 rounded-2xl">
                      <div className="w-10 h-10 rounded-xl bg-emerald-500 flex items-center justify-center text-[#0a1a14] shrink-0">
                         <ClipboardCheck size={20} />
                      </div>
                      <div>
                         <div className="text-[10px] text-emerald-400 font-bold uppercase tracking-widest">Verification Success</div>
                         <div className="text-white font-bold mono">{data.id} Matches Order</div>
                      </div>
                   </div>

                   <div className="space-y-2 mb-6">
                      {[
                        { k: "Location", v: data.loc },
                        { k: "Morning Sync", v: data.existing },
                        { k: "Load Amount", v: data.plan, highlight: true },
                        { k: "Auth Key", v: "GUL-11-2024", mono: true },
                      ].map(r => (
                        <div key={r.k} className="flex justify-between items-center py-2 border-b border-white/5">
                           <span className="text-[10px] text-white/40 uppercase font-bold">{r.k}</span>
                           <span className={`text-[12px] font-bold ${r.highlight ? 'text-emerald-400' : 'text-white'} ${r.mono ? 'mono' : ''}`}>{r.v}</span>
                        </div>
                      ))}
                   </div>

                   <div className="bg-rose-500/10 border border-rose-500/20 p-4 rounded-2xl mb-6">
                      <div className="text-[9px] text-rose-500 font-bold uppercase tracking-[2px] mb-2 font-mono">DANGER: Security Logic</div>
                      <p className="text-[10px] text-rose-500/80 leading-relaxed font-bold">
                         Vault open sequence active. DO NOT leave the ATM unattended. Combination holder must remain within proximity.
                      </p>
                   </div>

                   <div className="flex gap-2">
                       <button 
                         onClick={() => setData(null)}
                         className="flex-1 bg-white/5 text-white/40 py-3 rounded-2xl text-xs font-bold"
                       >
                         Retake Scan
                       </button>
                       <button 
                         className="flex-2 bg-[#12b886] text-[#0a1a14] py-3 rounded-2xl text-xs font-bold shadow-lg"
                       >
                         Start Cash Load
                       </button>
                   </div>
                </div>
                
                <p className="text-[9px] text-white/20 text-center uppercase tracking-widest leading-relaxed">
                   Loading log will be auto-saved to cloud sync after session closure.
                </p>
             </motion.div>
          )}
       </div>
    </div>
  );
};

export default MobileScanner;
