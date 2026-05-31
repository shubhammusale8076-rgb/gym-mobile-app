import React from 'react';
import { View, Text, Image } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import "@/global.css";
import { shadows } from '@/constants/shadows';

interface MemberProfileCardProps {
  member: Member;
}

const MemberProfileCard = ({ member }: MemberProfileCardProps) => {
  const getStatusStyles = (status: MemberStatus) => {
    switch (status) {
      case 'EXPIRING':
        return 'bg-warning-bg text-warning-text';
      case 'DUE':
        return 'bg-danger-bg text-danger-text';
      case 'INACTIVE':
        return 'bg-outline-variant text-on-surface-variant';
      default:
        return 'bg-success-bg text-success-text';
    }
  };

  return (
    <View className="items-center px-6 pt-2 pb-8">
      <View className="relative" style={shadows.card}>
        {member.avatar ? (
          <Image
            source={{ uri: member.avatar }}
            className="size-44 rounded-[99px] border border-primary"
            resizeMode="cover"
          />
        ) : (
          <View className="size-44 rounded-[99px] bg-primary-hover border border-primary items-center justify-center">
            <Text className="text-5xl font-sans-bold text-primary">
              {member.initials || member.name.substring(0, 2).toUpperCase()}
            </Text>
          </View>
        )}
        <View className={`absolute bottom-2 -right-2 px-3 py-1.5 rounded-full border-2 border-surface-lowest ${getStatusStyles(member.status)}`}>
          <Text className="text-[12px] font-sans-bold uppercase">
            {member.status}
          </Text>
        </View>
      </View>

      <View className="items-center mt-6">
        <Text className="text-3xl font-sans-bold text-primary">
          {member.name}
        </Text>
        <View className="flex-row items-center mt-4 bg-surface-lowest px-4 py-2 rounded-full" style={shadows.card}>
          <MaterialCommunityIcons name="star" size={14} color="#5e17eb" />
          <Text className="ml-1.5 text-[14px] font-sans-bold text-primary">
            {member.tier} Member
          </Text>
        </View>
        
        <View className="flex gap-6 items-center mt-8 opacity-80">
          <View className="flex-row items-center">
            <MaterialCommunityIcons name="map-marker" size={14} color="#6f6672" />
            <Text className="ml-1 text-[16px] font-sans-medium text-on-surface">
              {member.address || 'Location not set'}
            </Text>
          </View>

          <View className="flex-row items-center">
            <MaterialCommunityIcons name="calendar" size={14} color="#6f6672" />
            <Text className="ml-1 text-[16px] font-sans-medium text-on-surface">
              Joined {new Date(member.joinDate).toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default React.memo(MemberProfileCard);
