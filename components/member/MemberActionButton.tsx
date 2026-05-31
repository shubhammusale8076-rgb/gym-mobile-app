import React from 'react';
import { TouchableOpacity, Text, View } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import "@/global.css";
import { shadows } from '@/constants/shadows';

interface MemberActionButtonProps {
  label: string;
  icon: keyof typeof MaterialCommunityIcons.glyphMap;
  onPress: () => void;
  variant?: 'primary' | 'secondary' | 'outline';
}

const MemberActionButton = ({ label, icon, onPress, variant = 'secondary' }: MemberActionButtonProps) => {
  const getVariantStyles = () => {
    switch (variant) {
      case 'primary':
        return {
          container: 'bg-primary',
          text: 'text-surface',
          icon: '#ffffff' as const,
        };
      case 'secondary':
        return {
          container: 'bg-surface-lowest border border-primary-hover',
          text: 'text-on-surface',
          icon: '#4a444d' as const,
        };
      default:
        return {
          container: 'bg-surface-container-low border border-primary',
          text: 'text-on-surface',
          icon: '#6f6672' as const,
        };
    }
  };

  const styles = getVariantStyles();

  return (
    <TouchableOpacity
      activeOpacity={0.7}
      onPress={onPress}
      className={`flex-row items-center justify-center py-3 px-4 rounded-2xl ${styles.container} mr-3`}
      accessibilityRole="button"
      accessibilityLabel={label}
    >
      <MaterialCommunityIcons name={icon} size={20} color={styles.icon} />
      <Text className={`ml-2 font-sans-bold text-sm ${styles.text}`}>
        {label}
      </Text>
    </TouchableOpacity>
  );
};

export default React.memo(MemberActionButton);
