import React, { useState } from 'react';
import { Panel, Button, Badge } from '../shared/UI';
import { 
  MapPin, 
  Truck, 
  User, 
  Wifi, 
  Battery, 
  Navigation, 
  MoreHorizontal,
  Smartphone,
  CheckCircle2,
  AlertCircle,
  Search,
  Maximize2
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const CustodianTracking: React.FC = () => {
  const [selected, setSelected] = useState<string | null>(null);

  const team = [
    { id: "PAIR-01", c1: "Motiur Rahman", c2: "Arif Karim", status: "In_Transit", zone: "Gulshan 2", eta: "12 mins", color: "navy" },
    { id: "PAIR-02", c1: "Hasan Islam", c2: "Sumaiya Begum", status: "On_Site", zone: "Niketan", eta: "Arrived", color: "success" },
    { id: "PAIR-03", c1: "Rakib Uddin", c2: "Tania B", status: "Idle", zone: "Gulshan ADC", eta: "N/A", color: "slate" },
    { id: "PAIR-04", c1: "Farhan I", c2: "Nusrat J", status: "Low_Battery", zone: "Banani", eta: "8 mins", color: "danger" },
  ];

  return (
    <div className="grid grid-cols-1 xl:grid-cols-4 gap-4 h-[calc(100vh-140px)]">
      {/* Team List Sidebar */}
      <div className="xl:col-span-1 space-y-3 overflow-y-auto pr-1">
        <div className="flex items-center justify-between mb-2">
           <h3 className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Active_Deployments</h3>
           <Badge text={`${team.length} Ready`} type="success" small />
        </div>
        
        <div className="relative group">
           <Search size={12} className="absolute left-2.5 top-1/2 -translate-y-1/2 text-slate-400" />
           <input 
             placeholder="Search Pair ID or Member..."
             className="w-full pl-8 pr-3 py-1.5 bg-white border border-slate-200 rounded text-[10px] font-medium focus:ring-1 focus:ring-[#003366]/10 outline-none"
           />
        </div>

        <div className="space-y-2">
           {team.map(p => (
             <div 
               key={p.id}
               onClick={() => setSelected(p.id)}
               className={`p-3 rounded-lg border transition-all cursor-pointer group ${
                 selected === p.id ? "bg-[#003366]/5 border-[#003366]/20" : "bg-white border-slate-200 hover:border-slate-300"
               }`}
             >
               <div className="flex justify-between items-start mb-2">
                  <div className="flex items-center gap-1.5">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#003366] shadow-[0_0_4px_rgba(0,51,102,0.5)]"></div>
                    <span className="text-[11px] font-bold text-[#003366] font-mono">{p.id}</span>
                  </div>
                  <Badge text={p.status} type={p.color as any} small />
               </div>
               
               <div className="flex items-center gap-2 mb-2">
                  <div className="flex -space-x-2">
                     <div className="w-6 h-6 rounded-full border border-white bg-slate-200 flex items-center justify-center text-[8px] font-bold text-slate-500 uppercase">{p.c1[0]}</div>
                     <div className="w-6 h-6 rounded-full border border-white bg-[#003366]/10 flex items-center justify-center text-[8px] font-bold text-[#003366] uppercase">{p.c2[0]}</div>
                  </div>
                  <div className="text-[10px] font-semibold text-slate-600 truncate">{p.c1} & {p.c2}</div>
               </div>

               <div className="flex items-center justify-between mt-3 pt-2 border-t border-slate-100 text-[9px] text-slate-400 font-bold uppercase tracking-tighter">
                  <span className="flex items-center gap-1"><MapPin size={10} /> {p.zone}</span>
                  <span className="flex items-center gap-1"><Navigation size={10} /> {p.eta}</span>
               </div>
             </div>
           ))}
        </div>

        <Panel title="System_Status" className="mt-4">
           <div className="space-y-2">
              <div className="flex justify-between text-[9px] font-bold uppercase">
                 <span className="text-slate-400">API Latency</span>
                 <span className="text-emerald-500">14ms</span>
              </div>
              <div className="flex justify-between text-[9px] font-bold uppercase">
                 <span className="text-slate-400">GPS Precision</span>
                 <span className="text-emerald-500">±2m</span>
              </div>
              <div className="flex justify-between text-[9px] font-bold uppercase">
                 <span className="text-slate-400">Encryption</span>
                 <span className="text-[#003366]">AES_256</span>
              </div>
           </div>
        </Panel>
      </div>

      {/* Map Content - Dummy Visual Representation */}
      <div className="xl:col-span-3 flex flex-col gap-4 h-full">
         <Panel title="Real-time_Node_Tracking_Visualizer" noPad className="flex-1 relative overflow-hidden bg-slate-100">
            {/* Fake Map Grid */}
            <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'linear-gradient(#003366 1px, transparent 1px), linear-gradient(90deg, #003366 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
            
            {/* Fake Map Elements */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
               <div className="relative w-full h-full max-w-2xl max-h-[500px]">
                  {/* Pair Pins */}
                  <motion.div 
                    animate={{ y: [0, -5, 0] }}
                    transition={{ repeat: Infinity, duration: 2 }}
                    className="absolute top-[20%] left-[30%] group pointer-events-auto cursor-pointer"
                  >
                     <div className="bg-[#003366] p-1.5 rounded-full shadow-lg border-2 border-white">
                        <Truck size={14} className="text-white" />
                     </div>
                     <div className="absolute top-full mt-2 left-1/2 -translate-x-1/2 bg-white px-2 py-1 border border-[#003366]/20 rounded text-[9px] font-bold shadow-md whitespace-nowrap hidden group-hover:block z-50">
                        PAIR-01: GULSHAN_CIRCLE_2
                     </div>
                  </motion.div>

                  <motion.div 
                    initial={{ x: 100, y: 100 }}
                    className="absolute top-[50%] left-[60%] group pointer-events-auto cursor-pointer"
                  >
                     <div className="bg-emerald-600 p-1.5 rounded-full shadow-lg border-2 border-white">
                        <MapPin size={14} className="text-white" />
                     </div>
                     <div className="absolute top-full mt-2 left-1/2 -translate-x-1/2 bg-white px-2 py-1 border border-emerald-200 rounded text-[9px] font-bold shadow-md whitespace-nowrap hidden group-hover:block z-50">
                        PAIR-02: ATM_SITE_042
                     </div>
                  </motion.div>

                  <div className="absolute top-[10%] left-[80%] opacity-20 transform rotate-12">
                     <div className="text-[80px] font-bold text-[#003366]/5 select-none font-mono tracking-widest">EBL_ZONE</div>
                  </div>
               </div>
            </div>

            {/* Map UI Overlays */}
            <div className="absolute top-4 left-4 flex flex-col gap-2">
               <Button variant="ghost" size="sm" className="bg-white/80 backdrop-blur-sm border-slate-200 h-8 w-8 p-0"><Maximize2 size={14}/></Button>
               <Button variant="ghost" size="sm" className="bg-white/80 backdrop-blur-sm border-slate-200 h-8 w-8 p-0">+</Button>
               <Button variant="ghost" size="sm" className="bg-white/80 backdrop-blur-sm border-slate-200 h-8 w-8 p-0">-</Button>
            </div>

            <div className="absolute bottom-4 right-4 flex items-center gap-3 bg-slate-900/90 text-white p-2 rounded border border-slate-700 shadow-2xl">
               <div className="flex items-center gap-2 pr-3 border-r border-slate-700">
                  <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse shadow-[0_0_8px_rgba(16,185,129,0.5)]"></div>
                  <span className="text-[9px] font-bold uppercase tracking-widest">Server: LIVE_SYNC_DHAKA</span>
               </div>
               <div className="text-[9px] font-mono text-slate-400">LAT: 23.794 | LONG: 90.404</div>
            </div>
         </Panel>

         {/* Selection Details Panel */}
         <AnimatePresence>
            {selected && (
               <motion.div 
                 initial={{ opacity: 0, y: 20 }}
                 animate={{ opacity: 1, y: 0 }}
                 exit={{ opacity: 0, y: 20 }}
               >
                 <Panel title={`AGENT_TELEMETRY: ${selected}`} action="Dismiss" onAction={() => setSelected(null)}>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                       <div className="flex items-center gap-3">
                          <div className="w-8 h-8 rounded bg-slate-100 flex items-center justify-center text-slate-500"><Smartphone size={16}/></div>
                          <div>
                             <div className="text-[9px] text-slate-400 font-bold uppercase">Device_Status</div>
                             <div className="text-[11px] font-bold text-slate-700">ENCRYPTED_OK</div>
                          </div>
                       </div>
                       <div className="flex items-center gap-3">
                          <div className="w-8 h-8 rounded bg-slate-100 flex items-center justify-center text-emerald-500"><Battery size={16}/></div>
                          <div>
                             <div className="text-[9px] text-slate-400 font-bold uppercase">Battery_Level</div>
                             <div className="text-[11px] font-bold text-slate-700">84%</div>
                          </div>
                       </div>
                       <div className="flex items-center gap-3">
                          <div className="w-8 h-8 rounded bg-slate-100 flex items-center justify-center text-[#003366]"><Wifi size={16}/></div>
                          <div>
                             <div className="text-[9px] text-slate-400 font-bold uppercase">Signal_Strength</div>
                             <div className="text-[11px] font-bold text-[#008244] font-mono">EXCELLENT (-42dBm)</div>
                          </div>
                       </div>
                       <div className="flex items-center gap-3">
                          <div className="w-8 h-8 rounded bg-slate-100 flex items-center justify-center text-[#003366]"><Navigation size={16}/></div>
                          <div>
                             <div className="text-[9px] text-slate-400 font-bold uppercase">Current_Asset</div>
                             <div className="text-[11px] font-bold text-slate-700">ATM_0055_GULSHAN</div>
                          </div>
                       </div>
                    </div>
                 </Panel>
               </motion.div>
            )}
         </AnimatePresence>
      </div>
    </div>
  );
};

export default CustodianTracking;
