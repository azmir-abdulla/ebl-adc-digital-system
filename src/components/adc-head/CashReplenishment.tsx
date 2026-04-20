import React from 'react';
import { Panel, Button, Badge } from '../shared/UI';
import { Coins, ArrowRight, Download, Filter, Search, Calendar, ChevronRight } from 'lucide-react';
import { motion } from 'motion/react';

const CashReplenishment: React.FC = () => {
  const requests = [
    { id: "REQ-992", node: "Gulshan ADC", amount: "1.2 Cr", priority: "HIGH", status: "Pending", date: "Today" },
    { id: "REQ-991", node: "Mirpur ADC", amount: "85 L", priority: "Normal", status: "Approved", date: "Today" },
    { id: "REQ-990", node: "Sylhet ADC", amount: "42 L", priority: "Urgent", status: "In_Transit", date: "Yesterday" },
  ];

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center bg-white p-3 border border-slate-200 rounded-lg shadow-sm">
         <div className="flex items-center gap-3">
            <div className="p-2 bg-[#003366] text-white rounded"><Coins size={18}/></div>
            <div>
               <h2 className="text-sm font-bold text-slate-800 uppercase tracking-tight">CASH_FLOW_ORCHESTRATION</h2>
               <p className="text-[10px] text-slate-400 font-medium">Head office oversight of regional cash requisition and disbursement cycles.</p>
            </div>
         </div>
         <Button variant="primary" size="sm" className="h-8 bg-[#003366]">Approve All Pending</Button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
         <div className="lg:col-span-2">
            <Panel title="global_requisition_queue" noPad>
               <table className="w-full text-left border-collapse">
                  <thead className="bg-slate-50 border-b border-slate-200">
                     <tr className="text-[9px] text-slate-400 font-bold uppercase tracking-wider">
                        <th className="py-2 px-3 border-r border-slate-200 w-20">REQ_ID</th>
                        <th className="py-2 px-3 border-r border-slate-200">Origin_Node</th>
                        <th className="py-2 px-3 border-r border-slate-200 w-24 text-right">Value</th>
                        <th className="py-2 px-3 border-r border-slate-200 w-24">State</th>
                        <th className="py-2 px-3 text-right">Action</th>
                     </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 text-[11px]">
                     {requests.map(r => (
                        <tr key={r.id} className="hover:bg-slate-50">
                           <td className="py-2 px-3 border-r border-slate-50 font-mono font-bold text-[#003366]">{r.id}</td>
                           <td className="py-2 px-3 border-r border-slate-50 font-bold text-slate-700">{r.node}</td>
                           <td className="py-2 px-3 border-r border-slate-50 text-right font-mono font-bold">{r.amount}</td>
                           <td className="py-2 px-3 border-r border-slate-50">
                              <Badge text={r.status} type={r.status === 'Pending' ? 'warning' : r.status === 'Approved' ? 'success' : 'info'} small />
                           </td>
                           <td className="py-2 px-3 text-right">
                              <Button variant="ghost" size="sm" className="h-6 px-2 text-[9px] uppercase font-bold">Review</Button>
                           </td>
                        </tr>
                     ))}
                  </tbody>
               </table>
            </Panel>
         </div>
         
         <div className="lg:col-span-1 space-y-4">
            <Panel title="cash_vault_health">
               <div className="space-y-4">
                  <div>
                     <div className="flex justify-between items-center mb-1">
                        <span className="text-[10px] font-bold text-slate-400 uppercase">Head Vault Capacity</span>
                        <span className="text-[10px] font-mono text-indigo-600 font-bold">78%</span>
                     </div>
                     <div className="w-full bg-slate-100 h-1.5 rounded-full overflow-hidden">
                        <div className="bg-indigo-500 h-full w-[78%]"></div>
                     </div>
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                     <div className="p-2 bg-slate-50 rounded border border-slate-100">
                        <div className="text-[8px] font-bold text-slate-400 uppercase">Total_Disbursed</div>
                        <div className="text-sm font-bold text-slate-700">12.5 Cr</div>
                     </div>
                     <div className="p-2 bg-slate-50 rounded border border-slate-100">
                        <div className="text-[8px] font-bold text-slate-400 uppercase">Net_Retention</div>
                        <div className="text-sm font-bold text-slate-700">4.1 Cr</div>
                     </div>
                  </div>
               </div>
            </Panel>
         </div>
      </div>
    </div>
  );
};

export default CashReplenishment;
