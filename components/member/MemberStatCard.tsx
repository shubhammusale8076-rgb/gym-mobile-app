import React from 'react';
import { View, Text } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { shadows } from '@/constants/shadows';
import "@/global.css";

interface MemberStatCardProps {
  label: string;
  value: string | number;
  icon: keyof typeof MaterialCommunityIcons.glyphMap;
  color: string;
}

const MemberStatCard = ({ label, value, icon, color }: MemberStatCardProps) => {
  return (
    <View 
      className="bg-surface-lowest p-4 rounded-3xl flex-1 items-start justify-between min-h-25"
      style={shadows.card}
    >
      <View 
        className="p-2 rounded-xl mb-3"
        style={{ backgroundColor: `${color}15` }}
      >
        <MaterialCommunityIcons name={icon} size={20} color={color} />
      </View>
      <View className="mt-1.5">
        <Text className="text-on-surface-variant text-[10px] font-sans-bold uppercase tracking-wider">
          {label}
        </Text>
        <Text className="text-primary text-lg font-sans-bold mt-1.5">
          {value}
        </Text>
      </View>
    </View>
  );
};

export default React.memo(MemberStatCard);
