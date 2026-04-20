import React from 'react';
import { Panel, Button, Badge } from '../shared/UI';
import { Truck, MapPin, Download, Filter, Search, Calendar, ChevronRight } from 'lucide-react';
import { motion } from 'motion/react';

const Conveyance: React.FC = () => {
  const requests = [
    { id: "CON-082", node: "Gulshan ADC", amt: "4,200", reason: "Emergency Refill Transit", staff: "3 Custodians", status: "Review", date: "Today" },
    { id: "CON-081", node: "Mirpur ADC", amt: "2,850", reason: "Route Optimization Shift", staff: "2 Custodians", status: "Approved", date: "Today" },
    { id: "CON-080", node: "Motijheel ADC", amt: "5,100", reason: "Late Night Operations", staff: "4 Custodians", status: "Pending", date: "Yesterday" },
  ];

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center bg-white p-3 border border-slate-200 rounded-lg shadow-sm">
         <div className="flex items-center gap-3">
            <div className="p-2 bg-[#003366] text-white rounded"><Truck size={18}/></div>
            <div>
               <h2 className="text-sm font-bold text-slate-800 uppercase tracking-tight">CONVEYANCE_MANAGEMENT</h2>
               <p className="text-[10px] text-slate-400 font-medium">Monitoring transit expenses and staff movement logistics.</p>
            </div>
         </div>
         <Button variant="gold" size="sm" className="h-8">Batch Process Claims</Button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-4">
         <div className="lg:col-span-3">
            <Panel title="active_conveyance_requisitions" noPad>
               <table className="w-full text-left border-collapse">
                  <thead className="bg-slate-50 border-b border-slate-200">
                     <tr className="text-[9px] text-slate-400 font-bold uppercase tracking-wider">
                        <th className="py-2 px-3 border-r border-slate-200 w-20">CLAIM_ID</th>
                        <th className="py-2 px-3 border-r border-slate-200">Origin / Reason</th>
                        <th className="py-2 px-3 border-r border-slate-200 w-24 text-right">Amount (BDT)</th>
                        <th className="py-2 px-3 border-r border-slate-200 w-24">Allocation</th>
                        <th className="py-2 px-3 text-right">State</th>
                     </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 text-[11px]">
                     {requests.map(r => (
                        <tr key={r.id} className="hover:bg-[#003366]/5 transition-colors">
                           <td className="py-2 px-3 border-r border-slate-50 font-mono font-bold text-[#003366]">{r.id}</td>
                           <td className="py-2 px-3 border-r border-slate-50">
                              <div className="font-bold text-slate-700">{r.node}</div>
                              <div className="text-[9px] text-slate-400 italic">"{r.reason}"</div>
                           </td>
                           <td className="py-2 px-3 border-r border-slate-50 text-right font-mono font-bold">{r.amt}</td>
                           <td className="py-2 px-3 border-r border-slate-50">
                              <Badge text={r.staff} type="navy" small />
                           </td>
                           <td className="py-2 px-3 text-right">
                              <div className="flex items-center justify-end gap-2">
                                 <Badge text={r.status} type={r.status === 'Approved' ? 'success' : r.status === 'Pending' ? 'warning' : 'info'} small />
                                 <Button variant="ghost" size="sm" className="h-5 w-5 p-0 border-slate-100"><ChevronRight size={12} /></Button>
                              </div>
                           </td>
                        </tr>
                     ))}
                  </tbody>
               </table>
            </Panel>
         </div>

         <div className="lg:col-span-1 space-y-4">
            <Panel title="transit_logistics_health">
               <div className="space-y-4">
                  <div>
                     <div className="text-[10px] font-bold text-slate-400 uppercase mb-2 px-1">Regional Transit Load</div>
                     <div className="space-y-3">
                        {[
                          { name: 'GULSHAN', pct: 82 },
                          { name: 'MOTIJHEEL', pct: 64 },
                          { name: 'MIRPUR', pct: 45 },
                        ].map(reg => (
                          <div key={reg.name}>
                             <div className="flex justify-between text-[8px] font-bold text-slate-500 mb-1">
                                <span>{reg.name}</span>
                                <span>{reg.pct}%</span>
                             </div>
                             <div className="w-full bg-slate-100 h-1 rounded-full overflow-hidden">
                                <div className="bg-[#003366] h-full" style={{ width: `${reg.pct}%` }}></div>
                             </div>
                          </div>
                        ))}
                     </div>
                  </div>
                  <div className="p-3 bg-[#008244]/5 border border-[#008244]/10 rounded flex items-center gap-2">
                     <MapPin size={14} className="text-[#008244]" />
                     <div className="text-[9px] text-[#008244] font-bold leading-tight">
                        Real-time GPS correlation active for all CIT movements.
                     </div>
                  </div>
               </div>
            </Panel>
         </div>
      </div>
    </div>
  );
};

export default Conveyance;
