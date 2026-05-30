import React, { useCallback } from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Platform
} from 'react-native';
import { SafeAreaView as RNSafeAreaView } from 'react-native-safe-area-context';
import { styled } from 'nativewind';
import "@/global.css";
import { shadows } from '@/constants/shadows';

import {
  kpis,
  quickActions,
  recentPayments,
  alerts
} from '@/data/dashboardData';

import KpiCard from '@/components/dashboard/KpiCard';
import QuickActionButton from '@/components/dashboard/QuickActionButton';
import PaymentListItem from '@/components/dashboard/PaymentListItem';
import AlertCard from '@/components/dashboard/AlertCard';
import AppHeader from '@/components/appHeader/AppHeader';

const SafeAreaView = styled(RNSafeAreaView);

export default function APP() {

  const renderKpis = useCallback(() => (
    <View className="flex-row flex-wrap justify-between">
      <View
        className="flex-row w-full justify-between gap-4 mb-4 "
        style={shadows.card}
      >
        {kpis.slice(0, 2).map((kpi) => (
          <KpiCard key={kpi.id} {...kpi} />
        ))}
      </View>

      <View className="w-50">
        {kpis.slice(2, 3).map((kpi) => (
          <KpiCard key={kpi.id} {...kpi} />
        ))}
      </View>
    </View>
  ), []);

  const renderQuickActions = useCallback(() => (
    <View className="mt-8">
      <Text className="section-title mb-4">Quick Actions</Text>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ paddingRight: 20 }}
      >
        {quickActions.map((action, index) => (
          <QuickActionButton
            key={action.id}
            {...action}
            variant={index === 0 ? 'primary' : 'secondary'}
          />
        ))}
      </ScrollView>
    </View>
  ), []);

  const renderRecentPayments = useCallback(() => (
    <View className="mt-8 card p-5">
      <View className="flex-row items-center justify-between mb-4">
        <Text className="text-xl font-sans-bold text-on-surface">Recent Payments</Text>
        <TouchableOpacity accessibilityRole="link" accessibilityLabel="View all payments">
          <Text className="text-primary font-sans-bold text-sm">View All</Text>
        </TouchableOpacity>
      </View>

      {recentPayments.map((payment) => (
        <PaymentListItem key={payment.id} {...payment} />
      ))}
    </View>
  ), []);

  const renderAlerts = useCallback(() => (
    <View className="mt-8 mb-4">
      {alerts.map((alert) => (
        <AlertCard key={alert.id} {...alert} />
      ))}
    </View>
  ), []);

  return (
    <SafeAreaView
      className="screen"
      edges={['top']}
    >
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingHorizontal: 24,
          paddingTop: 24,
          paddingBottom: Platform.OS === 'ios' ? 100 : 80
        }}
      >
        <AppHeader
          title="Today's Overview"
          subtitle="Welcome back,"
          userName="Shubham"
        />
        {renderKpis()}
        {renderQuickActions()}
        {renderRecentPayments()}
        {renderAlerts()}
      </ScrollView>
    </SafeAreaView>
  );
}