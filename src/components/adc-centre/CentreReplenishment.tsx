import React, { useState } from 'react';
import { Badge, Button, Panel, FormInput } from '../shared/UI';
import { motion, AnimatePresence } from 'motion/react';
import { Check, ShieldCheck, Truck, Users, ArrowRight, ArrowLeft } from 'lucide-react';

const CentreReplenishment: React.FC = () => {
  const [step, setStep] = useState(1);
  const [submitted, setSubmitted] = useState(false);
  const [amounts, setAmounts] = useState<Record<string, string>>({ 
    "ATM-0055": "20,00,000", 
    "ATM-0042": "10,00,000", 
    "ATM-0051": "10,00,000", 
    "ATM-0043": "8,00,000" 
  });
  
  const [keyHolder, setKeyHolder] = useState("Motiur Rahman");
  const [comboHolder, setComboHolder] = useState("Arif Karim");

  const steps = [
    { n: 1, label: "Cash Position", icon: <Monitor size={14}/> },
    { n: 2, label: "Set Amounts", icon: <Coins size={14}/> },
    { n: 3, label: "Assign Team", icon: <Users size={14}/> },
    { n: 4, label: "CIT Dispatch", icon: <Truck size={14}/> }
  ];

  const atms = [
    { id: "ATM-0055", loc: "Gulshan 1 DCC Market", existing: "80,000", critical: true },
    { id: "ATM-0042", loc: "Gulshan 2 Circle", existing: "12,40,000", critical: false },
    { id: "ATM-0051", loc: "Niketan Complex", existing: "2,80,000", critical: false },
    { id: "ATM-0043", loc: "Banani Road 11", existing: "9,20,000", critical: false },
  ];

  const handleNext = () => setStep(s => s + 1);
  const handleBack = () => setStep(s => s - 1);
  const handleSubmit = () => setSubmitted(true);

  if (submitted) return <SubmitSuccess refId="CR-2024-0319" onReset={() => { setSubmitted(false); setStep(1); }} />;

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      {/* Custom Stepper */}
      <div className="bg-white border border-[#b2d8ca] rounded-xl px-1 py-4 flex items-center justify-between mb-8 shadow-sm">
        {steps.map((s, idx) => (
          <React.Fragment key={idx}>
            <div className="flex-1 flex flex-col items-center gap-1 group">
               <div 
                 className={`w-9 h-9 rounded-full flex items-center justify-center text-xs font-bold transition-all duration-300 border-2 ${
                   step > s.n ? 'bg-[#008244] border-[#008244] text-white shadow-lg' : 
                   step === s.n ? 'bg-[#003366] border-[#003366] text-white shadow-xl scale-110' : 
                   'bg-white border-slate-200 text-slate-400'
                 }`}
               >
                 {step > s.n ? <Check size={16} /> : s.n}
               </div>
               <span className={`text-[10px] font-bold uppercase tracking-wider ${
                 step === s.n ? 'text-[#003366]' : 'text-slate-400'
               }`}>
                 {s.label}
               </span>
            </div>
            {idx < steps.length - 1 && (
              <div className={`h-0.5 w-12 shrink-0 ${step > s.n ? 'bg-[#008244]' : 'bg-slate-100'}`} />
            )}
          </React.Fragment>
        ))}
      </div>

      <AnimatePresence mode="wait">
        <motion.div
           key={step}
           initial={{ opacity: 0, x: 20 }}
           animate={{ opacity: 1, x: 0 }}
           exit={{ opacity: 0, x: -20 }}
           transition={{ duration: 0.3 }}
        >
          {step === 1 && (
            <Panel title="Step 1: Analyzing Current Cash Position" action="System Sync: 5m ago">
               <div className="bg-[#008244]/5 text-[#008244] text-[11px] p-3 rounded-lg mb-6 border border-[#008244]/10 leading-relaxed">
                  Morning Cash Position report shows critical state for <strong>ATM-0055</strong>. 
                  Below are the ATMs under your management with their existing balances.
               </div>
               <div className="space-y-3">
                  {atms.map(a => (
                    <div key={a.id} className="flex items-center gap-4 p-3 bg-slate-50 border border-slate-100 rounded-lg group hover:border-[#008244]/30 transition-colors">
                       <div className={`w-2.5 h-2.5 rounded-full ${a.critical ? 'bg-rose-500 animate-pulse' : 'bg-[#008244]'}`} />
                       <div className="flex-1">
                          <div className="text-xs font-bold text-slate-800 flex items-center gap-2">
                             <span className="mono text-[#003366]">{a.id}</span>
                             <span>· {a.loc}</span>
                          </div>
                       </div>
                       <div className="text-right flex items-center gap-4">
                          <div className={`mono text-sm font-bold ${a.critical ? 'text-rose-600' : 'text-slate-700'}`}>{a.existing}</div>
                          {a.critical && <Badge text="Critical" type="danger" small />}
                       </div>
                    </div>
                  ))}
               </div>
               <div className="mt-8 flex justify-end">
                  <Button variant="success" onClick={handleNext}>Initialize Loading Plan <ArrowRight size={14} className="ml-2"/></Button>
               </div>
            </Panel>
          )}

          {step === 2 && (
            <Panel title="Step 2: Set Loading Amounts">
               <div className="flex items-center justify-between mb-6 pb-4 border-b border-slate-100">
                  <div className="text-xs text-slate-500">Suggested amounts based on ATM history and limits.</div>
                  <div className="text-right">
                    <div className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">Total Required</div>
                    <div className="mono text-xl font-bold text-[#0c3d30]">48,00,000 BDT</div>
                  </div>
               </div>
               <div className="space-y-4">
                  {atms.map(a => (
                    <div key={a.id} className={`flex items-center justify-between p-4 rounded-xl border ${a.critical ? 'border-rose-100 bg-rose-50/10' : 'border-slate-200 bg-white'}`}>
                       <div className="space-y-1">
                          <div className="text-sm font-bold text-slate-800 flex items-center gap-2">
                            {a.id} <span className="font-medium text-slate-500">· {a.loc}</span>
                          </div>
                          <div className="text-[11px] text-slate-400 flex items-center gap-3">
                             <span>Current: <span className="mono text-slate-600">{a.existing}</span></span>
                             <span className="w-px h-3 bg-slate-200" />
                             <span>Limit: <span className="mono text-slate-600">30,00,000</span></span>
                          </div>
                       </div>
                       <div className="flex items-center gap-3">
                          <span className="text-[10px] font-bold text-slate-400 uppercase">Load BDT:</span>
                          <input 
                            value={amounts[a.id]}
                            onChange={e => setAmounts({...amounts, [a.id]: e.target.value})}
                            className="w-32 px-3 py-2 text-sm mono font-bold text-right border border-slate-200 rounded-lg focus:ring-2 focus:ring-[#12b886]/20 bg-white"
                          />
                       </div>
                    </div>
                  ))}
               </div>
               <div className="mt-8 flex justify-between">
                  <Button variant="ghost" onClick={handleBack}><ArrowLeft size={14} className="mr-2"/> Back</Button>
                  <Button variant="success" onClick={handleNext}>Assign Custodians <ArrowRight size={14} className="ml-2"/></Button>
               </div>
            </Panel>
          )}

          {step === 3 && (
            <Panel title="Step 3: Assign Verification Pair" action="Pair Rules Applied">
               <div className="bg-blue-50/50 border border-blue-100 p-4 rounded-xl text-[11px] text-blue-800 mb-6 flex gap-3">
                 <ShieldCheck className="shrink-0" size={18} />
                 <div>
                   Assign a mandatory duo for this task. The <strong>Key Holder</strong> provides physical access, while any available 
                   <strong> Combination Holder</strong> can be assigned to ensure operational flexibility.
                 </div>
               </div>

               <div className="space-y-6">
                 <div>
                   <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-2">Key Holder (Primary Access)</label>
                   <div className="flex gap-4">
                      <select 
                        value={keyHolder} 
                        onChange={e => setKeyHolder(e.target.value)}
                        className="flex-1 px-4 py-3 bg-white border border-slate-200 rounded-xl text-sm font-medium focus:ring-2 focus:ring-emerald-100 outline-none"
                      >
                         <option>Motiur Rahman</option>
                         <option>Sumaiya Begum</option>
                      </select>
                      <div className="px-4 py-3 bg-emerald-50 text-emerald-700 text-[11px] font-bold rounded-xl flex items-center shrink-0">Available</div>
                   </div>
                   <p className="text-[10px] text-slate-400 mt-2 px-1">Holders designated set of mechanical keys for Gulshan region.</p>
                 </div>

                 <div>
                   <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-2">Combination Holder (OTP Verification)</label>
                   <div className="flex gap-4">
                      <select 
                        value={comboHolder} 
                        onChange={e => setComboHolder(e.target.value)}
                        className="flex-1 px-4 py-3 bg-white border border-slate-200 rounded-xl text-sm font-medium focus:ring-2 focus:ring-blue-100 outline-none"
                      >
                         <option>Arif Karim</option>
                         <option>Hasan Islam</option>
                         <option>Rasel Ahmed</option>
                      </select>
                      <div className="px-4 py-3 bg-emerald-50 text-emerald-700 text-[11px] font-bold rounded-xl flex items-center shrink-0">Available</div>
                   </div>
                   <p className="text-[10px] text-slate-400 mt-2 px-1">Dynamic assignment — can be changed at ATM site if original assignee is unresponsive.</p>
                 </div>

                 <div className="p-4 bg-slate-900 rounded-2xl flex items-center justify-between text-white shadow-2xl">
                    <div className="space-y-1">
                       <div className="text-[9px] font-bold uppercase text-white/40 tracking-widest">Selected Pair</div>
                       <div className="flex items-center gap-3">
                          <span className="text-sm font-bold text-amber-400 underline decoration-amber-400/30">{keyHolder}</span>
                          <span className="text-white/30 text-xs">+</span>
                          <span className="text-sm font-bold text-blue-400 underline decoration-blue-400/30">{comboHolder}</span>
                       </div>
                    </div>
                    <div className="text-right">
                       <div className="text-[9px] font-bold uppercase text-white/40 tracking-widest">Total Task Volume</div>
                       <div className="mono text-lg font-bold text-[#63e6be]">48.0 L</div>
                    </div>
                 </div>
               </div>

               <div className="mt-8 flex justify-between">
                  <Button variant="ghost" onClick={handleBack}><ArrowLeft size={14} className="mr-2"/> Back</Button>
                   <Button variant="success" onClick={handleNext}>Finalize CIT Dispatch <ArrowRight size={14} className="ml-2"/></Button>
               </div>
            </Panel>
          )}

          {step === 4 && (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
               <Panel title="Step 4: Dispatch Details">
                  <div className="space-y-4">
                     <FormInput label="CIT Transport Company" options={["CIT Bangladesh Ltd.", "SecureCash BD", "TransSafe"]} />
                     <div className="grid grid-cols-2 gap-3">
                        <FormInput label="Vehicle ID" placeholder="METRO-GA-1122" />
                        <FormInput label="Est. Arrival" type="time" />
                     </div>
                     <FormInput label="Replenishment Notes" rows={3} placeholder="Security codes changed for Gulshan-1 DCC area. Caution required." />
                  </div>
                  <div className="mt-6">
                     <Button variant="ghost" size="sm" onClick={handleBack}><ArrowLeft size={14} className="mr-2"/> Adjust Pair</Button>
                  </div>
               </Panel>
               <Panel title="Final Order Review" className="bg-slate-50">
                  <div className="space-y-3 mb-6">
                     {[
                       { k: "Order Ref", v: "CR-2024-0319", m: true },
                       { k: "Total ATMs", v: "4 Machines", m: false },
                       { k: "Cash Required", v: "48,00,000 BDT", m: true, c: "text-[#008244]" },
                       { k: "CIT Provider", v: "CIT Bangladesh Ltd.", m: false },
                     ].map(r => (
                       <div key={r.k} className="flex justify-between items-center py-2 border-b border-white border-opacity-50">
                          <span className="text-xs text-slate-400 font-medium">{r.k}</span>
                          <span className={`${r.m ? 'mono text-sm uppercase' : 'text-sm'} font-bold ${r.c || 'text-slate-800'}`}>{r.v}</span>
                       </div>
                     ))}
                  </div>
                  
                  <div className="text-[10px] text-slate-400 font-bold uppercase tracking-widest mb-2 px-1">Planned Loads</div>
                  <div className="bg-white rounded-lg border border-slate-200 overflow-hidden divide-y divide-slate-100 mb-6">
                     {atms.map(a => (
                       <div key={a.id} className="p-2.5 flex justify-between items-center">
                          <div className="mono text-[10px] font-bold text-[#003366]">{a.id}</div>
                          <div className="mono text-xs font-bold text-slate-700">{amounts[a.id]}</div>
                       </div>
                     ))}
                  </div>

                  <Button variant="primary" className="w-full justify-center h-12 text-[13px]" onClick={handleSubmit}>
                    Submit to Head of ADC <ArrowRight size={16} className="ml-2" />
                  </Button>
                  <p className="text-[10px] text-center text-slate-400 mt-3 italic flex items-center justify-center gap-1">
                    <ShieldCheck size={10} /> Authenticated session: Kabir Ahmed
                  </p>
               </Panel>
            </div>
          )}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

const SubmitSuccess: React.FC<{ refId: string, onReset: () => void }> = ({ refId, onReset }) => (
  <div className="max-w-2xl mx-auto text-center py-12 px-6">
     <div className="w-20 h-20 bg-emerald-100 text-[#008244] rounded-full flex items-center justify-center mx-auto mb-6 shadow-sm border-2 border-emerald-50">
        <Check size={40} />
     </div>
     <h2 className="text-2xl font-bold text-slate-800 mb-2">Replenishment Plan Submitted</h2>
     <div className="mono text-sm text-[#003366] font-bold mb-6">REFERENCE ID: {refId}</div>
     <p className="text-sm text-slate-500 leading-relaxed mb-10 max-w-md mx-auto">
        Your cash loading request has been forwarded to the <strong>ADC Head</strong> for final authorization. 
        CIT and Custodians will be notified once the approval is complete.
     </p>
     
     <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
        {[
          { label: "ADC Head", status: "In Inbox", time: "Pending", color: "text-amber-500" },
          { label: "CIT Bangladesh", status: "Pre-alerted", time: "Waiting", color: "text-slate-400" },
          { label: "Custodians", status: "SMS Sent", time: "Queued", color: "text-blue-400" },
        ].map(n => (
          <div key={n.label} className="bg-white border border-slate-200 rounded-xl p-4 text-left">
            <div className="text-[10px] font-bold uppercase text-slate-400 mb-1">{n.label}</div>
            <div className="text-xs font-bold text-slate-800">{n.status}</div>
            <div className={`text-[10px] font-semibold flex items-center gap-1 mt-1 ${n.color}`}>
               <div className={`w-1 h-1 rounded-full bg-current ${n.label === 'ADC Head' ? 'animate-pulse' : ''}`} /> {n.time}
            </div>
          </div>
        ))}
     </div>

     <div className="flex gap-3 justify-center">
        <Button variant="ghost" onClick={onReset}>View History</Button>
        <Button variant="gold" onClick={onReset}>New Order</Button>
     </div>
  </div>
);

const Coins = ({ size, className }: { size: number, className?: string }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <circle cx="8" cy="8" r="6"/><path d="M18.09 10.37A6 6 0 1 1 10.34 18"/><path d="M7 6h1v4"/><path d="m16.71 13.88.7.71-2.82 2.82"/>
  </svg>
);

const Monitor = ({ size, className }: { size: number, className?: string }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <rect width="20" height="14" x="2" y="3" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/>
  </svg>
);

export default CentreReplenishment;
