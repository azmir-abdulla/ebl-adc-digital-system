import React, { useState } from 'react';
import { Badge, Button, Panel, FormInput } from '../shared/UI';
import { Plus, UserPlus, Phone, Mail, Award, Activity, Users } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const CentreCustodians: React.FC = () => {
  const [showAdd, setShowAdd] = useState(false);
  const custodians = [
    { name: "Motiur Rahman", id: "EBL-C042", role: "Key Holder", initial: "MR", contact: "+880 1711-223344", status: "Available", color: "bg-amber-100 text-amber-700" },
    { name: "Arif Karim", id: "EBL-C045", role: "Combination Holder", initial: "AK", contact: "+880 1722-556677", status: "Available", color: "bg-blue-100 text-blue-700" },
    { name: "Sumaiya Begum", id: "EBL-C051", role: "Key Holder", initial: "SB", contact: "+880 1733-889900", status: "On Duty", color: "bg-rose-100 text-rose-700" },
    { name: "Hasan Islam", id: "EBL-C056", role: "Combination Holder", initial: "HI", contact: "+880 1744-112233", status: "Available", color: "bg-emerald-100 text-emerald-700" },
    { name: "Rasel Ahmed", id: "EBL-C061", role: "Combination Holder", initial: "RA", contact: "+880 1755-445566", status: "On Leave", color: "bg-slate-100 text-slate-700" },
  ];

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center bg-white p-4 rounded-xl border border-[#b2d8ca]">
        <div className="flex items-center gap-4">
          <div className="p-3 bg-emerald-50 text-[#12b886] rounded-xl shadow-inner">
            <Users size={24} />
          </div>
          <div>
            <h3 className="text-base font-bold text-slate-800">Branch Custodian Team</h3>
            <p className="text-xs text-slate-500">Managing 6 active agents for Gulshan District</p>
          </div>
        </div>
        <Button variant="teal" size="sm" onClick={() => setShowAdd(!showAdd)}>
          <UserPlus size={16} className="mr-2" /> Add New Custodian
        </Button>
      </div>

      <AnimatePresence>
        {showAdd && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="mb-8 overflow-hidden origin-top"
          >
            <Panel title="Enroll Custodian" action="Policy Check" className="bg-emerald-50/20 border-emerald-200">
               <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <FormInput label="Full Name" placeholder="e.g. Abdullah Al Mamun" />
                  <FormInput label="Employee ID" placeholder="EBL-CXXXX" />
                  <FormInput label="Assigned Role" options={["-- Select Designation --", "Key Holder", "Combination Holder"]} />
                  <FormInput label="Mobile Number" placeholder="+880 1XXXXXXXXX" />
               </div>
               <div className="bg-amber-50 rounded-lg p-3 text-[10px] text-amber-700 font-medium mb-4 flex gap-2 items-start">
                  <Award size={14} className="shrink-0" />
                  <span>Key holders must have physical branch keys under their custody and requires separate vault clearance.</span>
               </div>
               <div className="flex justify-end gap-2 pt-4 border-t border-slate-100">
                  <Button variant="ghost" size="sm" onClick={() => setShowAdd(false)}>Cancel</Button>
                  <Button variant="primary" size="sm">Register Custodian</Button>
               </div>
            </Panel>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {custodians.map(c => (
          <div key={c.id} className="bg-white border border-slate-200 rounded-2xl p-5 hover:shadow-lg transition-all group">
            <div className="flex justify-between items-start mb-4">
               <div className={`w-12 h-12 rounded-2xl flex items-center justify-center font-bold text-base shadow-sm ${c.color} group-hover:scale-110 transition-transform`}>
                 {c.initial}
               </div>
               <div className="flex flex-col items-end gap-2">
                 <Badge text={c.status} type={c.status === 'Available' ? 'success' : c.status === 'On Duty' ? 'warning' : 'neutral'} />
                 <div className="bg-slate-50 text-slate-400 p-1 rounded-md opacity-0 group-hover:opacity-100 transition-opacity">
                    <Activity size={14} />
                 </div>
               </div>
            </div>

            <div className="space-y-1 mb-5">
               <div className="text-sm font-bold text-slate-800">{c.name}</div>
               <div className="text-[10px] uppercase font-bold text-slate-400 tracking-wider mono">{c.id}</div>
            </div>

            <div className="py-3 px-4 bg-slate-50 rounded-xl mb-4 border border-slate-100">
               <div className="text-[9px] font-bold text-slate-400 uppercase tracking-widest mb-1">Designation</div>
               <div className={`text-xs font-bold ${c.role.includes('Key') ? 'text-amber-600' : 'text-blue-600'}`}>{c.role}</div>
            </div>

            <div className="flex items-center gap-3 text-xs text-slate-500 mb-6">
                <Phone size={14} className="text-emerald-500" /> {c.contact}
            </div>

            <div className="flex gap-2">
               <Button variant="ghost" size="sm" className="flex-1 justify-center"><Mail size={14} /></Button>
               <Button variant="ghost" size="sm" className="flex-1 justify-center">Profile</Button>
               <Button variant="ghost" size="sm" className="flex-1 justify-center text-rose-500 border-rose-100 hover:bg-rose-50">Archive</Button>
            </div>
          </div>
        ))}
        
        <button 
          onClick={() => setShowAdd(true)}
          className="border-2 border-dashed border-[#b2d8ca] rounded-2xl p-6 flex flex-col items-center justify-center gap-2 text-slate-400 hover:bg-emerald-50/30 hover:border-[#12b886] transition-all group h-full min-h-[220px]"
        >
           <div className="w-12 h-12 rounded-full bg-slate-50 flex items-center justify-center group-hover:bg-emerald-100 group-hover:text-emerald-600 transition-colors">
              <Plus size={24} />
           </div>
           <div className="text-sm font-semibold">Enroll New Custodian</div>
        </button>
      </div>
    </div>
  );
};

export default CentreCustodians;
