import React, { useEffect, useCallback } from 'react';
import { 
  View, 
  Text, 
  TouchableOpacity, 
  Modal, 
  Pressable, 
  Dimensions, 
  Image,
  Alert,
  ScrollView
} from 'react-native';
import Animated, { 
  useSharedValue, 
  useAnimatedStyle, 
  withTiming, 
} from 'react-native-reanimated';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useAuth } from '@/hooks/useAuth';
import { images } from '@/constants/images';
import SidebarMenuItem from './SidebarMenuItem';
import "@/global.css";
import { shadows } from '@/constants/shadows';

const { width: SCREEN_WIDTH } = Dimensions.get('window');
const SIDEBAR_WIDTH = Math.min(SCREEN_WIDTH * 0.8, 360);

interface ProfileSidebarProps {
  isVisible: boolean;
  onClose: () => void;
}

const ProfileSidebar = ({ isVisible, onClose }: ProfileSidebarProps) => {
  const { user, logout } = useAuth();
  const translateX = useSharedValue(SIDEBAR_WIDTH);
  const opacity = useSharedValue(0);

  useEffect(() => {
    if (isVisible) {
      translateX.value = withTiming(0, { duration: 250 });
      opacity.value = withTiming(1, { duration: 250 });
    } else {
      translateX.value = withTiming(SIDEBAR_WIDTH, { duration: 250 });
      opacity.value = withTiming(0, { duration: 250 });
    }
  }, [isVisible, translateX, opacity]);

  const animatedSidebarStyle = useAnimatedStyle(() => ({
    transform: [{ translateX: translateX.value }],
  }));

  const animatedOverlayStyle = useAnimatedStyle(() => ({
    opacity: opacity.value,
  }));

  const handleLogout = useCallback(() => {
    Alert.alert(
      "Logout?",
      "Are you sure you want to logout?",
      [
        { text: "Cancel", style: "cancel" },
        { 
          text: "Logout", 
          style: "destructive", 
          onPress: async () => {
            onClose();
            await logout();
          } 
        }
      ]
    );
  }, [logout, onClose]);

  return (
    <Modal
      transparent
      visible={isVisible}
      onRequestClose={onClose}
      animationType="none"
    >
      <View className="flex-1 flex-row">
        {/* Overlay */}
        <Animated.View 
          className="absolute inset-0 bg-black/50" 
          style={animatedOverlayStyle}
        >
          <Pressable className="flex-1" onPress={onClose} />
        </Animated.View>

        {/* Sidebar */}
        <Animated.View 
          className="absolute right-0 top-0 bottom-0 bg-surface shadow-2xl overflow-hidden"
          style={[{ width: SIDEBAR_WIDTH }, animatedSidebarStyle]}
        >
          <ScrollView 
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{ flexGrow: 1, paddingBottom: 40 }}
          >
            {/* Header / Profile Section */}
            <View className="pt-16 px-6 pb-6 bg-surface-container-low">
              <View className="flex-row items-center justify-between mb-6">
                <View className="size-16 rounded-full border-2 border-white shadow-md overflow-hidden">
                  <Image 
                    source={images.avatar} 
                    className="size-full"
                    resizeMode="cover"
                  />
                </View>
                <TouchableOpacity 
                   onPress={onClose}
                   className="size-10 rounded-full bg-white/50 items-center justify-center"
                   style={shadows.card}
                >
                  <MaterialCommunityIcons name="close" size={24} color="#1f1a21" />
                </TouchableOpacity>
              </View>
              
              <Text className="text-2xl font-sans-bold text-on-surface">
                {user?.name || 'Shubham'}
              </Text>
              <Text className="text-sm my-2 font-sans-medium text-on-surface-variant">
                {user?.role === 'ADMIN' ? 'Gym Administrator' : user?.role || 'Staff'}
              </Text>
              <View className="flex-row items-center my-2">
                <MaterialCommunityIcons name="map-marker" size={14} color="#661493" />
                <Text className="ml-1  text-md font-sans-semibold text-primary">
                  Kinetix Fitness
                </Text>
              </View>
            </View>

            {/* Quick Summary Card */}
            <View className="px-6 -mt-4">
               <View className="bg-primary rounded-3xl p-5 flex-row justify-between shadow-lg shadow-primary/20">
                  <View>
                    <Text className="text-white/70 text-[10px] font-sans-bold uppercase tracking-widest">Active Members</Text>
                    <Text className="text-white text-xl font-sans-extrabold mt-1">1,248</Text>
                  </View>
                  <View className="w-px bg-white/20" />
                  <View>
                    <Text className="text-white/70 text-[10px] font-sans-bold uppercase tracking-widest">Revenue</Text>
                    <Text className="text-white text-xl font-sans-extrabold mt-1">₹8.75L</Text>
                  </View>
               </View>
            </View>

            {/* Menu Sections */}
            <View className="mt-8 px-2">
              <SidebarMenuItem 
                icon="account-circle-outline" 
                label="Profile" 
                onPress={() => {}} 
              />
              <SidebarMenuItem 
                icon="card-account-details-outline" 
                label="Membership Plans" 
                onPress={() => {}} 
              />
              <SidebarMenuItem 
                icon="bell-outline" 
                label="Notifications" 
                onPress={() => {}} 
              />
              <SidebarMenuItem 
                icon="cog-outline" 
                label="Settings" 
                onPress={() => {}} 
              />
              <SidebarMenuItem 
                icon="help-circle-outline" 
                label="Help & Support" 
                onPress={() => {}} 
              />
            </View>

            {/* Logout at bottom */}
            <View className="mt-1 px-2 pt-10">
              <View className="h-px bg-outline-variant mx-6 mb-4" />
              <SidebarMenuItem 
                icon="logout" 
                label="Logout" 
                onPress={handleLogout}
                isDanger
              />
            </View>
          </ScrollView>
        </Animated.View>
      </View>
    </Modal>
  );
};

export default ProfileSidebar;
