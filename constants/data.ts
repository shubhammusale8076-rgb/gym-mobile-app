import { TAB_ICONS } from "./icon";

export const tabs:AppTab[] = [ 
    { name: "index", title: "Home", icon: TAB_ICONS.HOME, },
    { name: "member", title: "Member", icon: TAB_ICONS.MEMBERS, }, 
    { name: "payment", title: "Payment", icon: TAB_ICONS.PAYMENTS, }, 
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
  
  // Extended fields
  attendancePercentage?: number;
  workoutCount?: number;
  streak?: number;
  membershipPlan?: string;
  membershipPrice?: number;
  gender?: "Male" | "Female" | "Other";
  dob?: string;
  emergencyContact?: string;
  goal?: string;
  weight?: number;
  targetWeight?: number;
  bodyFat?: number;
  bmi?: number;
  workoutCompletion?: number;
  address?: string;
  recentPayments?: MemberPayment[];
  journey?: JourneyEvent[];
}

export const members: Member[] = [
  {
    id: "M001",
    name: "Sarah Jenkins",
    email: "sarah.j@example.com",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
    tier: "Platinum",
    renewalDate: "2026-10-12",
    status: "ACTIVE",
    phone: "+91 9876543210",
    joinDate: "2025-01-10",
    attendancePercentage: 87,
    workoutCount: 124,
    streak: 21,
    membershipPlan: "Black Card",
    membershipPrice: 4250,
    gender: "Female",
    dob: "1995-06-15",
    emergencyContact: "+91 9988776655",
    goal: "Weight Loss & Toning",
    weight: 68,
    targetWeight: 62,
    bodyFat: 24,
    bmi: 22.5,
    workoutCompletion: 92,
    address: "123, Park Avenue, New York, NY",
    recentPayments: [
      { id: "RP001", date: "2026-05-15", amount: 4250, status: "PAID", method: "UPI" },
      { id: "RP002", date: "2026-04-15", amount: 4250, status: "PAID", method: "Card" },
      { id: "RP003", date: "2026-03-15", amount: 4250, status: "PAID", method: "UPI" },
    ],
    journey: [
      { id: "J001", date: "2026-05-10", title: "Upgraded to Black Card", description: "Transitions to premium membership with full gym access.", icon: "star" },
      { id: "J002", date: "2026-04-20", title: "Purchased PT Package", description: "12 Personal Training sessions with Coach Arjun.", icon: "account-star" },
      { id: "J003", date: "2025-01-10", title: "Joined the Gym", description: "Started the fitness journey with a Standard plan.", icon: "door-open" },
    ]
  },
  {
    id: "M002",
    name: "Marcus Chen",
    email: "m.chen@example.com",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
    tier: "Standard",
    renewalDate: "2026-09-01",
    status: "DUE",
    phone: "+91 9876543211",
    joinDate: "2024-12-15",
    attendancePercentage: 65,
    workoutCount: 88,
    streak: 5,
    membershipPlan: "Monthly Pass",
    membershipPrice: 2500,
    gender: "Male"
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
    attendancePercentage: 92,
    workoutCount: 156,
    streak: 34,
    membershipPlan: "Annual Elite",
    membershipPrice: 35000,
    gender: "Female"
  },
  {
    id: "M004",
    name: "John Smith",
    email: "john.smith@example.com",
    avatar: "https://randomuser.me/api/portraits/men/12.jpg",
    tier: "Gold",
    renewalDate: "2026-06-15",
    status: "EXPIRING",
    phone: "+91 9876543213",
    joinDate: "2024-10-01",
    attendancePercentage: 78,
    workoutCount: 95,
    streak: 12,
    membershipPlan: "Quarterly Pro",
    membershipPrice: 12000,
    gender: "Male"
  },
  {
    id: "M005",
    name: "Priya Sharma",
    email: "priya.sharma@example.com",
    avatar: "https://randomuser.me/api/portraits/women/68.jpg",
    tier: "Premium",
    renewalDate: "2026-05-28",
    status: "EXPIRING",
    phone: "+91 9876543214",
    joinDate: "2025-02-18",
    attendancePercentage: 81,
    workoutCount: 110,
    streak: 18,
    membershipPlan: "Monthly Premium",
    membershipPrice: 3500,
    gender: "Female"
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
    attendancePercentage: 45,
    workoutCount: 42,
    streak: 0,
    membershipPlan: "Monthly Standard",
    membershipPrice: 1500,
    gender: "Male"
  },
  {
    id: "M007",
    name: "Emma Wilson",
    email: "emma.w@example.com",
    avatar: "https://randomuser.me/api/portraits/women/22.jpg",
    tier: "Gold",
    renewalDate: "2026-12-05",
    status: "ACTIVE",
    phone: "+91 9876543216",
    joinDate: "2025-04-10",
    attendancePercentage: 89,
    workoutCount: 145,
    streak: 25,
    membershipPlan: "Annual Gold",
    membershipPrice: 28000,
    gender: "Female"
  },
  {
    id: "M008",
    name: "David Brown",
    email: "david.brown@example.com",
    avatar: "https://randomuser.me/api/portraits/men/56.jpg",
    tier: "Premium",
    renewalDate: "2026-07-18",
    status: "ACTIVE",
    phone: "+91 9876543217",
    joinDate: "2025-01-22",
    attendancePercentage: 83,
    workoutCount: 118,
    streak: 15,
    membershipPlan: "Half-Yearly Premium",
    membershipPrice: 18000,
    gender: "Male"
  },
];

export const memberFilters: MemberFilterOption[] = [
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