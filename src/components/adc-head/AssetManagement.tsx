import React, { useState } from 'react';
import { Panel, Button, Badge, FormInput } from '../shared/UI';
import { 
  Monitor, 
  MapPin, 
  Activity, 
  Zap, 
  Cpu, 
  Search, 
  LayoutGrid, 
  List, 
  ChevronRight,
  HardDrive,
  Wrench
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const AssetManagement: React.FC = () => {
  const [view, setView] = useState<'grid' | 'list'>('list');
  
  const assets = [
    { id: "ATM-0042", model: "NCR SelfServ 80", loc: "Gulshan 2 Circle", node: "Gulshan ADC", status: "Healthy", health: 98, cash: "88%", uptime: "99.9%" },
    { id: "ATM-0055", model: "Diebold Nixdorf DN", loc: "Gulshan 1 DCC", node: "Gulshan ADC", status: "Critical", health: 42, cash: "5%", uptime: "88.4%" },
    { id: "ATM-0082", model: "NCR SelfServ 80", loc: "Banani Rd 11", node: "Gulshan ADC", status: "Healthy", health: 95, cash: "62%", uptime: "99.2%" },
    { id: "ATM-0112", model: "Wincor Nixdorf", loc: "Mirpur 10", node: "Mirpur ADC", status: "Warning", health: 76, cash: "12%", uptime: "94.5%" },
    { id: "ATM-0145", model: "NCR SelfServ 23", loc: "Motijheel Br", node: "Motijheel ADC", status: "Healthy", health: 99, cash: "44%", uptime: "100%" },
  ];

  return (
    <div className="space-y-4">
      <div className="flex flex-col md:flex-row items-center justify-between gap-4">
         <div className="flex items-center gap-3">
            <div className="p-2 bg-[#003366] text-white rounded shadow-sm">
               <Monitor size={18} />
            </div>
            <div>
               <h2 className="text-sm font-bold text-slate-800 tracking-tight uppercase">ASSET_INVENTORY_MANAGER</h2>
               <p className="text-[10px] text-slate-500 font-medium tracking-tight">Nationwide terminal health and hardware lifecycle monitoring.</p>
            </div>
         </div>
         <div className="flex bg-slate-100 p-1 rounded-lg border border-slate-200">
            <button onClick={() => setView('list')} className={`px-2 py-1 rounded transition-all ${view === 'list' ? 'bg-white shadow-sm text-[#003366]' : 'text-slate-400'}`}>
               <List size={14} />
            </button>
            <button onClick={() => setView('grid')} className={`px-2 py-1 rounded transition-all ${view === 'grid' ? 'bg-white shadow-sm text-[#003366]' : 'text-slate-400'}`}>
               <LayoutGrid size={14} />
            </button>
         </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 bg-white p-3 border border-slate-200 rounded-lg shadow-sm">
          <FormInput label="Filter_Node" options={["All Nodes", "Gulshan ADC", "Mirpur ADC", "Chittagong ADC"]} />
          <FormInput label="Terminal_Model" options={["All Models", "NCR SelfServ", "Diebold Nixdorf", "Wincor"]} />
          <FormInput label="Health_Bracket" options={["All Statuses", "Critical (< 50%)", "Healthy (> 90%)"]} />
          <div className="flex items-end pb-2">
             <Button variant="primary" size="sm" className="w-full h-8 bg-[#003366] font-bold uppercase tracking-widest text-[9px]">Apply_View_Lock</Button>
          </div>
      </div>

      <Panel title="global_atm_distribution" noPad>
         <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
               <thead className="bg-slate-50 border-b border-slate-200">
                  <tr className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">
                     <th className="py-2 px-3 border-r border-slate-200 w-24">Asset ID</th>
                     <th className="py-2 px-3 border-r border-slate-200">Location / Hardware_Spec</th>
                     <th className="py-2 px-3 border-r border-slate-200 w-32 border-slate-200">Parent_Node</th>
                     <th className="py-2 px-3 border-r border-slate-200 w-20 text-center">Cash%</th>
                     <th className="py-2 px-3 border-r border-slate-200 w-20 text-center">Health</th>
                     <th className="py-2 px-3 uppercase text-right">Service_State</th>
                  </tr>
               </thead>
               <tbody className="divide-y divide-slate-100 text-[11px]">
                  {assets.map((a, i) => (
                     <tr key={a.id} className="hover:bg-slate-50 transition-colors">
                        <td className="py-2 px-3 border-r border-slate-100 font-mono font-bold text-[#003366]">{a.id}</td>
                        <td className="py-2 px-3 border-r border-slate-100">
                           <div className="flex items-center gap-2">
                              <div className="p-1.5 bg-slate-100 rounded text-slate-400"><HardDrive size={12}/></div>
                              <div>
                                 <div className="font-bold text-slate-700">{a.loc}</div>
                                 <div className="text-[9px] text-slate-400 uppercase font-mono tracking-tighter">{a.model}</div>
                              </div>
                           </div>
                        </td>
                        <td className="py-2 px-3 border-r border-slate-100">
                           <Badge text={a.node} type="navy" small />
                        </td>
                        <td className="py-2 px-3 border-r border-slate-100 font-mono text-center">
                           <div className="flex flex-col gap-1 items-center">
                              <span className="font-bold text-slate-700">{a.cash}</span>
                              <div className="w-10 h-1 bg-slate-100 rounded-full">
                                 <div className={`h-full rounded-full ${parseInt(a.cash) < 20 ? 'bg-rose-500' : 'bg-[#008244]'}`} style={{width: a.cash}}></div>
                              </div>
                           </div>
                        </td>
                        <td className="py-2 px-3 border-r border-slate-100 text-center">
                           <span className={`font-bold mono ${a.health < 50 ? 'text-rose-600' : a.health < 80 ? 'text-amber-600' : 'text-[#008244]'}`}>{a.health}%</span>
                        </td>
                        <td className="py-2 px-3 text-right">
                           <div className="flex items-center justify-end gap-2">
                              <Badge text={a.status} type={a.status === 'Healthy' ? 'success' : a.status === 'Critical' ? 'danger' : 'warning'} small />
                              <Button variant="ghost" size="sm" className="h-6 w-6 p-0 justify-center"><ChevronRight size={14} className="text-slate-300"/></Button>
                           </div>
                        </td>
                     </tr>
                  ))}
               </tbody>
            </table>
         </div>
      </Panel>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
         <Panel title="network_uptime_index">
            <div className="h-32 flex items-end gap-1.5 px-2">
               {[40, 65, 80, 55, 90, 95, 99, 85, 70, 75, 88, 92].map((v, i) => (
                  <div key={i} className="flex-1 bg-[#003366]/10 border border-[#003366]/20 rounded-t group relative hover:bg-[#003366] transition-all cursor-crosshair" style={{ height: `${v}%` }}>
                     <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 hidden group-hover:block bg-slate-900 text-white text-[8px] font-bold px-1.5 py-0.5 rounded whitespace-nowrap shadow-xl z-50">
                        {v}% Uptime
                     </div>
                  </div>
               ))}
            </div>
            <div className="flex justify-between mt-2 px-1 text-[9px] font-bold text-slate-400 uppercase tracking-widest">
               <span>JAN_2024</span>
               <span>DEC_2024</span>
            </div>
         </Panel>

         <Panel title="node_asset_health">
            <div className="space-y-3">
               {[
                 { name: 'GULSHAN_ADC', val: 94, state: 'STABLE' },
                 { name: 'MIRPUR_ADC', val: 82, state: 'WARNING' },
                 { name: 'MOTIJHEEL_ADC', val: 91, state: 'STABLE' },
                 { name: 'CHITTAGONG_ADC', val: 74, state: 'LOW_HEALTH' },
               ].map(n => (
                 <div key={n.name} className="flex items-center gap-3">
                    <div className="text-[10px] font-bold text-slate-600 w-24 truncate">{n.name}</div>
                    <div className="flex-1 bg-slate-100 h-1.5 rounded-full overflow-hidden">
                       <div className={`h-full ${n.val < 80 ? 'bg-rose-500' : 'bg-indigo-500'}`} style={{ width: `${n.val}%` }}></div>
                    </div>
                    <div className="text-[9px] font-bold text-slate-400 font-mono w-12 text-right">{n.val}%</div>
                    <Badge text={n.state} type={n.val < 80 ? 'danger' : 'success'} small />
                 </div>
               ))}
            </div>
         </Panel>
      </div>
    </div>
  );
};

export default AssetManagement;
