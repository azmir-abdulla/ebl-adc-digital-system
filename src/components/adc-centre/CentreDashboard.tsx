import React from 'react';
import { Badge, Button, Panel } from '../shared/UI';
import { Screen } from '../../types';
import { Monitor, Coins, AlertTriangle, Users } from 'lucide-react';
import { motion } from 'motion/react';

const CentreDashboard: React.FC<{ onSetScreen: (s: Screen) => void }> = ({ onSetScreen }) => {
  const stats = [
    { label: "ATMs Under Management", value: "24", sub: "Gulshan ADC Region", accent: "#008244", icon: <Monitor size={16} /> },
    { label: "Total Cash Loaded", value: "18.4 L", sub: "Currently in ATMs", accent: "#003366", icon: <Coins size={16} /> },
    { label: "Pending Approvals", value: "2", sub: "Sent to ADC Head", accent: "#d48a0e", icon: <AlertTriangle size={16} /> },
    { label: "Active Custodians", value: "6", sub: "Assigned this centre", accent: "#003366", icon: <Users size={16} /> },
  ];

  return (
    <div className="space-y-6">
      {/* Stats Row */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-3">
        {stats.map(s => (
          <div key={s.label} className="bg-white border border-slate-200 rounded-lg p-3 shadow-sm hover:border-[#008244]/20 transition-all group" style={{ borderTop: `2.5px solid ${s.accent}` }}>
            <div className="flex items-center justify-between mb-1.5 text-slate-400">
              <span className="text-[9px] font-bold uppercase tracking-wider">{s.label}</span>
              <div className="p-1 rounded bg-slate-50 group-hover:bg-[#008244]/5 transition-colors text-[#008244]">
                {s.icon}
              </div>
            </div>
            <div className="mono text-lg font-bold text-slate-800">{s.value}</div>
            <div className="text-[9px] text-slate-400 mt-1 font-medium italic">{s.sub}</div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {/* ATM Cash Position */}
        <Panel title="Real-time ATM Cash Position" action="View_Monitor" onAction={() => onSetScreen('cashpos')}>
          <div className="space-y-2">
            {[
              { id: "ATM-0042", loc: "Gulshan 2 Circle", status: "Active", cash: "12,40,000", n: 1240000 },
              { id: "ATM-0043", loc: "Banani Road 11", status: "Active", cash: "9,20,000", n: 920000 },
              { id: "ATM-0051", loc: "Niketan Complex", status: "Low Cash", cash: "2,80,000", n: 280000 },
              { id: "ATM-0055", loc: "Gulshan 1 DCC", status: "Critical", cash: "80,000", n: 80000 },
              { id: "ATM-0058", loc: "Baridhara", status: "Active", cash: "7,60,000", n: 760000 },
            ].map(a => (
              <div key={a.id} className="flex items-center gap-3 py-1.5 border-b border-slate-50 last:border-0 group">
                <div className={`w-2 h-2 rounded-full shrink-0 ${
                  a.n < 100000 ? 'bg-rose-500 shadow-[0_0_4px_rgba(244,63,94,0.4)] animate-pulse' : 
                  a.n < 500000 ? 'bg-amber-500 shadow-[0_0_4px_rgba(245,158,11,0.4)]' : 'bg-green-500 shadow-[0_0_4px_rgba(34,197,94,0.4)]'
                }`} />
                <div className="flex-1 min-w-0">
                   <div className="text-[11px] font-bold text-slate-700 flex items-center gap-2">
                     <span className="mono text-[#003366] font-bold">{a.id}</span>
                     <span className="italic font-serif text-slate-500">· {a.loc}</span>
                   </div>
                </div>
                <div className="text-right">
                   <div className={`mono text-[11px] font-bold ${
                     a.n < 100000 ? 'text-rose-600' : 
                     a.n < 500000 ? 'text-amber-600' : 'text-green-700'
                   }`}>
                     {a.cash}
                   </div>
                </div>
              </div>
            ))}
          </div>
        </Panel>

        {/* Custodian Status */}
        <Panel title="Custodian team_index" action="Manage_Team" onAction={() => onSetScreen('custodians')}>
          <div className="space-y-3">
            {[
              { init: "MR", name: "Motiur Rahman", role: "Key Holder", status: "Available", st: "success", bg: "bg-amber-50", c: "text-amber-700" },
              { init: "AK", name: "Arif Karim", role: "Combo Holder", status: "Available", st: "success", bg: "bg-indigo-50", c: "text-indigo-700" },
              { init: "SB", name: "Sumaiya Begum", role: "Key Holder", status: "On Duty", st: "warning", bg: "bg-rose-50", c: "text-rose-700" },
              { init: "HI", name: "Hasan Islam", role: "Combo Holder", status: "Available", st: "success", bg: "bg-emerald-50", c: "text-emerald-700" },
            ].map((c, i) => (
              <div key={i} className="flex items-center gap-3">
                <div className={`w-7 h-7 rounded border ${c.bg} ${c.c} flex items-center justify-center font-bold text-[10px] shrink-0 uppercase`}>
                  {c.init}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="text-[11px] font-bold text-slate-700 truncate">{c.name}</div>
                  <div className="text-[9px] text-slate-400 font-bold uppercase tracking-tight">{c.role}</div>
                </div>
                <Badge text={c.status} type={c.st} small />
              </div>
            ))}
          </div>
        </Panel>
      </div>

      <div className="bg-slate-900 border border-slate-800 rounded-lg p-4 text-slate-400 overflow-hidden relative group">
          <div className="absolute right-0 top-0 w-32 h-32 bg-[#008244]/10 rounded-full -mr-16 -mt-16 group-hover:scale-110 transition-transform duration-500" />
          <div className="relative z-10">
            <h3 className="text-xs font-bold text-[#008244] uppercase tracking-widest mb-1 flex items-center gap-2">
              <Coins size={14} /> Critical Operational Alert
            </h3>
            <p className="text-[11px] text-slate-500 mb-3 max-w-lg italic font-medium">
              Insufficient cash reported at 3 nodes. Synchronize CIT parameters to maintain service availability.
            </p>
            <div className="flex gap-2">
              <Button variant="primary" size="sm" className="h-7 text-[10px] uppercase font-bold" onClick={() => onSetScreen('replenishment')}>Launch_Refill_Wizard</Button>
              <Button variant="ghost" size="sm" className="h-7 text-[10px] uppercase font-bold border-slate-700 text-slate-400 hover:bg-slate-800">Dismiss</Button>
            </div>
          </div>
      </div>
    </div>
  );
};

export default CentreDashboard;
