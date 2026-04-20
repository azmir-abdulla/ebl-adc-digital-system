import React, { useState } from 'react';
import { Panel, Button, Badge, FormInput } from '../shared/UI';
import { 
  Users, 
  UserPlus, 
  Search, 
  Shield, 
  Key, 
  Mail, 
  Phone, 
  ChevronRight,
  MoreVertical,
  Lock,
  Unlock,
  Building
} from 'lucide-react';
import { motion } from 'motion/react';

const UserRoles: React.FC = () => {
  const users = [
    { id: "USR-001", name: "Rahman Hossain", email: "rahman.h@ebl.com", role: "ADC Head", status: "Active", node: "Head Office", lastLogin: "Today, 09:12 AM" },
    { id: "USR-042", name: "Kabir Ahmed", email: "kabir.a@ebl.com", role: "Centre In-Charge", status: "Active", node: "Gulshan ADC", lastLogin: "Today, 08:30 AM" },
    { id: "USR-088", name: "Motiur Rahman", email: "motiur.r@ebl.com", role: "Custodian", status: "Active", node: "Gulshan ADC", lastLogin: "Yesterday, 10:45 PM" },
    { id: "USR-102", name: "Tania B", email: "tania.b@ebl.com", role: "Custodian", status: "Active", node: "Gulshan ADC", lastLogin: "2d ago" },
    { id: "USR-155", name: "Farhan Islam", email: "farhan.i@ebl.com", role: "Regional Manager", status: "Inactive", node: "Chittagong ADC", lastLogin: "2w ago" },
  ];

  return (
    <div className="space-y-4">
      <div className="flex flex-col md:flex-row items-center justify-between gap-4">
         <div className="flex items-center gap-3">
            <div className="p-2 bg-[#003366] text-white rounded shadow-sm">
               <Shield size={18} />
            </div>
            <div>
               <h2 className="text-sm font-bold text-slate-800 tracking-tight uppercase">IDENTITY_ACCESS_GOVERNANCE</h2>
               <p className="text-[10px] text-slate-500 font-medium tracking-tight">Enterprise User Lifecycle and Role-Based Access Control (RBAC) node management.</p>
            </div>
         </div>
         <div className="flex gap-2">
            <Button variant="ghost" size="sm" className="h-8 text-[11px] border-slate-200">
               <Key size={14} className="mr-2" /> Audit Permissions
            </Button>
            <Button variant="primary" size="sm" className="h-8 text-[11px] bg-[#003366] hover:bg-black font-bold uppercase">
               <UserPlus size={14} className="mr-2" /> Provision New User
            </Button>
         </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-4">
         {/* Roles Summary */}
         <div className="lg:col-span-1 space-y-3">
            <Panel title="available_roles_index">
               <div className="space-y-2">
                  {[ 
                    { role: 'ADC Head', count: 2, color: 'bg-[#003366]' },
                    { role: 'Branch Manager', count: 12, color: 'bg-slate-700' },
                    { role: 'Centre In-Charge', count: 42, color: 'bg-[#008244]' },
                    { role: 'Custodian', count: 248, color: 'bg-indigo-400' },
                    { role: 'Auditor', count: 4, color: 'bg-amber-600' },
                  ].map(r => (
                    <div key={r.role} className="flex items-center justify-between p-2 hover:bg-slate-50 rounded border border-transparent hover:border-slate-100 transition-all cursor-pointer group">
                       <div className="flex items-center gap-2">
                          <div className={`w-1.5 h-1.5 rounded-full ${r.color}`}></div>
                          <span className="text-[10px] font-bold text-slate-600 group-hover:text-slate-900">{r.role}</span>
                       </div>
                       <span className="text-[10px] font-mono font-bold text-slate-400">{r.count}</span>
                    </div>
                  ))}
               </div>
            </Panel>

            <div className="bg-slate-50 p-4 rounded-lg border border-slate-200 border-dashed">
               <div className="flex items-start gap-3">
                  <div className="text-amber-500 mt-0.5"><Lock size={16} /></div>
                  <div>
                     <h4 className="text-[10px] font-bold text-slate-700 uppercase mb-1">Security Enforcement</h4>
                     <p className="text-[9px] text-slate-400 font-medium leading-relaxed">
                        MFA (Multi-Factor Authentication) is strictly mandatory for all Custodian and ADC Head accounts per EBL policy V2.
                     </p>
                  </div>
               </div>
            </div>
         </div>

         {/* User Directory */}
         <div className="lg:col-span-3 space-y-4">
            <Panel title="user_directory_master_list" noPad>
               <div className="p-3 border-b border-slate-100 flex gap-3">
                  <div className="flex-1 relative group">
                     <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-slate-900" />
                     <input 
                       placeholder="Filter by Name, Email or Employee ID..."
                       className="w-full pl-9 pr-4 py-1.5 bg-slate-50 border border-transparent rounded text-[11px] font-medium focus:bg-white focus:border-slate-200 outline-none transition-all"
                     />
                  </div>
                  <Button variant="ghost" size="sm" className="h-[30px] px-3 text-[10px] uppercase font-bold border-slate-100">
                     <Building size={12} className="mr-2" /> Global_Filter
                  </Button>
               </div>
               
               <div className="overflow-x-auto">
                  <table className="w-full text-left border-collapse">
                     <thead className="bg-slate-50">
                        <tr className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">
                           <th className="py-2 px-3 border-r border-slate-100">User_Subject</th>
                           <th className="py-2 px-3 border-r border-slate-100 w-32">Role_Designation</th>
                           <th className="py-2 px-3 border-r border-slate-100 w-32">Assigned_Node</th>
                           <th className="py-2 px-3 border-r border-slate-100 w-32">Last_Vector</th>
                           <th className="py-2 px-3 w-20 text-center uppercase">State</th>
                           <th className="py-2 px-3 text-right">Actions</th>
                        </tr>
                     </thead>
                     <tbody className="divide-y divide-slate-100 text-[11px]">
                        {users.map((u, i) => (
                           <tr key={u.id} className="hover:bg-slate-50 transition-colors">
                              <td className="py-2 px-3 border-r border-slate-100">
                                 <div className="flex items-center gap-3">
                                    <div className="w-8 h-8 rounded bg-slate-100 flex items-center justify-center text-[10px] font-bold text-slate-500 uppercase">{u.name.split(' ').map(n=>n[0]).join('')}</div>
                                    <div>
                                       <div className="font-extrabold text-slate-800">{u.name}</div>
                                       <div className="text-[9px] text-slate-400 flex items-center gap-1"><Mail size={8}/> {u.email}</div>
                                    </div>
                                 </div>
                              </td>
                              <td className="py-2 px-3 border-r border-slate-100 font-bold text-slate-600">{u.role}</td>
                              <td className="py-2 px-3 border-r border-slate-100">
                                 <Badge text={u.node} type="navy" small />
                              </td>
                              <td className="py-2 px-3 border-r border-slate-100 text-slate-400 font-mono italic">{u.lastLogin}</td>
                              <td className="py-2 px-3 border-r border-slate-100 text-center">
                                 <span className={`inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full text-[8px] font-bold uppercase ${
                                   u.status === 'Active' ? 'bg-emerald-50 text-[#008244]' : 'bg-slate-50 text-slate-400'
                                 }`}>
                                    <span className={`w-1 h-1 rounded-full ${u.status === 'Active' ? 'bg-[#008244] shadow-[0_0_4px_rgba(0,130,68,0.5)]' : 'bg-slate-300'}`}></span>
                                    {u.status}
                                 </span>
                              </td>
                              <td className="py-2 px-3 text-right">
                                 <div className="flex items-center justify-end gap-1">
                                    <Button variant="ghost" size="sm" className="h-6 w-6 p-0 border-slate-100"><Unlock size={12}/></Button>
                                    <Button variant="ghost" size="sm" className="h-6 w-6 p-0 border-slate-100"><MoreVertical size={12}/></Button>
                                 </div>
                              </td>
                           </tr>
                        ))}
                     </tbody>
                  </table>
               </div>
               <div className="p-2 flex justify-center border-t border-slate-50">
                  <Button variant="ghost" size="sm" className="text-[9px] font-bold uppercase tracking-widest text-slate-400 py-1">Internal_User_Register_Index_v2.0 →</Button>
               </div>
            </Panel>
         </div>
      </div>
    </div>
  );
};

export default UserRoles;
