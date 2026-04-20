import React from 'react';
import { Panel, Button, Badge, FormInput } from '../shared/UI';
import { Truck, Plus, Search, Calendar, Download, MapPin, ChevronRight, DollarSign } from 'lucide-react';

const CentreConveyance: React.FC = () => {
  const claims = [
    { id: "CNV-0821", name: "Arif Karim", date: "2024-04-20", route: "Gulshan -> Banani -> Gulshan", amount: "650", status: "Pending" },
    { id: "CNV-0818", name: "Motiur Rahman", date: "2024-04-19", route: "Gulshan -> DCC Market -> Gulshan", amount: "420", status: "Approved" },
    { id: "CNV-0815", name: "Sumaiya B", date: "2024-04-18", route: "Gulshan -> Niketan -> Gulshan", amount: "380", status: "Paid" },
  ];

  return (
    <div className="space-y-4 font-sans">
       <div className="flex justify-between items-center bg-white p-3 border border-slate-200 rounded-lg shadow-sm">
          <div className="flex items-center gap-3">
             <div className="p-2 bg-teal-600 text-white rounded shadow-md"><Truck size={18}/></div>
             <div>
                <h2 className="text-sm font-bold text-slate-800 uppercase tracking-tight">CONVEYANCE_MANAGEMENT</h2>
                <p className="text-[10px] text-slate-500 font-medium tracking-tight">Custodian travel claims and logistic expense reporting for the region.</p>
             </div>
          </div>
          <Button variant="teal" size="sm" className="h-8 font-bold uppercase tracking-widest text-[9px]">
             <Plus size={14} className="mr-2" /> New_Claim_Entry
          </Button>
       </div>

       <div className="grid grid-cols-1 lg:grid-cols-4 gap-4">
          <div className="lg:col-span-1 space-y-3">
             <Panel title="claims_filter">
                <div className="space-y-3">
                   <FormInput label="Claim_Status" options={["All", "Pending", "Approved", "Paid"]} />
                   <FormInput label="Custodian" options={["All", "Arif Karim", "Motiur Rahman", "Sumaiya B"]} />
                   <Button variant="ghost" size="sm" className="w-full h-8 uppercase font-bold text-[10px] border-slate-200">Recompute_Stats</Button>
                </div>
             </Panel>
             
             <Panel title="monthly_budget">
                <div className="space-y-3">
                   <div>
                      <div className="flex justify-between items-center mb-1">
                         <span className="text-[9px] font-bold text-slate-400 uppercase">Allocated</span>
                         <span className="text-[10px] font-mono text-slate-600 font-bold">50,000</span>
                      </div>
                      <div className="w-full bg-slate-100 h-1 rounded-full overflow-hidden">
                         <div className="bg-teal-500 h-full w-[42%]"></div>
                      </div>
                   </div>
                   <div className="text-[9px] text-slate-400 font-mono text-right italic font-bold">42% Consumed</div>
                </div>
             </Panel>
          </div>

          <div className="lg:col-span-3">
             <Panel title="regional_travel_logs" noPad>
                <div className="overflow-x-auto">
                   <table className="w-full text-left border-collapse">
                      <thead className="bg-slate-50 border-b border-slate-200">
                         <tr className="text-[9px] text-slate-400 font-bold uppercase tracking-wider">
                            <th className="py-2 px-3 border-r border-slate-200 w-24">Claim_ID</th>
                            <th className="py-2 px-3 border-r border-slate-200">Custodian / Details</th>
                            <th className="py-2 px-3 border-r border-slate-200">Travel_Vector</th>
                            <th className="py-2 px-3 border-r border-slate-200 w-24 text-right">Amount</th>
                            <th className="py-2 px-3 uppercase text-right">State</th>
                         </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-100 text-[10px]">
                         {claims.map(c => (
                            <tr key={c.id} className="hover:bg-slate-50 transition-colors">
                               <td className="py-2 px-3 border-r border-slate-100 font-mono font-bold text-teal-700">{c.id}</td>
                               <td className="py-2 px-3 border-r border-slate-100">
                                  <div className="font-bold text-slate-700">{c.name}</div>
                                  <div className="text-[8px] text-slate-400 font-mono uppercase tracking-tighter">{c.date}</div>
                               </td>
                               <td className="py-2 px-3 border-r border-slate-100 font-medium text-slate-500 italic">
                                  <div className="flex items-center gap-1.5"><MapPin size={10} className="text-slate-300"/> {c.route}</div>
                               </td>
                               <td className="py-2 px-3 border-r border-slate-100 text-right font-mono font-bold text-slate-800 tracking-tighter">
                                  {c.amount} BDT
                               </td>
                               <td className="py-2 px-3 text-right">
                                  <Badge text={c.status} type={c.status === 'Pending' ? 'warning' : c.status === 'Approved' ? 'success' : 'info'} small />
                               </td>
                            </tr>
                         ))}
                      </tbody>
                   </table>
                </div>
                <div className="p-2 border-t border-slate-100 bg-slate-50/50 flex justify-center">
                   <Button variant="ghost" size="sm" className="text-[9px] font-bold uppercase tracking-widest text-slate-400 hover:text-teal-600">Export_Fiscal_Sheet →</Button>
                </div>
             </Panel>
          </div>
       </div>
    </div>
  );
};

export default CentreConveyance;
