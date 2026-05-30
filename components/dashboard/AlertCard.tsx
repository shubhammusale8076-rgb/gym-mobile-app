import React, { memo } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { colors } from '@/constants/theme';

interface AlertCardProps {
  title: string;
  description: string;
  onPress?: () => void;
}

const AlertCard = ({ title, description, onPress }: AlertCardProps) => {
  return (
    <View className="card-elevated border-l-4 border-destructive bg-white">
      <View className="flex-row items-start">
        <View className="bg-danger-bg p-2 rounded-xl mr-4">
          <MaterialCommunityIcons name="alert-outline" size={24} color={colors.destructive} />
        </View>
        <View className="flex-1">
          <Text className="text-lg font-sans-bold text-on-surface">{title}</Text>
          <Text className="text-sm font-sans-medium text-on-surface-variant mt-1 leading-5">
            {description}
          </Text>
          <TouchableOpacity 
            onPress={onPress}
            activeOpacity={0.7}
            className="mt-3 flex-row items-center"
            accessibilityRole="link"
            accessibilityLabel="Review Alerts button"
          >
            <Text className="text-primary font-sans-bold text-sm">Review Alerts →</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default memo(AlertCard);
