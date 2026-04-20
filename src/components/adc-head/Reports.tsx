import React, { useState } from 'react';
import { Panel, Button, Badge, FormInput } from '../shared/UI';
import { 
  FileText, 
  Download, 
  Upload, 
  Search, 
  Filter, 
  ChevronRight, 
  FileSpreadsheet, 
  FileBarChart,
  Calendar,
  Warehouse
} from 'lucide-react';
import { motion } from 'motion/react';

const Reports: React.FC = () => {
  const [filterType, setFilterType] = useState('All');
  
  const reports = [
    { id: "REP-9921", name: "Monthly_Cash_Utilization_Summary", date: "2024-03-31", type: "Operational", status: "Generated", size: "2.4 MB" },
    { id: "REP-9920", name: "Custodian_Performance_Index_Q1", date: "2024-03-25", type: "Performance", status: "Generated", size: "1.1 MB" },
    { id: "REP-9919", name: "ATM_Uptime_Analytics_Dhaka_North", date: "2024-03-20", type: "Infrastructure", status: "Archived", size: "4.8 MB" },
    { id: "REP-9918", name: "Cash_Replenishment_Anomaly_Log", date: "2024-03-15", type: "Audit", status: "Generated", size: "850 KB" },
    { id: "REP-9917", name: "Regional_Expense_Report_Chittagong", date: "2024-03-10", type: "Finance", status: "Generated", size: "3.2 MB" },
    { id: "REP-9916", name: "EBL_ADC_Sustainability_Report_2023", date: "2024-01-05", type: "Strategic", status: "Archived", size: "12.5 MB" },
  ];

  return (
    <div className="space-y-4">
      {/* Search & Global Controls */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="relative group w-full md:w-80">
           <div className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-[#008244] transition-colors">
              <Search size={14} />
           </div>
           <input 
             placeholder="Search report ID or filename..." 
             className="w-full pl-9 pr-4 py-1.5 border border-slate-200 rounded-lg text-[11px] focus:ring-2 focus:ring-[#008244]/10 outline-none transition-all"
           />
        </div>
        <div className="flex gap-2 w-full md:w-auto">
          <Button variant="ghost" size="sm" className="h-8 text-[11px]">
             <Upload size={14} className="mr-2" /> Upload External Data
          </Button>
          <Button variant="primary" size="sm" className="h-8 text-[11px] bg-[#003366]">
             <FileBarChart size={14} className="mr-2" /> Generate Ad-hoc Report
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-4">
        {/* Sidebar Filters */}
        <div className="lg:col-span-1 space-y-4">
          <Panel title="report_filters">
            <div className="space-y-3">
              <FormInput 
                label="Region_Node" 
                options={["All Regions", "Dhaka North", "Dhaka South", "Chittagong", "Sylhet", "Rajshahi"]} 
              />
              <FormInput 
                label="Report_Category" 
                options={["All", "Operational", "Performance", "Finance", "Audit", "Infrastructure"]} 
              />
              <div className="space-y-1">
                <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Date_Period</label>
                <div className="flex flex-col gap-2">
                  <div className="flex items-center gap-2 p-2 bg-slate-50 border border-slate-100 rounded text-[10px] text-slate-600 font-mono">
                    <Calendar size={12} className="text-slate-400" />
                    2024-03-01 to 2024-03-31
                  </div>
                  <Button variant="ghost" size="sm" className="w-full h-6 text-[9px] uppercase font-bold">Select Range</Button>
                </div>
              </div>
              <Button variant="gold" size="sm" className="w-full h-8 text-[10px] uppercase font-bold mt-2">Update_Session_View</Button>
            </div>
          </Panel>

          <Panel title="quick_exports">
             <div className="space-y-2">
                {[
                  { name: 'Last_Cycle_Logs', format: 'XLXS' },
                  { name: 'ATM_Outage_Map', format: 'PDF' },
                  { name: 'Custodian_Audit', format: 'CSV' },
                ].map(ex => (
                  <div key={ex.name} className="flex items-center justify-between p-2 hover:bg-slate-50 rounded border border-transparent hover:border-slate-100 transition-all cursor-pointer group">
                    <div className="flex items-center gap-2">
                      <FileSpreadsheet size={14} className="text-[#008244]" />
                      <span className="text-[10px] font-bold text-slate-700">{ex.name}</span>
                    </div>
                    <Badge text={ex.format} type="info" small />
                  </div>
                ))}
             </div>
          </Panel>
        </div>

        {/* Reports Table */}
        <div className="lg:col-span-3">
           <Panel title="system_generated_reports" noPad>
              <div className="overflow-x-auto">
                 <table className="w-full text-left border-collapse">
                    <thead className="bg-slate-50 border-b border-slate-200">
                       <tr className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">
                          <th className="py-2 px-3 border-r border-slate-200 w-24 uppercase">Report ID</th>
                          <th className="py-2 px-3 border-r border-slate-200">Filename / Metadata</th>
                          <th className="py-2 px-3 border-r border-slate-200 w-24 uppercase">Category</th>
                          <th className="py-2 px-3 border-r border-slate-200 w-20 uppercase text-center">Filesize</th>
                          <th className="py-2 px-3 border-r border-slate-200 w-24 uppercase">Status</th>
                          <th className="py-2 px-3 uppercase text-right">Actions</th>
                       </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100 text-[11px]">
                       {reports.map((r, i) => (
                          <motion.tr 
                            key={r.id} 
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: i * 0.03 }}
                            className={`hover:bg-[#003366]/5 transition-colors ${i % 2 === 1 ? 'bg-slate-50/20' : ''}`}
                          >
                             <td className="py-2 px-3 border-r border-slate-100 font-mono font-bold text-[#003366]">
                                {r.id}
                             </td>
                             <td className="py-2 px-3 border-r border-slate-100">
                                <div className="font-bold text-slate-700">{r.name}</div>
                                <div className="text-[9px] text-slate-400 flex items-center gap-1 font-mono uppercase tracking-tighter">
                                   <Calendar size={10} /> Sync_Date: {r.date}
                                </div>
                             </td>
                             <td className="py-2 px-3 border-r border-slate-100">
                                <Badge text={r.type.toUpperCase()} type="navy" small />
                             </td>
                             <td className="py-2 px-3 border-r border-slate-100 font-mono text-center text-slate-500 italic">
                                {r.size}
                             </td>
                             <td className="py-2 px-3 border-r border-slate-100">
                                <div className="flex items-center gap-1.5">
                                   <span className={`w-1.5 h-1.5 rounded-full ${r.status === 'Generated' ? 'bg-[#008244] shadow-[0_0_4px_rgba(0,130,68,0.4)]' : 'bg-slate-300'}`}></span>
                                   <span className="font-bold text-slate-600 uppercase tracking-tighter text-[10px]">{r.status}</span>
                                </div>
                             </td>
                             <td className="py-2 px-3 text-right">
                                <div className="flex items-center justify-end gap-1">
                                   <Button variant="ghost" size="sm" className="h-7 px-2 text-[9px] uppercase font-bold border-slate-200">
                                      <Download size={12} className="mr-1" /> PDF
                                   </Button>
                                   <Button variant="ghost" size="sm" className="h-7 px-2 text-[9px] uppercase font-bold border-slate-200">
                                      <Download size={12} className="mr-1" /> CSV
                                   </Button>
                                </div>
                             </td>
                          </motion.tr>
                       ))}
                    </tbody>
                 </table>
              </div>
              <div className="p-2 border-t border-slate-100 bg-slate-50/50 flex justify-center">
                 <Button variant="ghost" size="sm" className="text-[10px] font-bold uppercase tracking-widest text-slate-400 py-1 hover:text-[#008244]">
                    Load_More_Archives →
                 </Button>
              </div>
           </Panel>
        </div>
      </div>
    </div>
  );
};

export default Reports;
