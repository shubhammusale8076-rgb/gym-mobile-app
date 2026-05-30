import { TAB_ICONS } from "./icon";

export const tabs:AppTab[] = [ 
    { name: "index", title: "Home", icon: TAB_ICONS.HOME, },
    { name: "member", title: "Members", icon: TAB_ICONS.MEMBERS, }, 
    { name: "payment", title: "Payments", icon: TAB_ICONS.PAYMENTS, }, 
    { name: "attendance", title: "Attendance", icon: TAB_ICONS.ATTENDANCE, }, 
    { name: "setting", title: "Setting", icon: TAB_ICONS.Setting, }, 
];  

export const dashboardKpis: DashboardKpi[] = [
    {
        id: "1",
        title: "Total Members",
        value: "1,248",
        growth: "+12%",
        icon: "account-group-outline",
        positive: true,
    },
    {
        id: "2",
        title: "Check-ins Today",
        value: "186",
        growth: "+8%",
        icon: "account-check-outline",
        positive: true,
    },
    {
        id: "3",
        title: "Monthly Revenue",
        value: "₹8,75,000",
        growth: "+15%",
        icon: "currency-inr",
        positive: true,
    },
];

export const quickActions: QuickAction[] = [
    {
        id: "1",
        title: "Add Member",
        icon: "account-plus",
    },
    {
        id: "2",
        title: "Record Payment",
        icon: "cash-plus",
    },
];

export const recentPayments: PaymentRecord[] = [
    {
        id: "P001",
        memberName: "Arjun Sharma",
        membershipPlan: "Premium Membership",
        amount: 12000,
        status: "PAID",
        paymentDate: "2026-05-27",
    },
    {
        id: "P002",
        memberName: "Priya Kapoor",
        membershipPlan: "Standard Membership",
        amount: 1500,
        status: "PENDING",
        paymentDate: "2026-05-26",
    },
    {
        id: "P003",
        memberName: "Rahul Verma",
        membershipPlan: "Gold Membership",
        amount: 5000,
        status: "PAID",
        paymentDate: "2026-05-25",
    },
    {
        id: "P004",
        memberName: "Neha Singh",
        membershipPlan: "Personal Training",
        amount: 3500,
        status: "FAILED",
        paymentDate: "2026-05-25",
    },
];

export type MembershipTier =
  | "Platinum"
  | "Gold"
  | "Standard"
  | "Premium";

export type MemberStatus =
  | "ACTIVE"
  | "EXPIRING"
  | "DUE"
  | "INACTIVE";

export interface Member {
  id: string;
  name: string;
  email: string;
  avatar?: string;
  initials?: string;
  tier: MembershipTier;
  renewalDate: string;
  status: MemberStatus;
  phone: string;
  joinDate: string;
}

export const members: Member[] = [
  {
    id: "M001",
    name: "Sarah Jenkins",
    email: "sarah.j@example.com",
    avatar:
      "https://randomuser.me/api/portraits/women/44.jpg",
    tier: "Platinum",
    renewalDate: "2026-10-12",
    status: "ACTIVE",
    phone: "+91 9876543210",
    joinDate: "2025-01-10",
  },
  {
    id: "M002",
    name: "Marcus Chen",
    email: "m.chen@example.com",
    avatar:
      "https://randomuser.me/api/portraits/men/32.jpg",
    tier: "Standard",
    renewalDate: "2026-09-01",
    status: "DUE",
    phone: "+91 9876543211",
    joinDate: "2024-12-15",
  },
  {
    id: "M003",
    name: "Elena Davis",
    email: "elena.d@example.com",
    initials: "ED",
    tier: "Platinum",
    renewalDate: "2026-11-22",
    status: "ACTIVE",
    phone: "+91 9876543212",
    joinDate: "2025-03-05",
  },
  {
    id: "M004",
    name: "John Smith",
    email: "john.smith@example.com",
    avatar:
      "https://randomuser.me/api/portraits/men/12.jpg",
    tier: "Gold",
    renewalDate: "2026-06-15",
    status: "EXPIRING",
    phone: "+91 9876543213",
    joinDate: "2024-10-01",
  },
  {
    id: "M005",
    name: "Priya Sharma",
    email: "priya.sharma@example.com",
    avatar:
      "https://randomuser.me/api/portraits/women/68.jpg",
    tier: "Premium",
    renewalDate: "2026-05-28",
    status: "EXPIRING",
    phone: "+91 9876543214",
    joinDate: "2025-02-18",
  },
  {
    id: "M006",
    name: "Rahul Verma",
    email: "rahul.verma@example.com",
    initials: "RV",
    tier: "Standard",
    renewalDate: "2026-04-02",
    status: "INACTIVE",
    phone: "+91 9876543215",
    joinDate: "2024-08-12",
  },
  {
    id: "M007",
    name: "Emma Wilson",
    email: "emma.w@example.com",
    avatar:
      "https://randomuser.me/api/portraits/women/22.jpg",
    tier: "Gold",
    renewalDate: "2026-12-05",
    status: "ACTIVE",
    phone: "+91 9876543216",
    joinDate: "2025-04-10",
  },
  {
    id: "M008",
    name: "David Brown",
    email: "david.brown@example.com",
    avatar:
      "https://randomuser.me/api/portraits/men/56.jpg",
    tier: "Premium",
    renewalDate: "2026-07-18",
    status: "ACTIVE",
    phone: "+91 9876543217",
    joinDate: "2025-01-22",
  },
];

export const memberFilters = [
  {
    label: "ALL",
    value: "ALL",
  },
  {
    label: "EXPIRING",
    value: "EXPIRING",
  },
  {
    label: "DUE",
    value: "DUE",
  },
  {
    label: "INACTIVE",
    value: "INACTIVE",
  },
];