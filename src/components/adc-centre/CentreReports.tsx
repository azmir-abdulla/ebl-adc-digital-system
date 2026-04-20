import React, { useState } from 'react';
import { Panel, Button, Badge, FormInput } from '../shared/UI';
import { 
  FileText, 
  Download, 
  Search, 
  Filter, 
  Calendar,
  Coins,
  History,
  FileSpreadsheet
} from 'lucide-react';
import { motion } from 'motion/react';

const CentreReports: React.FC = () => {
  const [activeTab, setActiveTab] = useState('History');

  const history = [
    { id: "RE-8821", date: "2024-04-20", atms: 12, cash: "45,00,000", status: "Success", type: "Replenishment" },
    { id: "RE-8819", date: "2024-04-18", atms: 8, cash: "32,00,000", status: "Success", type: "Replenishment" },
    { id: "CO-4412", date: "2024-04-15", amount: "4,200", status: "Approved", type: "Conveyance" },
    { id: "RE-8805", date: "2024-04-12", atms: 15, cash: "58,00,000", status: "Success", type: "Emergency_Refill" },
    { id: "AU-1102", date: "2024-04-10", loc: "Gulshan 2", status: "Verified", type: "Site_Audit" },
  ];

  return (
    <div className="space-y-4">
      {/* Search and Date Filter */}
      <div className="flex flex-wrap items-center gap-3 bg-white p-3 border border-slate-200 rounded-lg shadow-sm">
         <div className="flex-1 min-w-[200px] relative group">
            <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-[#008244]" />
            <input 
              placeholder="Search by Transaction ID or Date..."
              className="w-full pl-9 pr-4 py-1.5 border border-slate-200 rounded text-[11px] focus:ring-1 focus:ring-[#008244]/10 outline-none transition-all"
            />
         </div>
         <div className="flex items-center gap-2 px-3 py-1.5 bg-slate-50 border border-slate-200 rounded text-[10px] text-slate-500 font-bold uppercase cursor-pointer hover:bg-slate-100">
            <Calendar size={14} className="text-[#008244]" />
            <span>2024-04-01 - 2024-04-30</span>
         </div>
         <Button variant="ghost" size="sm" className="h-8 text-[10px] uppercase font-bold bg-[#008244]/5 text-[#008244] border-[#008244]/10">
            Export_CSV
         </Button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-4">
        {/* Quick Stats */}
        <div className="lg:col-span-1 space-y-3">
           <Panel title="monthly_summary">
              <div className="space-y-4">
                 <div>
                    <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">Total Replenishments</div>
                    <div className="text-2xl font-bold text-slate-800 mono">142</div>
                 </div>
                 <div>
                    <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">Cumulative Cash Out</div>
                    <div className="text-2xl font-bold text-teal-600 mono">1.84 Cr</div>
                 </div>
                 <div className="pt-3 border-t border-slate-100">
                    <div className="flex justify-between items-center mb-1">
                       <span className="text-[10px] font-bold text-slate-500 uppercase">Success Rate</span>
                       <span className="text-[10px] font-mono text-emerald-600">99.2%</span>
                    </div>
                    <div className="w-full bg-slate-100 h-1 rounded-full overflow-hidden">
                       <div className="bg-emerald-500 h-full w-[99.2%]"></div>
                    </div>
                 </div>
              </div>
           </Panel>

           <Panel title="scheduled_exports">
              <div className="space-y-2">
                 {[
                   { name: 'Weekly_ATM_Report', time: 'Monday, 08:00 AM' },
                   { name: 'Daily_Custodian_Log', time: 'Daily, 10:00 PM' },
                 ].map(s=>(
                    <div key={s.name} className="p-2 border border-slate-100 rounded bg-slate-50/50">
                       <div className="text-[10px] font-bold text-slate-700">{s.name}</div>
                       <div className="text-[8px] text-slate-400 uppercase font-mono mt-0.5">{s.time}</div>
                    </div>
                 ))}
              </div>
           </Panel>
        </div>

        {/* Transaction History Table */}
        <div className="lg:col-span-3">
           <Panel title="transactional_integrity_records" noPad>
              <div className="flex border-b border-slate-100 bg-slate-50/50">
                 {['History', 'Exceptions', 'Financials'].map(tab => (
                    <button 
                      key={tab}
                      onClick={()=>setActiveTab(tab)}
                      className={`px-4 py-2 text-[10px] font-bold uppercase tracking-widest transition-all ${
                        activeTab === tab ? "text-teal-600 border-b-2 border-teal-600 bg-white" : "text-slate-400 hover:text-slate-600"
                      }`}
                    >
                       {tab}
                    </button>
                 ))}
              </div>

              <div className="overflow-x-auto">
                 <table className="w-full text-left border-collapse">
                    <thead className="bg-slate-50/80">
                       <tr className="text-[9px] text-slate-400 font-bold uppercase tracking-wider">
                          <th className="py-2 px-3 border-r border-slate-100 w-24">TX_ID</th>
                          <th className="py-2 px-3 border-r border-slate-100 w-28">Timestamp</th>
                          <th className="py-2 px-3 border-r border-slate-100">Operation / Details</th>
                          <th className="py-2 px-3 border-r border-slate-100 w-32 border-slate-100 text-right">Value (BDT)</th>
                          <th className="py-2 px-3 uppercase text-right">Status</th>
                       </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100 text-[10px]">
                       {history.map((h, i) => (
                          <tr key={h.id} className="hover:bg-slate-50 transition-colors">
                             <td className="py-2 px-3 border-r border-slate-100 font-mono font-bold text-[#003366]">{h.id}</td>
                             <td className="py-2 px-3 border-r border-slate-100 font-mono text-slate-500 italic">{h.date}</td>
                             <td className="py-2 px-3 border-r border-slate-100">
                                <div className="flex items-center gap-2">
                                   <Badge text={h.type} type="navy" small />
                                   <span className="font-bold text-slate-700 italic font-serif">
                                      {h.atms ? `${h.atms} ATMs serviced` : h.loc ? `Audit: ${h.loc}` : `Cycle Complete`}
                                   </span>
                                </div>
                             </td>
                             <td className="py-2 px-3 border-r border-slate-100 text-right font-mono font-bold text-slate-800">
                                {h.cash || h.amount || '--'}
                             </td>
                             <td className="py-2 px-3 text-right">
                                <Badge text={h.status} type="success" small />
                             </td>
                          </tr>
                       ))}
                    </tbody>
                 </table>
              </div>
              <div className="p-2 flex justify-center bg-slate-50/50">
                 <Button variant="ghost" size="sm" className="h-6 text-[9px] uppercase font-bold tracking-widest text-slate-400">Load Archive History →</Button>
              </div>
           </Panel>

           <Panel title="data_download_portal" className="mt-4" noPad>
              <div className="grid grid-cols-1 md:grid-cols-2 divide-x divide-slate-100">
                 <div className="p-3 hover:bg-slate-50 transition-colors cursor-pointer group">
                    <div className="flex items-center justify-between">
                       <div className="flex items-center gap-3">
                          <div className="w-8 h-8 rounded bg-teal-50 text-teal-600 flex items-center justify-center">
                             <FileSpreadsheet size={16} />
                          </div>
                          <div>
                             <div className="text-[11px] font-bold text-slate-700 group-hover:text-teal-700 transition-colors">Export Replenishment Matrix</div>
                             <div className="text-[9px] text-slate-400 font-medium">Download current month cash distribution logs.</div>
                          </div>
                       </div>
                       <Download size={14} className="text-slate-300 group-hover:text-teal-600 transition-colors" />
                    </div>
                 </div>
                 <div className="p-3 hover:bg-slate-50 transition-colors cursor-pointer group">
                    <div className="flex items-center justify-between">
                       <div className="flex items-center gap-3">
                          <div className="w-8 h-8 rounded bg-indigo-50 text-indigo-600 flex items-center justify-center">
                             <FileText size={16} />
                          </div>
                          <div>
                             <div className="text-[11px] font-bold text-slate-700 group-hover:text-indigo-700 transition-colors">Download Attendance Report</div>
                             <div className="text-[9px] text-slate-400 font-medium">Monthly custodian active hours and travel logs.</div>
                          </div>
                       </div>
                       <Download size={14} className="text-slate-300 group-hover:text-indigo-600 transition-colors" />
                    </div>
                 </div>
              </div>
           </Panel>
        </div>
      </div>
    </div>
  );
};

export default CentreReports;
