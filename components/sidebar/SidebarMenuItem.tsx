import React from 'react';
import { TouchableOpacity, Text, View } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import "@/global.css";
import { shadows } from '@/constants/shadows';

interface SidebarMenuItemProps {
  icon: React.ComponentProps<typeof MaterialCommunityIcons>["name"];
  label: string;
  onPress: () => void;
  isDanger?: boolean;
}

const SidebarMenuItem = ({ icon, label, onPress, isDanger = false }: SidebarMenuItemProps) => {
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      onPress={onPress}
      className={`flex-row items-center px-6 py-4 rounded-2xl  
        ${isDanger ? 'bg-danger-bg/50' : 'active:bg-surface-lowest'}`}
      accessibilityRole="button"
      accessibilityLabel={label}
    >
      <View className={`size-10 rounded-full items-center justify-center ${isDanger ? 'bg-danger-bg' : 'bg-surface-lowest'
        }`}
        style={shadows.card}>
        <MaterialCommunityIcons
          name={icon}
          size={22}
          color={isDanger ? '#b42318' : '#661493'}
        />
      </View>
      <Text className={`ml-4 text-base font-sans-semibold 
      ${isDanger ? 'text-danger-text' : 'text-on-surface'}`}>
        {label}
      </Text>
      {!isDanger && (
        <View className="ml-auto">
          <MaterialCommunityIcons name="chevron-right" size={20} color="#6f6672" />
        </View>
      )}
    </TouchableOpacity>
  );
};

export default React.memo(SidebarMenuItem);
