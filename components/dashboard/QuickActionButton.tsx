import React, { memo } from 'react';
import { TouchableOpacity, Text, View } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { colors } from '@/constants/theme';

interface QuickActionButtonProps {
  title: string;
  icon: keyof typeof MaterialCommunityIcons.glyphMap;
  onPress?: () => void;
  variant?: 'primary' | 'secondary';
}

const QuickActionButton = ({ title, icon, onPress, variant = 'secondary' }: QuickActionButtonProps) => {
  const isPrimary = variant === 'primary';

  return (
    <TouchableOpacity
      activeOpacity={0.7}
      onPress={onPress}
      className={`flex-row items-center px-6 py-4 rounded-full mr-3 ${isPrimary ? 'bg-primary' : 'bg-surface-lowest border border-outline-variant'}`}
      accessibilityRole="button"
      accessibilityLabel={`Quick action: ${title}`}
    >
      <MaterialCommunityIcons 
        name={icon} 
        size={20} 
        color={isPrimary ? 'white' : colors.primary} 
      />
      <Text className={`ml-2 text-sm font-sans-bold ${isPrimary ? 'text-white' : 'text-primary'}`}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default memo(QuickActionButton);
