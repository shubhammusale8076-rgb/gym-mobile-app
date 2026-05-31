declare global {

    interface AppTab {
        name: string;
        title: string;
        icon: ImageSourcePropType;
    }

    type AppHeaderProps = {
        title: string;
        subtitle?: string;
        userName?: string;
    };


    type TabIconProps = {
        focused: boolean;
        icon: TabIconType;
    };


    type DashboardKpi = {
        id: string;
        title: string;
        value: string;
        growth: string;
        icon: string;
        positive: boolean;
    };

    type QuickAction = {
        id: string;
        title: string;
        icon: string;
    };

    type PaymentRecord = {
        id: string;
        memberName: string;
        amount: number;
        membershipPlan: string;
        status: PaymentStatus;
        paymentDate: string;
    };

    // ------------------------
    // Members
    // ------------------------

    type MembershipTier =
        | "Platinum"
        | "Gold"
        | "Premium"
        | "Standard";

    type MemberStatus =
        | "ACTIVE"
        | "EXPIRING"
        | "DUE"
        | "INACTIVE";

    type MemberPayment = {
        id: string;
        date: string;
        amount: number;
        status: "PAID" | "PENDING" | "FAILED";
        method: string;
    };

    type JourneyEvent = {
        id: string;
        date: string;
        title: string;
        description: string;
        icon?: string;
    };

    type Member = {
        id: string;
        name: string;
        email: string;

        avatar?: string;
        initials?: string;

        tier: MembershipTier;
        status: MemberStatus;

        renewalDate: string;
        joinDate: string;
        phone: string;

        // Extended fields for details screen
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
    };

    type MemberFilter =
        | "ALL"
        | "EXPIRING"
        | "DUE"
        | "INACTIVE";

    type MemberFilterOption = {
        label: string; 
        value: MemberFilter;
    };

}

export { };