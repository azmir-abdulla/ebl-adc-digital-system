import React from 'react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

/**
 * Utility for merging tailwind classes.
 * Since I don't have these installed yet, I'll implement simple versions or wait.
 * I will install them to be safe.
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const Badge = ({ text, type = "neutral", small }: { text: string, type?: string, small?: boolean }) => {
  const map: Record<string, { bg: string, color: string, border: string }> = {
    success: { bg: "#f0fdf4", color: "#008244", border: "#dcfce7" },
    warning: { bg: "#fff7ed", color: "#9a3412", border: "#ffedd5" },
    danger:  { bg: "#fef2f2", color: "#991b1b", border: "#fee2e2" },
    info:    { bg: "#eff6ff", color: "#003366", border: "#dbeafe" },
    neutral: { bg: "#f8fafc", color: "#475569", border: "#f1f5f9" },
    teal:    { bg: "#f0fdfa", color: "#0d9488", border: "#ccfbf1" },
    amber:   { bg: "#fffbeb", color: "#92400e", border: "#fef3c7" },
    navy:    { bg: "#f1f5f9", color: "#1e293b", border: "#e2e8f0" },
    dark:    { bg: "#0f172a", color: "#f8fafc", border: "#1e293b" },
    primary: { bg: "#eef2ff", color: "#003366", border: "#e0e7ff" }
  };
  const s = map[type] || map.neutral;
  return (
    <span 
      className="inline-block whitespace-nowrap rounded border font-bold uppercase tracking-tight"
      style={{ 
        background: s.bg, 
        color: s.color, 
        borderColor: s.border,
        fontSize: small ? 8 : 10, 
        padding: "1px 4px" 
      }}
    >
      {text}
    </span>
  );
};

export const Button = ({ 
  children, 
  onClick, 
  variant = "primary", 
  size = "md", 
  className 
}: { 
  children: React.ReactNode, 
  onClick?: () => void, 
  variant?: 'primary' | 'teal' | 'ghost' | 'danger' | 'success' | 'amber' | 'gold' | 'ebl',
  size?: 'sm' | 'md' | 'lg',
  className?: string
}) => {
  const variants = {
    primary: "bg-[#003366] text-white hover:bg-[#002244]",
    teal:    "bg-[#008244] text-white hover:bg-[#007234]",
    ebl:     "bg-[#008244] text-white hover:bg-[#007234]",
    ghost:   "bg-white text-[#003366] border border-slate-200 hover:bg-slate-50",
    danger:  "bg-rose-600 text-white hover:bg-rose-700",
    success: "bg-[#008244] text-white hover:bg-[#007234]",
    amber:   "bg-amber-600 text-white hover:bg-amber-700",
    gold:    "bg-slate-50 text-[#003366] font-bold hover:bg-slate-100",
  };
  
  const sizes = {
    sm: "text-[10px] py-1 px-2.5",
    md: "text-[11px] py-1.5 px-3.5",
    lg: "text-[12px] py-2 px-4.5",
  };

  return (
    <button 
      onClick={onClick}
      className={cn(
        "inline-flex items-center gap-1.5 rounded-lg font-medium transition-all active:scale-95 cursor-pointer",
        variants[variant],
        sizes[size],
        className
      )}
    >
      {children}
    </button>
  );
};

export const Panel = ({ title, action, onAction, children, noPad, className }: { 
  title: string, 
  action?: string, 
  onAction?: () => void, 
  children: React.ReactNode, 
  noPad?: boolean,
  className?: string
}) => (
  <div className={cn("bg-white border border-slate-200 rounded-lg overflow-hidden shadow-sm", className)}>
    <div className="px-3 py-2 bg-slate-50 border-b border-slate-200 flex items-center justify-between">
      <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">{title}</span>
      {action && (
        <span 
          onClick={onAction} 
          className="text-[10px] text-[#008244] font-bold cursor-pointer hover:underline uppercase"
        >
          {action}
        </span>
      )}
    </div>
    <div className={cn(noPad ? "" : "p-3")}>
      {children}
    </div>
  </div>
);

export const FormInput = ({ label, value, onChange, placeholder, type = "text", options, rows }: {
  label?: string;
  value?: string;
  onChange?: (val: string) => void;
  placeholder?: string;
  type?: string;
  options?: (string | { label: string, value: string })[];
  rows?: number;
}) => (
  <div className="mb-2">
    {label && (
      <label className="block text-[9px] font-bold text-slate-400 uppercase tracking-wide mb-1 px-0.5">
        {label}
      </label>
    )}
    {options ? (
      <select 
        value={value} 
        onChange={e => onChange?.(e.target.value)} 
        className="w-full px-2.5 py-1.5 text-[11px] border border-slate-200 rounded bg-white text-slate-800 outline-none focus:ring-1 focus:ring-[#003366]/20 transition-all font-medium"
      >
        {options.map((o, i) => (
          <option key={typeof o === 'string' ? o : o.value} value={typeof o === 'string' ? o : o.value}>
            {typeof o === 'string' ? o : o.label}
          </option>
        ))}
      </select>
    ) : rows ? (
      <textarea 
        rows={rows} 
        value={value} 
        onChange={e => onChange?.(e.target.value)} 
        placeholder={placeholder} 
        className="w-full px-2.5 py-1.5 text-[11px] border border-slate-200 rounded bg-white text-slate-800 outline-none resize-none focus:ring-1 focus:ring-[#003366]/20 transition-all font-medium" 
      />
    ) : (
      <input 
        type={type} 
        value={value} 
        onChange={e => onChange?.(e.target.value)} 
        placeholder={placeholder} 
        className="w-full px-2.5 py-1.5 text-[11px] border border-slate-200 rounded bg-white text-slate-800 outline-none focus:ring-1 focus:ring-[#003366]/20 transition-all font-medium" 
      />
    )}
  </div>
);
