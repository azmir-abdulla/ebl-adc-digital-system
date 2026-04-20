import React from 'react';
import { Panel, Button, Badge, FormInput } from '../shared/UI';
import { PhoneCall, Search, Plus, MessageSquare, Clock, User, Phone } from 'lucide-react';
import { motion } from 'motion/react';

const CentreCalls: React.FC = () => {
  const calls = [
    { id: "CALL-88", subject: "ATM Offline Alert", from: "ATM-0042 Sys", type: "Automated", time: "10 mins ago", state: "Active" },
    { id: "CALL-87", subject: "Replenishment Delay", from: "Arif Karim", type: "Custodian", time: "25 mins ago", state: "Completed" },
    { id: "CALL-86", subject: "Security Verification", from: "Head Office", type: "Inbound", time: "1h ago", state: "Missed" },
  ];

  return (
    <div className="space-y-4">
       <div className="flex justify-between items-center bg-white p-3 border border-slate-200 rounded-lg shadow-sm">
          <div className="flex items-center gap-3">
             <div className="p-2 bg-indigo-500 text-white rounded shadow-md"><PhoneCall size={18}/></div>
             <div>
                <h2 className="text-sm font-bold text-slate-800 uppercase tracking-tight">COMMUNICATION_CENTER</h2>
                <p className="text-[10px] text-slate-400 font-medium tracking-tight">Manage inbound/outbound calls and automated system alerts for the branch.</p>
             </div>
          </div>
          <Button variant="primary" size="sm" className="h-8 font-bold uppercase tracking-widest text-[9px]">
             <Plus size={14} className="mr-2" /> Start_Communication_Cycle
          </Button>
       </div>

       <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          <div className="lg:col-span-2">
             <Panel title="active_call_queue" noPad>
                <div className="divide-y divide-slate-100">
                   {calls.map(c => (
                      <div key={c.id} className="p-3 flex items-center justify-between hover:bg-slate-50 transition-all cursor-pointer group">
                         <div className="flex items-center gap-4">
                            <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                               c.state === 'Active' ? 'bg-emerald-100 text-emerald-600 animate-pulse' : 
                               c.state === 'Missed' ? 'bg-rose-100 text-rose-600' : 'bg-slate-100 text-slate-400'
                            }`}>
                               <Phone size={18} />
                            </div>
                            <div>
                               <div className="text-[10px] font-mono font-bold text-slate-400 mb-0.5">{c.id}</div>
                               <div className="text-sm font-bold text-slate-800 group-hover:text-indigo-600 transition-colors">{c.subject}</div>
                               <div className="text-[10px] text-slate-500 font-medium">From: <span className="font-bold text-slate-700">{c.from}</span> · {c.type}</div>
                            </div>
                         </div>
                         <div className="text-right">
                            <div className="text-[10px] text-slate-400 font-mono mb-1">{c.time}</div>
                            <Badge text={c.state} type={c.state === 'Active' ? 'success' : c.state === 'Missed' ? 'danger' : 'neutral'} small />
                         </div>
                      </div>
                   ))}
                </div>
                <div className="p-2 border-t border-slate-50 bg-slate-50/50 flex justify-center">
                   <Button variant="ghost" size="sm" className="text-[9px] font-bold text-slate-400 uppercase tracking-widest py-1">View_Detailed_CDR_Logs →</Button>
                </div>
             </Panel>
          </div>

          <div className="lg:col-span-1 space-y-4">
             <Panel title="quick_dial_custodians">
                <div className="space-y-2">
                   {[
                     { name: 'Arif Karim', status: 'Online' },
                     { name: 'Motiur Rahman', status: 'In Call' },
                     { name: 'Sumaiya B', status: 'Rest' },
                   ].map(cu => (
                      <div key={cu.name} className="flex items-center justify-between p-2 bg-slate-50 rounded border border-slate-100">
                         <div className="flex items-center gap-2">
                            <div className="w-6 h-6 rounded bg-slate-200 flex items-center justify-center text-[8px] font-bold text-slate-500">{cu.name[0]}</div>
                            <span className="text-[10px] font-bold text-slate-700">{cu.name}</span>
                         </div>
                         <Button variant="ghost" size="sm" className="h-6 px-1.5 border-slate-200">
                            <Phone size={10} className="text-indigo-600" />
                         </Button>
                      </div>
                   ))}
                </div>
             </Panel>
             
             <div className="bg-indigo-900 rounded-lg p-4 text-white shadow-lg">
                <div className="flex items-center gap-2 mb-2">
                   <MessageSquare size={14} className="text-indigo-400" />
                   <span className="text-[10px] font-bold uppercase tracking-widest">Broadcast Notice</span>
                </div>
                <p className="text-[10px] text-indigo-200 leading-relaxed font-medium">
                   All custodians in Zone 2: Please confirm the load status of ATM-0055 via secure mobile sync immediately.
                </p>
             </div>
          </div>
       </div>
    </div>
  );
};

export default CentreCalls;
