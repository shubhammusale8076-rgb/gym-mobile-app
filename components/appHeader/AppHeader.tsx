import { View, Text, TouchableOpacity, Image } from 'react-native'
import React, { useState } from 'react'
import { images } from '@/constants/images'
import ProfileSidebar from '../sidebar/ProfileSidebar'

interface AppHeaderProps {
    title: string;
    subtitle?: string;
    userName?: string;
}

const AppHeader = ({
    title,
    subtitle,
    userName = "" }: AppHeaderProps) => {
    const [isSidebarVisible, setIsSidebarVisible] = useState(false);

    return (
        <View className="flex-row items-center justify-between mb-8 mt-2">
            <View>
                {subtitle && (
                    <Text className="mb-2 text-base font-sans-medium text-on-surface-variant">
                        {subtitle}{" "}
                        <Text className="font-sans-bold text-[18px] text-primary">
                            {userName}
                        </Text>
                    </Text>
                )}
                <Text className="text-3xl font-sans-extrabold text-on-surface mt-1">
                    {title}
                </Text>
            </View>

            <TouchableOpacity
                activeOpacity={0.8}
                onPress={() => setIsSidebarVisible(true)}
                className="size-12 rounded-full overflow-hidden border-2 border-white shadow-lg"
                accessibilityRole="button"
                accessibilityLabel="Admin Profile"
            >
                <Image
                    source={images.avatar}
                    className="size-full"
                    resizeMode="cover"
                />
            </TouchableOpacity>

            <ProfileSidebar 
                isVisible={isSidebarVisible} 
                onClose={() => setIsSidebarVisible(false)} 
            />
        </View>
    )
}

export default AppHeader