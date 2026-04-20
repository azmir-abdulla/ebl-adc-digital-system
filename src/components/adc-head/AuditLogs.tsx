import React, { useState } from 'react';
import { Panel, Button, Badge, FormInput } from '../shared/UI';
import { 
  History, 
  Search, 
  Filter, 
  Download, 
  Terminal, 
  User, 
  Lock, 
  RefreshCw,
  Database,
  ArrowRightLeft,
  ChevronDown,
  Info
} from 'lucide-react';
import { motion } from 'motion/react';

const AuditLogs: React.FC = () => {
  const [logs, setLogs] = useState([
    { id: "LOG-0482", user: "Rahman Hossain", role: "ADC Head", action: "BATCH_APPROVAL", module: "Replenishment", target: "REQ-2024-88", timestamp: "Today, 10:42:15", status: "Integrity_Verified", severity: "info" },
    { id: "LOG-0481", user: "System", role: "Auto_Daemon", action: "QUOTA_THRESHOLD", module: "Inventory", target: "NODE_GULSHAN", timestamp: "Today, 09:15:02", status: "Flagged", severity: "warning" },
    { id: "LOG-0480", user: "Motiur Rahman", role: "Custodian", action: "AUTH_MOBILE", module: "IAM", target: "DEVICE_SM82", timestamp: "Today, 08:30:44", status: "Success", severity: "success" },
    { id: "LOG-0479", user: "Kabir Ahmed", role: "Centre In-Charge", action: "CONFIG_CHANGE", module: "ADC_Node", target: "Gulshan ADC", timestamp: "Yesterday, 17:55:12", status: "Critical_Change", severity: "danger" },
    { id: "LOG-0478", user: "Farhan Islam", role: "Centre In-Charge", action: "CASH_REF_POST", module: "Replenishment", target: "REQ-2024-85", timestamp: "Yesterday, 14:22:01", status: "Integrity_Verified", severity: "info" },
    { id: "LOG-0477", user: "System", role: "API_Gateway", action: "TOKEN_REFRESH", module: "Security", target: "User_Session_882", timestamp: "Yesterday, 12:10:55", status: "Success", severity: "info" },
    { id: "LOG-0476", user: "Rahman Hossain", role: "ADC Head", action: "USER_INVITE", module: "IAM", target: "tania.b@ebl.com", timestamp: "Yesterday, 10:05:32", status: "Success", severity: "info" },
  ]);

  return (
    <div className="space-y-4">
      <div className="flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-[#003366] text-white rounded shadow-md">
            <Terminal size={18} />
          </div>
          <div>
            <h2 className="text-sm font-bold text-slate-800 tracking-tight uppercase">SYSTEM_TRACE_LOGS</h2>
            <p className="text-[10px] text-slate-500 font-medium">Read-only immutable database records for regulatory compliance.</p>
          </div>
        </div>
        <div className="flex gap-2">
          <Button variant="ghost" size="sm" className="h-8 text-[11px] border-slate-200">
             <Download size={14} className="mr-2" /> Export History
          </Button>
          <Button variant="ghost" size="sm" className="h-8 text-[11px] border-slate-200">
             <RefreshCw size={14} className="mr-2" /> Refresh Stream
          </Button>
        </div>
      </div>

      <div className="flex gap-3 bg-white p-2 border border-slate-200 rounded-lg shadow-sm">
         <div className="flex-1 relative group">
            <Search size={14} className="absolute left-2.5 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-[#008244]" />
            <input 
              placeholder="Filter by ID, User, or Action..."
              className="w-full pl-8 pr-4 py-1.5 bg-slate-50 border border-slate-100 rounded text-[11px] font-medium outline-none focus:ring-1 focus:ring-[#008244]/10"
            />
         </div>
         <Button variant="ghost" size="sm" className="h-[30px] px-3 text-[10px] uppercase font-bold bg-slate-50 border-slate-200">
            <Filter size={12} className="mr-2" /> Module_Select
         </Button>
         <Button variant="ghost" size="sm" className="h-[30px] px-3 text-[10px] uppercase font-bold bg-slate-50 border-slate-200">
            <Lock size={12} className="mr-2" /> Integrity_Check
         </Button>
      </div>

      <Panel title="system_activity_trail" noPad>
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead className="bg-slate-50 border-b border-slate-200">
              <tr className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">
                <th className="py-2 px-3 border-r border-slate-200 w-24">Trace_ID</th>
                <th className="py-2 px-3 border-r border-slate-200 w-44">Subject_Agent</th>
                <th className="py-2 px-3 border-r border-slate-200">Operation / Event</th>
                <th className="py-2 px-3 border-r border-slate-200 w-32">Module_Source</th>
                <th className="py-2 px-3 border-r border-slate-200 w-40">Time_Vector</th>
                <th className="py-2 px-3 uppercase text-right">State</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 font-mono text-[10px]">
              {logs.map((log, i) => (
                <motion.tr 
                  key={log.id}
                  initial={{ opacity: 0, x: -5 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.02 }}
                  className={`hover:bg-indigo-50/5 transition-colors ${i % 2 === 1 ? 'bg-slate-50/10' : ''} group`}
                >
                  <td className="py-2 px-3 border-r border-slate-100 font-bold text-slate-400 group-hover:text-[#003366]">{log.id}</td>
                  <td className="py-2 px-3 border-r border-slate-100">
                    <div className="flex items-center gap-2">
                       <div className="w-5 h-5 rounded-sm bg-slate-200 flex items-center justify-center text-[8px] font-bold text-slate-500 uppercase">
                          {log.role === 'System' ? <Database size={10} /> : log.user.split(' ').map(n=>n[0]).join('')}
                       </div>
                       <div>
                          <div className="font-bold text-slate-700">{log.user}</div>
                          <div className="text-[8px] text-slate-400 uppercase tracking-tight">{log.role}</div>
                       </div>
                    </div>
                  </td>
                  <td className="py-2 px-3 border-r border-slate-100">
                    <div className="flex flex-col">
                       <span className={`font-extrabold tracking-tighter ${
                         log.severity === 'danger' ? 'text-rose-600' : 
                         log.severity === 'warning' ? 'text-amber-600' : 'text-slate-800'
                       }`}>
                          {log.action}
                       </span>
                       <span className="text-[9px] text-slate-400 italic">Target: {log.target}</span>
                    </div>
                  </td>
                  <td className="py-2 px-3 border-r border-slate-100">
                    <Badge text={log.module} type="navy" small />
                  </td>
                  <td className="py-2 px-3 border-r border-slate-100 text-slate-500 italic">
                    {log.timestamp}
                  </td>
                  <td className="py-2 px-3 text-right">
                    <div className="flex items-center justify-end gap-1.5">
                       <span className={`px-1.5 py-0.5 rounded-sm font-bold uppercase tracking-widest text-[8px] border ${
                         log.severity === 'danger' ? 'bg-rose-50 border-rose-100 text-rose-600' :
                         log.severity === 'warning' ? 'bg-amber-50 border-amber-100 text-amber-600' :
                         log.severity === 'success' ? 'bg-[#008244]/5 border-[#008244]/10 text-[#008244]' :
                         'bg-[#003366]/5 border-[#003366]/10 text-[#003366]'
                       }`}>
                          {log.status}
                       </span>
                       <Button variant="ghost" size="sm" className="h-5 w-5 p-0 border-slate-100">
                          <Info size={10} />
                       </Button>
                    </div>
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="p-2 flex justify-between items-center bg-slate-50 border-t border-slate-100">
           <div className="text-[9px] font-bold text-slate-400 uppercase tracking-widest">Page 1 of 12 (120 records total)</div>
           <div className="flex gap-1">
              <Button variant="ghost" size="sm" className="h-6 w-6 p-0 border-slate-200"><ChevronDown className="rotate-90" size={12} /></Button>
              <Button variant="ghost" size="sm" className="h-6 w-6 p-0 border-slate-200"><ChevronDown className="-rotate-90" size={12} /></Button>
           </div>
        </div>
      </Panel>
    </div>
  );
};

export default AuditLogs;
