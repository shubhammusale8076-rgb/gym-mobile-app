import React, { memo } from 'react';
import { View, Text } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { colors } from '@/constants/theme';

interface KpiCardProps {
  title: string;
  value: string;
  growth: string;
  icon: keyof typeof MaterialCommunityIcons.glyphMap;
  variant?: 'default' | 'highlight';
  chartData?: number[];
}

const KpiCard = ({ title, value, growth, icon, variant = 'default', chartData = [] }: KpiCardProps) => {
  const isHighlight = variant === 'highlight';

  return (
    <View 
      className={`stat-card flex-1 min-h-40 relative overflow-hidden ${isHighlight ? 'bg-primary' : 'bg-surface-lowest'}`}
      accessibilityRole="summary"
      accessibilityLabel={`${title} card, value is ${value}, growth is ${growth}`}
    >
      <View className="flex-row items-start justify-between mb-2">
        <View className={`p-2 rounded-2xl ${isHighlight ? 'bg-white/20' : 'bg-surface-container'}`}>
          <MaterialCommunityIcons 
            name={icon} 
            size={24} 
            color={isHighlight ? 'white' : colors.primary} 
          />
        </View>
        <View className={`flex-row items-center px-2 py-1 rounded-full ${isHighlight ? 'bg-white/20' : 'bg-success-bg'}`}>
          <MaterialCommunityIcons 
            name="arrow-up" 
            size={12} 
            color={isHighlight ? 'white' : colors.success} 
          />
          <Text className={`ml-1 text-[10px] font-sans-bold ${isHighlight ? 'text-white' : 'text-success-text'}`}>
            {growth}
          </Text>
        </View>
      </View>

      <Text className={`stat-label ${isHighlight ? 'text-surface' : 'text-on-surface'}`}>
        {title}
      </Text>
      <Text className={`stat-value mt-1 ${isHighlight ? 'text-white' : 'text-primary'}`}>
        {value}
      </Text>

      {/* Mini Bar Chart Rendering */}
      <View className="flex-row items-end justify-between mt-4 h-8 px-1">
        {chartData.map((val, idx) => (
          <View
            key={idx}
            className={`w-3 rounded-full ${
              isHighlight 
                ? (idx === chartData.length - 1 ? 'bg-white h-full' : 'bg-white/30') 
                : (idx === chartData.length - 1 ? 'bg-primary h-full' : 'bg-surface-container-high')
            }`}
            style={{ height: `${(val / Math.max(...chartData)) * 100}%` }}
          />
        ))}
      </View>
    </View>
  );
};

export default memo(KpiCard);
