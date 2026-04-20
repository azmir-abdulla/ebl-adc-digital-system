export type Role = 'head' | 'centre' | 'custodian';

export type Screen = 
  | 'dashboard' 
  | 'centres' 
  | 'approvals' 
  | 'assets' 
  | 'reports' 
  | 'roles' 
  | 'audit'
  | 'cashpos'
  | 'replenishment'
  | 'conveyance'
  | 'calls'
  | 'tickets'
  | 'custodians'
  | 'atms';

export interface ATM {
  id: string;
  loc: string;
  centre: string;
  model: string;
  cash: string;
  cashN: number;
  txn?: string;
  status: 'Active' | 'Low Cash' | 'Out of Cash' | 'Maintenance';
  lastReplenishment?: string;
  area?: string;
  nextDue?: string;
}

export interface Custodian {
  id: string;
  name: string;
  init: string;
  role: 'Key Holder' | 'Combination Holder';
  status: 'Available' | 'On Duty' | 'On Leave' | 'Review';
  st: 'success' | 'warning' | 'neutral' | 'info' | 'danger';
  bg: string;
  c: string;
  phone?: string;
}

export interface Ticket {
  id: string;
  atm: string;
  cat: string;
  by: string;
  date: string;
  pri: 'danger' | 'warning' | 'info' | 'neutral';
  st: 'success' | 'warning' | 'neutral' | 'info';
}
