import React from 'react';
import { View, TextInput } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import "@/global.css";

interface MemberSearchBarProps {
  value: string;
  onChangeText: (text: string) => void;
}

const MemberSearchBar = ({ value, onChangeText }: MemberSearchBarProps) => {
  return (
    <View className=" mb-6">
      <View className="flex-row items-center border border-outline-variant bg-surface-lowest rounded-full px-5 py-3">
        <MaterialCommunityIcons name="magnify" size={24} color="#6f6672" />
        <TextInput
          className="flex-1 ml-3 text-base font-sans-medium text-on-surface"
          placeholder="Search members..."
          placeholderTextColor="#6f6672"
          value={value}
          onChangeText={onChangeText}
          accessibilityRole="search"
          accessibilityLabel="Search members"
        />
      </View>
    </View>
  );
};

export default React.memo(MemberSearchBar);
