import React from 'react';
import { motion } from 'motion/react';
import { Badge, Button, Panel } from '../shared/UI';
import { Screen } from '../../types';
import { ArrowUpRight, TrendingUp, AlertCircle, CheckCircle } from 'lucide-react';

const Dashboard: React.FC<{ onSetScreen: (s: Screen) => void }> = ({ onSetScreen }) => {
  const stats = [
    { label: "Total ATMs Nationwide", value: "312", sub: "Across 13 ADC Centres", accent: "#008244", icon: <TrendingUp size={16} /> },
    { label: "Cash in Circulation", value: "48.2 Cr", sub: "Total loaded in all ATMs", accent: "#003366", icon: <TrendingUp size={16} /> },
    { label: "Pending Approvals", value: "7", sub: "Requires your action", accent: "#003366", icon: <AlertCircle size={16} /> },
    { label: "Open Tickets", value: "23", sub: "Across all centres", accent: "#d48a0e", icon: <AlertCircle size={16} /> },
  ];

  const pendingItems = [
    { title: "Cash Replenishment — Gulshan ADC", sub: "1,00,00,000 BDT · 12 ATMs", type: "warning", time: "2h ago" },
    { title: "Conveyance Request — Mirpur ADC", sub: "3 custodians · 4,200 BDT", type: "info", time: "4h ago" },
    { title: "ATM Addition — Dhanmondi ADC", sub: "2 new ATMs · Uttara North", type: "success", time: "1d ago" },
  ];

  return (
    <div className="space-y-6">
      {/* Stats Row */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-3">
        {stats.map(s => (
          <div key={s.label} className="bg-white border border-slate-200 rounded-lg p-3 shadow-sm hover:border-[#003366]/20 transition-all group" style={{ borderTop: `2.5px solid ${s.accent}` }}>
            <div className="flex items-center justify-between mb-1.5 text-slate-400">
              <span className="text-[9px] font-bold uppercase tracking-wider">{s.label}</span>
              <div className="p-1 rounded bg-slate-50 group-hover:bg-[#003366]/5 transition-colors text-[#003366]">
                {s.icon}
              </div>
            </div>
            <div className="mono text-lg font-bold text-slate-800">{s.value}</div>
            <div className="text-[9px] text-slate-400 mt-1 flex items-center gap-1 font-medium italic">
               {s.sub}
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {/* Pending Approvals */}
        <Panel 
          title="Priority Approval Queue" 
          action="View_Queue" 
          onAction={() => onSetScreen('approvals')}
        >
          <div className="space-y-3">
            {pendingItems.map((item, i) => (
              <div key={i} className="flex items-center gap-3 group pb-2 border-b border-slate-100 last:border-0">
                <div className={`w-8 h-8 rounded shrink-0 flex items-center justify-center border ${
                  item.type === 'warning' ? 'bg-amber-50 text-amber-600 border-amber-100 shadow-[0_0_4px_rgba(245,158,11,0.1)]' : 
                  item.type === 'info' ? 'bg-[#003366]/5 text-[#003366] border-[#003366]/10 shadow-[0_0_4px_rgba(0,51,102,0.1)]' : 'bg-[#008244]/5 text-[#008244] border-[#008244]/10 shadow-[0_0_4px_rgba(0,130,68,0.1)]'
                }`}>
                  {item.type === 'warning' ? <TrendingUp size={14} /> : <CheckCircle size={14} />}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="text-[11px] font-bold text-slate-700 flex items-center gap-2">
                    {item.title}
                    <span className="text-[9px] font-mono text-slate-400 uppercase">{item.time}</span>
                  </div>
                  <div className="text-[10px] text-slate-500 mt-0.5 truncate italic">{item.sub}</div>
                </div>
                <div className="flex gap-2">
                  <Button variant="ghost" size="sm" className="h-6 px-2 text-[9px] rounded font-bold uppercase tracking-tight">Review</Button>
                </div>
              </div>
            ))}
          </div>
        </Panel>

        {/* Performance */}
        <Panel title="ADC efficiency_matrix">
          <div className="space-y-3">
             {[
               { name: "Gulshan", pct: 88, color: "bg-[#003366]" },
               { name: "Motijheel", pct: 76, color: "bg-slate-700" },
               { name: "Mirpur", pct: 82, color: "bg-[#008244]" },
               { name: "Dhanmondi", pct: 71, color: "bg-rose-600" },
               { name: "Chittagong", pct: 65, color: "bg-[#003366]/60" },
             ].map(c => (
              <div key={c.name} className="flex items-center gap-3">
                <div className="w-16 text-[10px] font-bold text-slate-500 text-right uppercase tracking-tighter">{c.name}</div>
                <div className="flex-1 h-1.5 bg-slate-100 rounded-full overflow-hidden">
                  <motion.div 
                    initial={{ width: 0 }}
                    animate={{ width: `${c.pct}%` }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    className={`h-full ${c.color}`} 
                  />
                </div>
                <div className="w-8 text-[10px] font-bold text-slate-700 mono">{c.pct}%</div>
              </div>
             ))}
          </div>
        </Panel>
      </div>

      {/* Activity Log */}
      <Panel title="System audit_stream" action="Dump_Logs">
        <div className="space-y-4">
           {[
             { status: "success", title: "Gulshan ADC Refill Approved", desc: "1.2 Cr BDT allocated across 12 ATMs at 10:45 AM", user: "R. Hossain", time: "1h ago" },
             { status: "info", title: "New Centre Activated", desc: "Rajshahi ADC Center fully provisioned and role assignments complete", user: "Admin", time: "3h ago" },
             { status: "warning", title: "Escalated Hardware Ticket", desc: "ATM-0412 Mirpur: Mechanical failure reported in cash shutter", user: "System", time: "5h ago" },
             { status: "neutral", title: "Monthly Report Exported", desc: "Full cash circulation report for Q1 generated by head office", user: "R. Hossain", time: "1d ago" },
           ].map((log, i) => (
            <div key={i} className="flex gap-3 relative group">
              {i < 3 && <div className="absolute left-[3.5px] top-4 w-px h-8 bg-slate-100" />}
              <div className={`w-2 h-2 rounded-full mt-1.5 shrink-0 z-10 ${
                log.status === 'success' ? 'bg-[#008244] shadow-[0_0_4px_rgba(0,130,68,0.4)]' :
                log.status === 'info' ? 'bg-[#003366] shadow-[0_0_4px_rgba(0,51,102,0.4)]' :
                log.status === 'warning' ? 'bg-orange-500 shadow-[0_0_4px_rgba(249,115,22,0.4)]' : 'bg-slate-300'
              }`} />
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between mb-0.5">
                  <div className="text-[11px] font-bold text-slate-700 font-serif italic truncate pr-4">{log.title}</div>
                  <div className="text-[9px] text-slate-400 font-mono uppercase whitespace-nowrap">{log.time}</div>
                </div>
                <div className="text-[10px] text-slate-500 leading-tight truncate">{log.desc}</div>
                <div className="text-[9px] mt-1 flex items-center gap-1 text-slate-400 font-bold uppercase tracking-tighter">
                   <span>Actor:</span> <span className="text-[#003366]">{log.user}</span>
                </div>
              </div>
            </div>
           ))}
        </div>
      </Panel>
    </div>
  );
};

export default Dashboard;
