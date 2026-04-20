import React, { useState } from 'react';
import { Panel, Button, Badge, FormInput } from '../shared/UI';
import { 
  Ticket, 
  Search, 
  MessageCircle, 
  AlertTriangle, 
  Clock, 
  User, 
  Filter, 
  Download,
  CheckCircle2,
  ChevronRight,
  MapPin,
  Flame
} from 'lucide-react';
import { motion } from 'motion/react';

const TicketOverview: React.FC = () => {
  const [filter, setFilter] = useState('All');
  
  const tickets = [
    { id: "TKT-3301", title: "Dispenser_Malfunction_E8", node: "Gulshan ADC", atm: "ATM-0042", date: "2h ago", priority: "CRITICAL", status: "Open", agent: "Arif Karim" },
    { id: "TKT-3298", title: "UPS_Battery_Backup_Low", node: "Mirpur ADC", atm: "ATM-1102", date: "5h ago", priority: "HIGH", status: "Assigned", agent: "Tania B" },
    { id: "TKT-3295", title: "Network_Connectivity_Lost", node: "Sylhet ADC", atm: "ATM-9912", date: "1d ago", priority: "CRITICAL", status: "Escalated", agent: "Nusrat J" },
    { id: "TKT-3290", title: "Screen_Calibration_Needed", node: "Gulshan ADC", atm: "ATM-0051", date: "2d ago", priority: "LOW", status: "Ready", agent: "Motiur R" },
    { id: "TKT-3288", title: "Vault_Handle_Resistance", node: "Chittagong ADC", atm: "ATM-5512", date: "3d ago", priority: "MEDIUM", status: "Resolved", agent: "Shahed A" },
  ];

  return (
    <div className="space-y-4">
      <div className="flex flex-col md:flex-row items-center justify-between gap-4">
         <div className="flex items-center gap-3">
            <div className="p-2 bg-[#003366] text-white rounded shadow-sm">
               <Ticket size={18} />
            </div>
            <div>
               <h2 className="text-sm font-bold text-slate-800 tracking-tight uppercase">CENTRAL_TICKET_BOARD</h2>
               <p className="text-[10px] text-slate-500 font-medium tracking-tight">Real-time incident management and hardware service escalation tracking.</p>
            </div>
         </div>
         <div className="flex gap-2">
            <Button variant="ghost" size="sm" className="h-8 text-[11px] border-slate-200">
               <Download size={14} className="mr-2" /> Export Tickets
            </Button>
            <Button variant="danger" size="sm" className="h-8 text-[11px] font-bold uppercase tracking-tight">
               <AlertTriangle size={14} className="mr-2" /> Raise System Alert
            </Button>
         </div>
      </div>

      {/* Stats Summary */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
         {[
           { label: 'Unassigned_Critical', val: '04', color: 'bg-rose-500', icon: <Flame size={14}/> },
           { label: 'Active_Resolutions', val: '12', color: 'bg-[#003366]', icon: <Clock size={14}/> },
           { label: 'Pending_Verification', val: '08', color: 'bg-amber-500', icon: <CheckCircle2 size={14}/> },
           { label: 'Average_Resolution', val: '4.2h', color: 'bg-[#008244]', icon: <Activity size={14}/> },
         ].map(s => (
           <div key={s.label} className="bg-white border-l-4 border-slate-200 rounded-lg p-3 shadow-sm flex items-center gap-4 transition-all hover:translate-y-[-2px]" style={{ borderColor: s.color.replace('bg-', '') }}>
              <div className={`w-8 h-8 ${s.color} text-white rounded flex items-center justify-center shrink-0`}>
                 {s.icon}
              </div>
              <div>
                 <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{s.label}</div>
                 <div className="text-xl font-bold text-slate-800 mono leading-none mt-1">{s.val}</div>
              </div>
           </div>
         ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-4">
         {/* Filter Card */}
         <div className="lg:col-span-1 space-y-4">
            <Panel title="queue_selection">
               <div className="space-y-3">
                  <FormInput label="Priority_Level" options={["All Priorities", "Critical", "High", "Medium", "Low"]} />
                  <FormInput label="Deployment_Node" options={["All Nodes", "Gulshan ADC", "Mirpur ADC", "Sylhet ADC"]} />
                  <FormInput label="Queue_State" options={["Open", "InProgress", "Ready", "Escalated", "Resolved"]} />
                  
                  <div className="pt-2 border-t border-slate-100 flex flex-col gap-2">
                     <div className="text-[9px] font-bold text-slate-400 uppercase tracking-widest">Ownership</div>
                     <div className="flex items-center gap-2 px-2 py-1.5 bg-slate-50 border border-slate-200 rounded cursor-pointer hover:bg-slate-100">
                        <User size={12} className="text-slate-400" />
                        <span className="text-[10px] font-bold text-slate-600">Assigned to Me</span>
                     </div>
                  </div>
                  
                  <Button variant="gold" size="sm" className="w-full h-8 text-[10px] uppercase font-bold mt-2">Filter_Queue</Button>
               </div>
            </Panel>

            <div className="bg-[#003366] rounded-lg p-4 text-white shadow-xl relative overflow-hidden group">
               <div className="absolute right-0 top-0 opacity-10 group-hover:scale-110 transition-transform">
                  <MessageCircle size={100} />
               </div>
               <div className="relative z-10">
                  <h4 className="text-[10px] font-extrabold uppercase tracking-widest mb-1 text-indigo-400">Communication Hub</h4>
                  <p className="text-[11px] font-medium leading-relaxed mb-4 opacity-70 italic font-serif">
                     "Regional Head, please verify the network outage tickets from Sylhet node by EOD."
                  </p>
                  <Button variant="primary" size="sm" className="h-6 text-[9px] w-full border-white/20 bg-white/10 hover:bg-white/20">Open_Channel</Button>
               </div>
            </div>
         </div>

         {/* Ticket List */}
         <div className="lg:col-span-3">
            <Panel title="incident_management_history" noPad>
               <div className="overflow-x-auto">
                  <table className="w-full text-left border-collapse">
                     <thead className="bg-slate-50 border-b border-slate-200">
                        <tr className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">
                           <th className="py-2 px-3 border-r border-slate-200 w-24">Ticket ID</th>
                           <th className="py-2 px-3 border-r border-slate-200">Issue_Description / Node</th>
                           <th className="py-2 px-3 border-r border-slate-200 w-28">Priority</th>
                           <th className="py-2 px-3 border-r border-slate-200 w-28">Agent</th>
                           <th className="py-2 px-3 border-r border-slate-200 w-24">Time_Age</th>
                           <th className="py-2 px-3 uppercase text-right">Actions</th>
                        </tr>
                     </thead>
                     <tbody className="divide-y divide-slate-100 text-[11px]">
                        {tickets.map((t, i) => (
                           <motion.tr 
                             key={t.id}
                             initial={{ opacity: 0, x: 5 }}
                             animate={{ opacity: 1, x: 0 }}
                             transition={{ delay: i * 0.03 }}
                             className={`hover:bg-slate-50 transition-colors ${i % 2 === 1 ? 'bg-[#003366]/5' : ''}`}
                           >
                              <td className="py-2 px-3 border-r border-slate-100 font-mono font-bold text-[#003366]">{t.id}</td>
                              <td className="py-2 px-3 border-r border-slate-100">
                                 <div>
                                    <div className="font-bold text-slate-700">{t.title}</div>
                                    <div className="text-[10px] text-slate-400 flex items-center gap-1.5 mt-0.5">
                                       <MapPin size={10} /> {t.node} · {t.atm}
                                    </div>
                                 </div>
                              </td>
                              <td className="py-2 px-3 border-r border-slate-100">
                                 <Badge text={t.priority} type={t.priority === 'CRITICAL' ? 'danger' : t.priority === 'HIGH' ? 'warning' : 'info'} small />
                              </td>
                              <td className="py-2 px-3 border-r border-slate-100">
                                 <div className="flex items-center gap-1.5">
                                    <div className="w-5 h-5 rounded-full bg-[#008244]/10 flex items-center justify-center text-[7px] font-bold text-[#008244] uppercase">{t.agent[0]}</div>
                                    <span className="font-bold text-slate-600 text-[10px]">{t.agent}</span>
                                 </div>
                              </td>
                              <td className="py-2 px-3 border-r border-slate-100 text-slate-500 font-mono italic">{t.date}</td>
                              <td className="py-2 px-3 text-right">
                                 <Button variant="ghost" size="sm" className="h-6 w-6 p-0 justify-center"><ChevronRight size={14} className="text-slate-300"/></Button>
                              </td>
                           </motion.tr>
                        ))}
                     </tbody>
                  </table>
               </div>
               <div className="p-2 flex justify-center bg-slate-50/50">
                  <Button variant="ghost" size="sm" className="text-[10px] uppercase font-extrabold tracking-widest text-slate-400 hover:text-[#003366]">History_Index_Access →</Button>
               </div>
            </Panel>
         </div>
      </div>
    </div>
  );
};

const Activity = ({ size, className }: { size: number, className?: string }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/>
  </svg>
);

export default TicketOverview;
