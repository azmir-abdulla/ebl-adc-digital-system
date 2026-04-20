import React, { useState } from 'react';
import { ShieldCheck, ArrowRight, RefreshCw, Smartphone } from 'lucide-react';
import { motion } from 'motion/react';

const MobileOtp: React.FC<{ onComplete: () => void }> = ({ onComplete }) => {
  const [otp, setOtp] = useState(['7', '2', '4', '9', '1', '5']);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleVerify = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSuccess(true);
      setTimeout(onComplete, 2500);
    }, 2000);
  };

  return (
    <div className="flex flex-col h-full bg-[#141f30]">
       <header className="p-5 flex items-center justify-between border-b border-white/5">
          <h2 className="text-white font-bold">Verification</h2>
          <div className="text-[10px] text-amber-500 font-bold uppercase tracking-widest flex items-center gap-1.5">
             <Smartphone size={14} /> SMS Secondary Sync
          </div>
       </header>

       <div className="flex-1 p-5 flex flex-col items-center justify-center">
          {!success ? (
            <div className="w-full space-y-8 flex flex-col items-center">
               <div className="w-20 h-20 bg-amber-500/10 text-amber-500 rounded-full flex items-center justify-center mb-2">
                  <ShieldCheck size={40} />
               </div>

               <div className="text-center">
                  <h3 className="text-white font-bold text-lg mb-2">Combo Holder OTP</h3>
                  <p className="text-white/40 text-xs px-6 leading-relaxed">
                     A 6-digit verification code has been sent to <strong>Arif Karim</strong> to finalize the loading of 12 ATMs in Gulshan.
                  </p>
               </div>

               <div className="flex gap-2 justify-center">
                  {otp.map((d, i) => (
                    <motion.div 
                      key={i}
                      initial={{ opacity: 0, scale: 0.5 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: i * 0.05 }}
                      className="w-10 h-14 rounded-2xl bg-slate-800 border-2 border-[#12b886] flex items-center justify-center text-white text-xl font-bold mono shadow-xl"
                    >
                      {d}
                    </motion.div>
                  ))}
               </div>

               <div className="w-full space-y-3 pt-6 px-4">
                  <button 
                    disabled={loading}
                    onClick={handleVerify}
                    className="w-full bg-[#12b886] text-[#0a1a14] py-4 rounded-2xl font-bold text-sm shadow-xl shadow-emerald-900/40 active:scale-95 transition-all flex items-center justify-center gap-2"
                  >
                     {loading ? <RefreshCw className="animate-spin" size={18} /> : <>Verify & Close Session <ArrowRight size={18} /></>}
                  </button>
                  <button className="w-full text-white/30 text-[10px] font-bold uppercase tracking-widest py-2">
                    Resend Code (59s)
                  </button>
               </div>
            </div>
          ) : (
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center p-8 bg-emerald-500/10 border border-emerald-500/20 rounded-[40px] shadow-2xl relative overflow-hidden"
            >
               <div className="w-20 h-20 bg-emerald-500 text-[#0a1a14] rounded-full flex items-center justify-center mx-auto mb-6 shadow-[0_0_30px_rgba(18,184,134,0.4)]">
                  <ShieldCheck size={40} />
               </div>
               <h2 className="text-white text-xl font-bold mb-2">Session Closed</h2>
               <p className="text-emerald-500/60 text-xs px-4 font-bold leading-relaxed mb-6">
                  Replenishment complete for all scheduled ATMs. Operation summary uploaded to ADC Centre.
               </p>
               <div className="flex justify-center gap-4">
                  <div className="flex flex-col items-center">
                     <span className="text-[10px] text-white/20 uppercase font-bold tracking-widest mb-1">Time</span>
                     <span className="text-white text-xs mono">12:35 PM</span>
                  </div>
                  <div className="w-px h-8 bg-white/5" />
                  <div className="flex flex-col items-center">
                     <span className="text-[10px] text-white/20 uppercase font-bold tracking-widest mb-1">Volume</span>
                     <span className="text-white text-xs mono">48.0 L BDT</span>
                  </div>
               </div>
            </motion.div>
          )}
       </div>
    </div>
  );
};

export default MobileOtp;
