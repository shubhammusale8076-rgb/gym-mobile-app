import React, { memo } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { PaymentStatus } from '@/data/dashboardData';

interface PaymentListItemProps {
  initials: string;
  name: string;
  email: string;
  amount: string;
  status: PaymentStatus;
}

const PaymentListItem = ({ initials, name, email, amount, status }: PaymentListItemProps) => {
  const getStatusConfig = () => {
    switch (status) {
      case 'PAID':
        return { container: 'bg-success-bg', text: 'text-success-text', label: 'PAID' };
      case 'PENDING':
        return { container: 'bg-warning-bg', text: 'text-warning-text', label: 'PENDING' };
      case 'FAILED':
        return { container: 'bg-danger-bg', text: 'text-danger-text', label: 'FAILED' };
      default:
        return { container: 'bg-surface-container', text: 'text-on-surface-variant', label: status };
    }
  };

  const statusConfig = getStatusConfig();

  return (
    <TouchableOpacity
      activeOpacity={0.7}
      className="flex-row items-center justify-between py-4 border-b border-outline-variant/50"
      accessibilityRole="none"
    >
      <View className="flex-row items-center flex-1">
        <View className="size-12 rounded-full bg-surface-container items-center justify-center mr-3">
          <Text className="text-base font-sans-bold text-primary">{initials}</Text>
        </View>
        <View className="flex-1">
          <Text className="text-base font-sans-bold text-on-surface" numberOfLines={1}>
            {name}
          </Text>
          <Text className="text-sm font-sans-medium text-on-surface-variant" numberOfLines={1}>
            {email}
          </Text>
        </View>
      </View>

      <View className="items-end ml-4">
        <Text className="text-base font-sans-bold text-on-surface">{amount}</Text>
        <View className={`mt-1 px-3 py-1 rounded-full ${statusConfig.container}`}>
          <Text className={`text-[10px] font-sans-bold ${statusConfig.text}`}>
            {statusConfig.label}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default memo(PaymentListItem);
