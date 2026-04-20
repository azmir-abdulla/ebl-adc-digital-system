import React from 'react';
import { Panel, Button, Badge, FormInput } from '../shared/UI';
import { Ticket, Search, Plus, MessageCircle, AlertCircle, Clock, ChevronRight } from 'lucide-react';
import { motion } from 'motion/react';

const CentreTickets: React.FC = () => {
  const tickets = [
    { id: "T-202", title: "ATM Screen Flickering", atm: "ATM-0042", priority: "Medium", status: "Open", time: "2h ago" },
    { id: "T-205", title: "Vault Combination Stuck", atm: "ATM-0055", priority: "Critical", status: "Assigned", time: "1h ago" },
    { id: "T-198", title: "Receipt Printer Fault", atm: "ATM-0082", priority: "Low", status: "Resolved", time: "1d ago" },
  ];

  return (
    <div className="space-y-4">
       <div className="flex justify-between items-center bg-white p-3 border border-slate-200 rounded-lg shadow-sm">
          <div className="flex items-center gap-3">
             <div className="p-2 bg-rose-600 text-white rounded"><Ticket size={18}/></div>
             <div>
                <h2 className="text-sm font-bold text-slate-800 uppercase tracking-tight">LOCAL_INCIDENT_BOARD</h2>
                <p className="text-[10px] text-slate-400 font-medium tracking-tight">Site-specific hardware faults and service requests for Gulshan node.</p>
             </div>
          </div>
          <Button variant="danger" size="sm" className="h-8 font-bold uppercase tracking-widest text-[9px] bg-rose-600">
             <Plus size={14} className="mr-2" /> Open_Service_Request
          </Button>
       </div>

       <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {tickets.map((t, i) => (
             <motion.div 
               key={t.id}
               initial={{ opacity: 0, y: 10 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ delay: i * 0.1 }}
               className="bg-white border border-slate-200 rounded-lg p-4 shadow-sm hover:border-indigo-200 transition-all group"
             >
                <div className="flex justify-between items-start mb-3">
                   <div className="flex flex-col">
                      <span className="text-[10px] font-mono font-bold text-slate-400">{t.id}</span>
                      <h3 className="text-sm font-bold text-slate-800 group-hover:text-indigo-600 transition-colors">{t.title}</h3>
                   </div>
                   <Badge text={t.priority} type={t.priority === 'Critical' ? 'danger' : t.priority === 'Medium' ? 'warning' : 'info'} small />
                </div>
                
                <div className="space-y-2 mb-4">
                   <div className="flex justify-between text-[10px] font-bold">
                      <span className="text-slate-400 uppercase">Hardware ID</span>
                      <span className="text-slate-700">{t.atm}</span>
                   </div>
                   <div className="flex justify-between text-[10px] font-bold">
                      <span className="text-slate-400 uppercase">Age</span>
                      <span className="text-slate-700 italic font-mono">{t.time}</span>
                   </div>
                </div>

                <div className="flex items-center justify-between pt-3 border-t border-slate-100">
                   <Badge text={t.status} type="navy" small />
                   <Button variant="ghost" size="sm" className="h-6 w-6 p-0 justify-center"><ChevronRight size={14}/></Button>
                </div>
             </motion.div>
          ))}
       </div>
    </div>
  );
};

export default CentreTickets;
