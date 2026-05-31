import React, { useState, useMemo, useCallback } from 'react';
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  Platform,
} from 'react-native';
import { SafeAreaView as RNSafeAreaView } from 'react-native-safe-area-context';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { styled } from 'nativewind';
import { useRouter } from 'expo-router';
import { members, memberFilters } from '@/constants/data';
import MemberCard from '@/components/member/MemberCard';
import MemberFilters from '@/components/member/MemberFilters';
import MemberSearchBar from '@/components/member/MemberSearchBar';
import "@/global.css";
import AppHeader from '@/components/appHeader/AppHeader';

const SafeAreaView = styled(RNSafeAreaView);

const MembersScreen = () => {
  const router = useRouter();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedFilter, setSelectedFilter] = useState<MemberFilter>('ALL');

  const filteredMembers = useMemo(() => {
    return members.filter((member) => {
      const matchesSearch =
        member.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        member.email.toLowerCase().includes(searchTerm.toLowerCase());

      const matchesFilter =
        selectedFilter === 'ALL' || member.status === selectedFilter;

      return matchesSearch && matchesFilter;
    });
  }, [searchTerm, selectedFilter]);


  const renderEmptyState = useCallback(() => (
    <View className="flex-1 items-center justify-center pt-20 px-10">
      <View className="size-20 bg-surface-container rounded-full items-center justify-center mb-6">
        <MaterialCommunityIcons name="account-search-outline" size={40} color="#6f6672" />
      </View>
      <Text className="text-xl font-sans-bold text-on-surface text-center">
        No members found
      </Text>
      <Text className="mt-2 text-sm font-sans-medium text-on-surface-variant text-center leading-5">
        Try adjusting your filters or search term to find what you&apos;re looking for.
      </Text>

      {(searchTerm !== '' || selectedFilter !== 'ALL') && (
        <TouchableOpacity
          onPress={() => {
            setSearchTerm('');
            setSelectedFilter('ALL');
          }}
          className="mt-8"
        >
          <Text className="text-primary font-sans-bold">Clear All Filters</Text>
        </TouchableOpacity>
      )}
    </View>
  ), [searchTerm, selectedFilter]);

  const renderItem = useCallback(({ item }: { item: Member }) => (
    <MemberCard
      member={item}
      onPress={() => router.push(`/member/${item.id}`)}
    />
  ), [router]);

  return (
    <SafeAreaView className="screen pt-6" edges={['top']}>
      <FlatList
        data={filteredMembers}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        ListHeaderComponent={
          <>
            <AppHeader
              title="Members Directory"
              subtitle="Welcome back,"
              userName="Shubham"
            />
            <MemberSearchBar value={searchTerm} onChangeText={setSearchTerm} />
            <MemberFilters
              options={memberFilters}
              selectedFilter={selectedFilter}
              onSelect={setSelectedFilter}
            />
          </>
        }
        ListEmptyComponent={renderEmptyState}
        contentContainerStyle={{
          paddingBottom: Platform.OS === 'ios' ? 100 : 80,
          paddingHorizontal: 24
        }}
        showsVerticalScrollIndicator={false}
      />
    </SafeAreaView>
  );
};

export default MembersScreen;