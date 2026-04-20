import React, { useState } from 'react';
import { Badge, Button } from '../shared/UI';
import { motion } from 'motion/react';
import { CheckCircle2, XCircle, Eye, CornerDownRight } from 'lucide-react';

const Approvals: React.FC = () => {
  const [items, setItems] = useState([
    { ref: "CR-2024-0318", type: "Cash Replenishment", centre: "Gulshan ADC", details: "1,00,00,000 BDT · 12 ATMs", by: "Kabir Ahmed", date: "31 Mar 2024", status: "Pending" },
    { ref: "CR-2024-0317", type: "Cash Replenishment", centre: "Mirpur ADC",  details: "60,00,000 BDT · 8 ATMs",  by: "Tania Begum",  date: "31 Mar 2024", status: "Pending" },
    { ref: "CV-2024-0104", type: "Conveyance",          centre: "Dhanmondi ADC", details: "4,200 BDT · 3 custodians", by: "Rahim Uddin", date: "30 Mar 2024", status: "Review" },
    { ref: "AT-2024-0022", type: "ATM Addition",         centre: "Dhanmondi ADC", details: "2 new ATMs · Uttara North", by: "Rahim Uddin", date: "29 Mar 2024", status: "Ready" },
  ]);

  const handleAction = (ref: string, action: 'Approved' | 'Rejected') => {
    setItems(items.map(i => i.ref === ref ? { ...i, status: action } : i));
  };

  return (
    <div className="space-y-4">
      <div className="bg-white border border-slate-200 rounded-lg overflow-hidden shadow-sm">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-slate-50 border-b border-slate-200">
               <th className="px-3 py-2 text-[10px] font-bold uppercase text-slate-400 tracking-wider border-r border-slate-200 uppercase">Req ID</th>
               <th className="px-3 py-2 text-[10px] font-bold uppercase text-slate-400 tracking-wider border-r border-slate-200 uppercase">Type / Class</th>
               <th className="px-3 py-2 text-[10px] font-bold uppercase text-slate-400 tracking-wider border-r border-slate-200 uppercase">Source_Centre</th>
               <th className="px-3 py-2 text-[10px] font-bold uppercase text-slate-400 tracking-wider border-r border-slate-200 uppercase">Metric / Allocation</th>
               <th className="px-3 py-2 text-[10px] font-bold uppercase text-slate-400 tracking-wider border-r border-slate-200 uppercase">Agent</th>
               <th className="px-3 py-2 text-[10px] font-bold uppercase text-slate-400 tracking-wider border-r border-slate-200 uppercase">State</th>
               <th className="px-3 py-2 text-[10px] font-bold uppercase text-slate-400 tracking-wider text-right uppercase">Action_Buffer</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100 italic">
            {items.map((item, idx) => (
              <motion.tr 
                key={item.ref}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: idx * 0.02 }}
                className={`hover:bg-[#003366]/5 transition-colors group text-[11px] ${idx % 2 === 1 ? 'bg-slate-50/30' : ''}`}
              >
                <td className="px-3 py-2 mono font-bold text-[#003366] border-r border-slate-100">{item.ref}</td>
                <td className="px-3 py-2 border-r border-slate-100">
                  <Badge 
                    text={item.type.toUpperCase().replace(' ', '_')} 
                    type={item.type === 'Cash Replenishment' ? 'primary' : item.type === 'Conveyance' ? 'info' : 'success'} 
                    small
                  />
                </td>
                <td className="px-3 py-2 font-bold text-slate-700 border-r border-slate-100">{item.centre}</td>
                <td className="px-3 py-2 text-slate-500 whitespace-nowrap border-r border-slate-100 italic">{item.details}</td>
                <td className="px-3 py-2 border-r border-slate-100">
                  <div className="font-bold text-slate-700">{item.by}</div>
                  <div className="text-[9px] text-slate-400 mono uppercase">{item.date}</div>
                </td>
                <td className="px-3 py-2 border-r border-slate-100">
                  <div className="flex items-center gap-1.5">
                    <span className={`w-1.5 h-1.5 rounded-full ${
                      item.status === 'Approved' ? 'bg-[#008244] shadow-[0_0_4px_rgba(0,130,68,0.4)]' : 
                      item.status === 'Rejected' ? 'bg-rose-500' : 'bg-amber-500 shadow-[0_0_4px_rgba(245,158,11,0.4)]'
                    }`}></span>
                    <span className="font-bold uppercase tracking-tighter text-[10px]">{item.status}</span>
                  </div>
                </td>
                <td className="px-3 py-2 text-right">
                  {item.status === 'Pending' || item.status === 'Review' || item.status === 'Ready' ? (
                    <div className="flex items-center justify-end gap-1.5">
                       <Button variant="ghost" size="sm" className="h-6 w-6 p-0 justify-center"><Eye size={12} className="opacity-50"/></Button>
                       <Button variant="success" size="sm" className="h-6 px-2 text-[9px] uppercase font-bold" onClick={() => handleAction(item.ref, 'Approved')}>Approve</Button>
                       <Button variant="danger" size="sm" className="h-6 px-2 text-[9px] uppercase font-bold" onClick={() => handleAction(item.ref, 'Rejected')}>Deny</Button>
                    </div>
                  ) : (
                    <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest px-2">Committed</div>
                  )}
                </td>
              </motion.tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="flex items-center gap-2 p-2 bg-[#003366]/5 border border-[#003366]/10 rounded">
         <AlertCircle size={14} className="text-[#003366]" />
         <div className="text-[10px] text-[#003366] leading-tight font-medium">
            <span className="font-bold uppercase mr-1">Constraint:</span>
            Approval cycles are synchronous and finalize CIT dispatch parameters instantly upon commitment.
         </div>
      </div>
    </div>
  );
};

const AlertCircle = ({ size, className }: { size: number, className?: string }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/>
  </svg>
);

export default Approvals;
