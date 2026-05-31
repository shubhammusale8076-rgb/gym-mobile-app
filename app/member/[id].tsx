import React, { useMemo } from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import { useLocalSearchParams, useRouter, Stack } from 'expo-router';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { members } from '@/constants/data';
import { shadows } from '@/constants/shadows';
import MemberProfileCard from '@/components/member/MemberProfileCard';
import MemberStatCard from '@/components/member/MemberStatCard';
import MemberActionButton from '@/components/member/MemberActionButton';
import "@/global.css";


const MemberDetails = () => {
  const { id } = useLocalSearchParams();
  const router = useRouter();

  const member = useMemo(() => {
    return members.find((m) => m.id === id);
  }, [id]);

  if (!member) {
    return (
      <View className="flex-1 items-center justify-center bg-surface">
        <Text className="text-on-surface-variant font-sans-medium">Member not found</Text>
        <TouchableOpacity onPress={() => router.back()} className="mt-4">
          <Text className="text-primary font-sans-bold">Go Back</Text>
        </TouchableOpacity>
      </View>
    );
  }

  const SectionHeader = ({ title, action }: { title: string; action?: string }) => (
    <View className="flex-row justify-between items-center px-6 mt-8 mb-4">
      <Text className="text-xl font-sans-bold text-on-surface">{title}</Text>
      {action && (
        <TouchableOpacity>
          <Text 
            className="bg-surface-lowest  px-4 py-2 rounded-full text-primary font-sans-bold text-md tracking-tight"
            style={shadows.card}
          >
            {action}
          </Text>
        </TouchableOpacity>
      )}
    </View>
  );

  return (
    <View className="flex-1 bg-surface">
      <Stack.Screen
        options={{
          headerShown: false,
        }}
      />
      
      <View className="flex-row justify-between items-center px-6 pt-14 pb-2">
        <TouchableOpacity 
          onPress={() => router.back()}
          className="size-11 items-center justify-center rounded-2xl bg-surface-lowest"
          style={shadows.card}
        >
          <MaterialCommunityIcons name="arrow-left" size={24} color="#1d1b1e" />
        </TouchableOpacity>
        <Text className="text-sm font-sans-bold text-on-surface-variant uppercase tracking-[2px]">
          MEMBER PROFILE
        </Text>
        <TouchableOpacity 
          className="size-11 items-center justify-center rounded-2xl bg-surface-lowest"
          style={shadows.card}
        >
          <MaterialCommunityIcons name="dots-horizontal" size={24} color="#1d1b1e" />
        </TouchableOpacity>
      </View>

      <ScrollView 
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 100 }}
      >
        <MemberProfileCard member={member} />

        {/* Quick Actions */}
        <ScrollView 
          horizontal 
          showsHorizontalScrollIndicator={false} 
          contentContainerStyle={{ paddingHorizontal: 24 }}
          className="mb-8"
        >
          <MemberActionButton label="Call Member" icon="phone" variant="secondary" onPress={() => {}} />
          <MemberActionButton label="Send Message" icon="message-text" onPress={() => {}} />
          <MemberActionButton label="Renew Plan" icon="refresh" variant="primary" onPress={() => {}} />
          <MemberActionButton label="Attendance" icon="calendar-check" onPress={() => {}} />
        </ScrollView>

        {/* Stats Row */}
        <View className="flex-row px-6 gap-4">
          <MemberStatCard 
            label="Attendance" 
            value={`${member.attendancePercentage || 0}%`} 
            icon="calendar-check" 
            color="#5e17eb" 
          />
          <MemberStatCard 
            label="Workouts" 
            value={member.workoutCount || 0} 
            icon="dumbbell" 
            color="#eb5e17" 
          />
          <MemberStatCard 
            label="Streak" 
            value={`${member.streak || 0} Days`} 
            icon="fire" 
            color="#eb175e" 
          />
        </View>

        {/* Membership Details */}
        <SectionHeader title="Membership" />
        <View className="px-6">
          <View 
            className="bg-[#121212] p-6 rounded-4xl overflow-hidden"
            style={shadows.card}
          >
             {/* Background Decoration */}
            <View className="absolute -top-10 -right-10 size-45 rounded-full bg-primary/70" />
            
            <View className="flex-row justify-between items-start mb-6">
              <View>
                <Text className="text-surface/60 text-[10px] font-sans-bold uppercase tracking-widest mb-1.5">
                  CURRENT PLAN
                </Text>
                <View className="flex-row items-center mt-1">
                  <Text className="text-white text-2xl font-sans-bold">
                    {member.membershipPlan || member.tier}
                  </Text>
                  <MaterialCommunityIcons name="check-decagram" size={20} color="#FFD700" style={{ marginLeft: 6 }} />
                </View>
              </View>
              <View className="bg-white/30 p-2 rounded-xl">
                 <MaterialCommunityIcons name="card-account-details-outline" size={24} color="white" />
              </View>
            </View>

            <Text className="text-surface/80 text-sm font-sans-medium mb-8">
              Renews automatically on {new Date(member.renewalDate).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
            </Text>

            <View className="flex-row justify-between items-end">
              <View>
                <Text className="text-surface/80 text-[10px] font-sans-bold uppercase tracking-widest">
                  MONTHLY PRICE
                </Text>
                <Text className="text-white text-3xl font-sans-bold mt-2">
                   ₹{member.membershipPrice?.toLocaleString() || '0'}<Text className="text-lg font-sans-medium text-surface/40">/mo</Text>
                </Text>
              </View>
              <View className="bg-primary px-4 py-2 rounded-xl">
                <Text className="text-white font-sans-bold text-sm uppercase">{member.status}</Text>
              </View>
            </View>
          </View>
        </View>

        {/* Fitness Journey */}
        <SectionHeader title="Fitness Journey" action="View All" />
        <View className="px-6">
          <View className="bg-surface-lowest p-6 rounded-4xl border border-primary-hover" style={shadows.card}>
            {member.journey?.map((event, index) => (
              <View key={event.id} className="flex-row mb-6 last:mb-0">
                <View className="items-center mr-4">
                  <View className={`size-10 rounded-full items-center justify-center ${index === 0 ? 'bg-primary' : 'bg-primary-hover'}`}>
                    <MaterialCommunityIcons 
                      name={(event.icon as any) || 'calendar'} 
                      size={18} 
                      color={index === 0 ? '#ffffff' : '#661493'} 
                    />
                  </View>
                  {index !== (member.journey?.length || 0) - 1 && (
                    <View className="w-px h-12 bg-outline-variant my-1" />
                  )}
                </View>
                <View className="flex-1">
                  <Text className="text-[10px] font-sans-bold text-on-surface-variant uppercase tracking-widest">
                    {new Date(event.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                  </Text>
                  <Text className="text-lg font-sans-bold text-on-surface mt-1">
                    {event.title}
                  </Text>
                  <Text className="text-sm font-sans-medium text-on-surface-variant mt-1 leading-5">
                    {event.description}
                  </Text>
                </View>
              </View>
            ))}
          </View>
        </View>

        {/* Progress Section */}
        <SectionHeader title="Health Progress" />
        <View className="px-6">
           <View className="bg-surface-lowest p-6 rounded-4xl" style={shadows.card}>
              <View className="flex-row justify-between items-end mb-6">
                 <View>
                    <Text className="text-on-surface-variant text-[10px] font-sans-bold uppercase tracking-wider mb-2">WEIGHT GOAL</Text>
                    <View className="flex-row items-baseline">
                       <Text className="text-4xl font-sans-bold text-primary">{member.weight ?? '--'}kg</Text>
                       <Text className="text-on-surface-variant font-sans-medium ml-2">/ {member.targetWeight ?? '--'}kg</Text>
                    </View>
                 </View>
                 <View className="items-end">
                    <Text className="text-primary font-sans-bold mb-1">{(member.workoutCompletion || 0)}%</Text>
                    <Text className="text-on-surface-variant text-[10px] font-sans-bold uppercase tracking-wider text-right">COMPLETION</Text>
                 </View>
              </View>

              {/* Progress Bar */}
              <View className="h-2 w-full bg-surface-container-high rounded-full overflow-hidden mb-8">
                 <View 
                  className="h-full bg-primary" 
                  style={{ width: `${(member.workoutCompletion || 0)}%` }}
                 />
              </View>

              <View className="flex-row justify-between pt-6 border-t border-outline-variant">
                 <View className="items-center flex-1 border-r border-outline-variant">
                    <Text className="text-on-surface-variant text-[10px] font-sans-bold uppercase tracking-wider mb-1 text-center">BODY FAT</Text>
                    <Text className="text-xl font-sans-bold text-on-surface">{member.bodyFat}%</Text>
                 </View>
                 <View className="items-center flex-1">
                    <Text className="text-on-surface-variant text-[10px] font-sans-bold uppercase tracking-wider mb-1 text-center">BMI INDEX</Text>
                    <Text className="text-xl font-sans-bold text-on-surface">{member.bmi}</Text>
                 </View>
              </View>
           </View>
        </View>

        {/* Recent Payments */}
        <SectionHeader title="Recent Payments" action="View History" />
        <View className="px-6">
          <View>
            {member.recentPayments?.map((payment) => (
              <View 
                key={payment.id} 
                className="flex-row items-center justify-between p-4 bg-surface-lowest rounded-3xl mb-2 last:mb-0"
                style={shadows.card}
              >
                <View className="flex-row items-center">
                  <View className="size-12 bg-primary-hover rounded-2xl items-center justify-center">
                    <MaterialCommunityIcons 
                      name={payment.method === 'UPI' ? 'lightning-bolt' : 'credit-card-outline'} 
                      size={24} 
                      color="#ffffff" 
                    />
                  </View>
                  <View className="ml-4">
                    <Text className="text-base font-sans-bold text-on-surface">Monthly Dues</Text>
                    <Text className="text-xs font-sans-medium text-on-surface-variant mt-0.5">
                      {new Date(payment.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })} • {payment.method}
                    </Text>
                  </View>
                </View>
                <View className="items-end">
                   <Text className="text-base font-sans-bold text-primary">₹{payment.amount.toLocaleString()}</Text>
                   <View className="flex-row items-center mt-1">
                      <View className={`size-1.5 rounded-full mr-1 ${payment.status === 'PAID' ? 'bg-success' : 'bg-danger'}`} />
                      <Text className={`text-[10px] font-sans-bold uppercase ${payment.status === 'PAID' ? 'text-success' : 'text-danger'}`}>
                        {payment.status}
                      </Text>
                   </View>
                </View>
              </View>
            ))}
          </View>
        </View>

        {/* Personal Details */}
        <SectionHeader title="Personal Information" />
        <View className="px-6 pb-20">
           <View className="bg-surface-lowest p-6 rounded-4xl" style={shadows.card}>
              <DetailRow label="Phone" value={member.phone} icon="phone-outline" />
              <DetailRow label="Email" value={member.email} icon="email-outline" />
              <DetailRow label="Gender" value={member.gender || 'Not set'} icon="account-outline" />
              <DetailRow label="DOB" value={member.dob || 'Not set'} icon="calendar-outline" />
              <DetailRow label="Goal" value={member.goal || 'Not set'} icon="bullseye-arrow" />
              <DetailRow label="Emergency" value={member.emergencyContact || 'Not set'} icon="account-alert-outline" isLast />
           </View>
        </View>
      </ScrollView>
    </View>
  );
};

const DetailRow = ({ label, value, icon, isLast }: { label: string; value: string; icon: any; isLast?: boolean }) => (
  <View className={`flex-row items-center py-4 ${!isLast ? 'border-b border-outline-variant/30' : ''}`}>
    <View className="size-10 bg-primary-hover rounded-xl items-center justify-center mr-4">
      <MaterialCommunityIcons name={icon} size={20} color="text-on-surface" />
    </View>
    <View>
      <Text className="text-[10px] font-sans-bold text-on-surface-variant uppercase tracking-wider">{label}</Text>
      <Text className="text-base font-sans-medium text-on-surface mt-1">{value}</Text>
    </View>
  </View>
);

export default MemberDetails;
