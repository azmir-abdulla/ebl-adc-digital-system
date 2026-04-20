import React from 'react';
import { motion } from 'motion/react';
import { Shield, Layout, Smartphone, ChevronRight } from 'lucide-react';
import { Role } from '../types';

interface HomePageProps {
  onSelectRole: (role: Role) => void;
}

const HomePage: React.FC<HomePageProps> = ({ onSelectRole }) => {
  const roles = [
    {
      id: 'head' as const,
      label: 'ADC HEAD_OPS',
      desc: 'Nationwide oversight, strategic cash allocation, and high-level approval protocols.',
      icon: <Shield size={20} />,
      color: 'bg-[#003366]',
      accent: 'border-[#003366]/10',
      tag: 'SYSTEM_ADMIN'
    },
    {
      id: 'centre' as const,
      label: 'ADC CENTRE_EXEC',
      desc: 'Branch-level management. Handle replenishment cycles, field teams, and local logistics.',
      icon: <Layout size={20} />,
      color: 'bg-[#008244]',
      accent: 'border-[#008244]/10',
      tag: 'NODE_OPERATOR'
    },
    {
      id: 'custodian' as const,
      label: 'FIELD_CUSTODIAN',
      desc: 'Ground operations mobile console. ATM scanning, secure loading, and claims reporting.',
      icon: <Smartphone size={20} />,
      color: 'bg-slate-700',
      accent: 'border-slate-300',
      tag: 'AGENT_V3'
    },
  ];

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col items-center justify-center p-4 font-sans text-slate-900 border border-slate-200">
      <div className="w-full max-w-3xl space-y-8">
        <header className="text-center space-y-3">
          <div className="flex items-center justify-center gap-3 mb-4">
             <div className="w-10 h-10 bg-[#008244] rounded flex items-center justify-center shadow-lg transform -rotate-12 group-hover:rotate-0 transition-transform">
                <span className="text-white text-xs font-black italic">EBL</span>
             </div>
             <div>
                <h1 className="text-xl font-black text-[#003366] tracking-tighter italic leading-none">EASTERN BANK PLC.</h1>
                <div className="text-[9px] font-bold text-slate-400 uppercase tracking-widest text-left">ADC_CORE_MANAGEMENT</div>
             </div>
          </div>
          <p className="text-[11px] text-slate-500 font-medium max-w-sm mx-auto">
            Authorized Banking Personnel Only. Select terminal role to initiate secure environment synchronization.
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {roles.map((role, idx) => (
            <motion.div
              key={role.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              whileHover={{ y: -4, borderColor: '#008244' }}
              onClick={() => onSelectRole(role.id)}
              className={`bg-white border ${role.accent} rounded-lg p-5 cursor-pointer shadow-sm transition-all hover:shadow-md group flex flex-col items-center text-center`}
            >
              <div className={`w-10 h-10 ${role.color} text-white rounded flex items-center justify-center mb-4 shadow-sm group-hover:scale-110 transition-transform`}>
                {role.icon}
              </div>
              <div className="text-[9px] font-bold text-[#003366] mb-1 tracking-widest uppercase">{role.tag}</div>
              <h3 className="text-[11px] font-extrabold text-slate-800 mb-2 truncate px-1 serif-italic leading-tight">
                {role.label}
              </h3>
              <p className="text-[10px] text-slate-500 font-medium leading-relaxed mb-4 italic">
                {role.desc}
              </p>
              <div className="mt-auto w-full pt-3 border-t border-slate-100 font-bold text-[9px] text-slate-400 group-hover:text-[#008244] transition-colors tracking-tight">
                 SYNCHRONIZE_SESSION →
              </div>
            </motion.div>
          ))}
        </div>

        <footer className="pt-8 border-t border-slate-200">
          <div className="flex flex-wrap items-center justify-center gap-6 text-[9px] font-bold uppercase tracking-widest">
            <span className="flex items-center gap-1.5 text-slate-400">
              <span className="w-1.5 h-1.5 rounded-full bg-green-500 shadow-[0_0_4px_rgba(34,197,94,0.4)]"></span> 
              DB_CONNECTED
            </span>
            <span className="flex items-center gap-1.5 text-slate-300">|</span>
            <span className="flex items-center gap-1.5 text-slate-400">ENCRYPTION: AES_256</span>
            <span className="flex items-center gap-1.5 text-slate-300">|</span>
            <span className="flex items-center gap-1.5 text-slate-400 font-mono">TZ_UTC_06</span>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default HomePage;
