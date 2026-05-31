import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { formatSubscriptionDateTime } from '@/lib/utils';
import "@/global.css";
import { shadows } from '@/constants/shadows';

interface MemberCardProps {
  member: Member;
  onPress?: () => void;
}

const MemberCard = ({ member, onPress }: MemberCardProps) => {
  const getStatusStyles = (status: MemberStatus) => {
    switch (status) {
      case 'EXPIRING':
        return {
          date: 'text-warning-text',
          badge: 'bg-warning-bg',
          badgeText: 'text-warning-text',
        };
      case 'DUE':
        return {
          date: 'text-danger-text',
          badge: 'bg-danger-bg',
          badgeText: 'text-danger-text',
        };
      case 'INACTIVE':
        return {
          date: 'text-on-surface-variant',
          badge: 'bg-outline-variant',
          badgeText: 'text-on-surface-variant',
        };
      default:
        return {
          date: 'text-primary',
          badge: 'bg-success-bg',
          badgeText: 'text-success-text',
        };
    }
  };

  const styles = getStatusStyles(member.status);

  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={onPress}
      className={`mb-6 p-6 rounded-4xl border border-transparent bg-surface-lowest`}
      style={shadows.card}
      accessibilityRole="button"
      accessibilityLabel={`View details for ${member.name}`}
    >
      <View className="flex-row justify-between items-start">
        <View className="flex-row items-center flex-1">
          {member.avatar ? (
            <Image
              source={{ uri: member.avatar }}
              className="size-16 rounded-full"
              resizeMode="cover"
            />
          ) : (
            <View className="size-16 rounded-full bg-primary/10 items-center justify-center">
              <Text className="text-xl font-sans-bold text-primary">
                {member.initials || member.name.substring(0, 2).toUpperCase()}
              </Text>
            </View>
          )}

          <View className="ml-4 flex-1">
            <Text className="text-xl font-sans-bold text-primary mb-1">
              {member.name}
            </Text>
            <Text className="text-sm font-sans-medium text-on-surface-variant">
              {member.email.toUpperCase()}
            </Text>
          </View>
        </View>

        <TouchableOpacity 
          className="p-2 -mr-2"
          accessibilityRole="button"
          accessibilityLabel="Member actions"
        >
          <MaterialCommunityIcons name="dots-vertical" size={24} color="#6f6672" />
        </TouchableOpacity>
      </View>

      <View className="flex-row justify-between mt-8">
        <View>
          <Text className="text-[10px] font-sans-bold text-on-surface-variant uppercase tracking-widest">
            TIER
          </Text>
          <Text className="text-lg font-sans-bold text-primary mt-1">
            {member.tier}
          </Text>
        </View>

        <View className="items-end">
          <Text className="text-[10px] font-sans-bold text-on-surface-variant uppercase tracking-widest">
            RENEWAL
          </Text>
          <Text className={`text-lg font-sans-bold mt-1 ${styles.date}`}>
            {formatSubscriptionDateTime(member.renewalDate)}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default React.memo(MemberCard);
