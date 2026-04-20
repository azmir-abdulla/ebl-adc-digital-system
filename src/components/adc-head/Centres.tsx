import React, { useState } from 'react';
import { Badge, Button, Panel, FormInput } from '../shared/UI';
import { MapPin, Search, Plus, Filter, Users, Warehouse, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const Centres: React.FC = () => {
  const [showAdd, setShowAdd] = useState(false);
  const centres = [
    { name: "Gulshan ADC", incharge: "Kabir Ahmed", region: "Dhaka North", atms: 24, cust: 6, cash: "18.4 L", status: "success" },
    { name: "Motijheel ADC", incharge: "Farhan Islam", region: "Dhaka Central", atms: 31, cust: 8, cash: "22.1 L", status: "success" },
    { name: "Mirpur ADC", incharge: "Tania Begum", region: "Dhaka West", atms: 19, cust: 4, cash: "14.8 L", status: "success" },
    { name: "Chittagong ADC", incharge: "Shahed Alam", region: "Chittagong", atms: 28, cust: 7, cash: "20.5 L", status: "success" },
    { name: "Sylhet ADC", incharge: "Nusrat Jahan", region: "Sylhet", atms: 15, cust: 4, cash: "9.2 L", status: "warning" },
    { name: "Rajshahi ADC", incharge: "Karim Uddin", region: "Rajshahi", atms: 12, cust: 3, cash: "8.1 L", status: "success" },
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div className="relative group">
           <div className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-[#003366] transition-colors">
              <Search size={14} />
           </div>
           <input 
             placeholder="Search by center or region..." 
             className="pl-9 pr-4 py-2 border border-slate-200 rounded-lg text-xs w-64 focus:ring-2 focus:ring-[#003366]/10 outline-none transition-all"
           />
        </div>
        <div className="flex gap-2">
           <Button variant="ghost" size="sm"><Filter size={14} className="mr-1" /> Filter</Button>
           <Button variant="gold" size="sm" onClick={() => setShowAdd(true)}><Plus size={16} className="mr-1" /> Register Centre</Button>
        </div>
      </div>

      <AnimatePresence>
        {showAdd && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="overflow-hidden"
          >
            <Panel title="Register New ADC Centre" action="Close" onAction={() => setShowAdd(false)} className="mb-6 border-[#003366]/20 bg-[#003366]/5">
               <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <FormInput label="Centre Name" placeholder="e.g. Khulna ADC" />
                  <FormInput label="Region / Division" options={["Dhaka", "Chittagong", "Rajshahi", "Khulna", "Sylhet", "Barisal", "Rangpur", "Mymensingh"]} />
                  <FormInput label="Branch In-Charge" placeholder="Select EBL employee..." />
               </div>
               <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <FormInput label="Office Address" placeholder="Detailed location..." />
                  <FormInput label="Security Clearance" options={["Level 1", "Level 2", "High Priority"]} />
               </div>
               <div className="flex justify-end gap-2 mt-4 pt-4 border-t border-slate-200">
                  <Button variant="ghost" size="sm" onClick={() => setShowAdd(false)}>Cancel</Button>
                  <Button variant="primary" size="sm">Create Registration</Button>
               </div>
            </Panel>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Centres List - High Density Table */}
      <Panel title="registered_adc_nodes" noPad>
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead className="bg-slate-50 border-b border-slate-200">
              <tr className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">
                <th className="py-2 px-3 border-r border-slate-200 w-12 uppercase">Status</th>
                <th className="py-2 px-3 border-r border-slate-200">Centre_Name / Region</th>
                <th className="py-2 px-3 border-r border-slate-200 w-20 uppercase text-center">ATMs</th>
                <th className="py-2 px-3 border-r border-slate-200 w-24 uppercase text-center">Custodians</th>
                <th className="py-2 px-3 border-r border-slate-200 w-28 uppercase text-right">Cash (L)</th>
                <th className="py-2 px-3 border-r border-slate-200 uppercase">In-Charge</th>
                <th className="py-2 px-3 uppercase text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-[11px]">
              {centres.map((c, i) => (
                <tr key={c.name} className={`hover:bg-slate-50 transition-colors ${i % 2 === 1 ? 'bg-[#003366]/5' : ''}`}>
                  <td className="py-2 px-3 border-r border-slate-100 text-center">
                    <div className={`w-2 h-2 rounded-full mx-auto ${
                      c.status === 'success' ? 'bg-[#008244] shadow-[0_0_4px_rgba(0,130,68,0.4)]' : 'bg-amber-500'
                    }`} />
                  </td>
                  <td className="py-2 px-3 border-r border-slate-100 font-medium text-slate-700">
                    <div className="flex items-center gap-2">
                      <Warehouse size={12} className="text-slate-400" />
                      <div>
                        <div className="font-bold text-[#003366]">{c.name}</div>
                        <div className="text-[10px] text-slate-400 font-mono italic">{c.region}</div>
                      </div>
                    </div>
                  </td>
                  <td className="py-2 px-3 border-r border-slate-100 font-mono text-center font-bold text-slate-600">
                    {c.atms}
                  </td>
                  <td className="py-2 px-3 border-r border-slate-100 font-mono text-center font-bold text-slate-600">
                    {c.cust}
                  </td>
                  <td className="py-2 px-3 border-r border-slate-100 font-mono text-right font-bold text-slate-800">
                    {c.cash}
                  </td>
                  <td className="py-2 px-3 border-r border-slate-100 font-serif italic text-slate-500">
                    {c.incharge}
                  </td>
                  <td className="py-2 px-3 text-right">
                    <Button variant="ghost" size="sm" className="h-6 w-6 p-0 justify-center">
                       <ChevronRight size={14} className="text-slate-400" />
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Panel>
    </div>
  );
};

export default Centres;
