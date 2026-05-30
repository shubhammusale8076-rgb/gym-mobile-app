import { MaterialCommunityIcons } from '@expo/vector-icons';

export type DashboardKpi = {
  id: string;
  title: string;
  value: string;
  growth: string;
  icon: keyof typeof MaterialCommunityIcons.glyphMap;
  variant: 'default' | 'highlight';
  chartData: number[];
};

export type QuickAction = {
  id: string;
  title: string;
  icon: keyof typeof MaterialCommunityIcons.glyphMap;
};

export type PaymentStatus = 'PAID' | 'PENDING' | 'FAILED';

export type PaymentRecord = {
  id: string;
  name: string;
  email: string;
  amount: string;
  status: PaymentStatus;
  initials: string;
};

export type AlertItem = {
  id: string;
  title: string;
  description: string;
};

export const kpis: DashboardKpi[] = [
  {
    id: '1',
    title: 'Total Members',
    value: '1,248',
    growth: '+12%',
    icon: 'account-group-outline',
    variant: 'default',
    chartData: [30, 45, 35, 50, 40, 60, 55],
  },
  {
    id: '2',
    title: 'Check-ins Today',
    value: '186',
    growth: '+8%',
    icon: 'account-check-outline',
    variant: 'default',
    chartData: [20, 30, 25, 40, 35, 45, 50],
  },
  {
    id: '3',
    title: 'Monthly Revenue',
    value: '₹8,75,000',
    growth: '+15%',
    icon: 'currency-inr',
    variant: 'highlight',
    chartData: [40, 50, 45, 60, 55, 70, 80],
  },
];

export const quickActions: QuickAction[] = [
  { id: '1', title: 'Add Member', icon: 'account-plus' },
  { id: '2', title: 'Record Payment', icon: 'cash-plus' },
  { id: '3', title: 'Mark Attendance', icon: 'calendar-check' },
  { id: '4', title: 'Create Membership', icon: 'card-account-details' },
  { id: '5', title: 'Send Notification', icon: 'bell-outline' },
  { id: '6', title: 'Generate Report', icon: 'file-chart-outline' },
];

export const recentPayments: PaymentRecord[] = [
  {
    id: 'p1',
    name: 'Arjun Sharma',
    email: 'arjun@example.com',
    amount: '₹12,000',
    status: 'PAID',
    initials: 'AS',
  },
  {
    id: 'p2',
    name: 'Priya Kapoor',
    email: 'priya@example.com',
    amount: '₹1,500',
    status: 'PENDING',
    initials: 'PK',
  },
];

export const alerts: AlertItem[] = [
  {
    id: 'a1',
    title: 'Attention Required',
    description: '21 memberships expiring this week. 12 pending payments.',
  },
];
