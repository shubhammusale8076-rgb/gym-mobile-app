import React from 'react';
import { ScrollView, TouchableOpacity, Text, View } from 'react-native';
import "@/global.css";

interface MemberFiltersProps {
  options: MemberFilterOption[];
  selectedFilter: MemberFilter;
  onSelect: (filter: MemberFilter) => void;
}

const MemberFilters = ({ options, selectedFilter, onSelect }: MemberFiltersProps) => {
  return (
    <View className="mb-6">
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
      >
        {options.map((option) => {
          const isSelected = selectedFilter === option.value;
          return (
            <TouchableOpacity
              key={option.value}
              onPress={() => onSelect(option.value)}
              className={`mr-3 px-6 py-2.5 rounded-full ${
                isSelected ? 'bg-primary' : 'bg-surface-container'
              }`}
              accessibilityRole="button"
              accessibilityLabel={`Filter by ${option.label}`}
              accessibilityState={{ selected: isSelected }}
            >
              <Text
                className={`text-sm font-sans-bold ${
                  isSelected ? 'text-white' : 'text-on-surface-variant'
                }`}
              >
                {option.label}
              </Text>
            </TouchableOpacity>
          );
        })}
      </ScrollView>
    </View>
  );
};

export default React.memo(MemberFilters);
