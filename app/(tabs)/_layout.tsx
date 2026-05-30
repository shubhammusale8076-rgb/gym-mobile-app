import { Tabs, Redirect } from "expo-router";
import { tabs } from "@/constants/data";
import { View } from "react-native";
import { colors, components } from "@/constants/theme";
import clsx from "clsx";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useAuth } from "@/hooks/useAuth";


const tabBar = components.tabBar;

type TabIconProps = {
    focused: boolean;
    icon: {
        active: React.ComponentProps<
            typeof MaterialCommunityIcons
        >["name"];

        inactive: React.ComponentProps<
            typeof MaterialCommunityIcons
        >["name"];
    };
};

const TabLayout = () => {
    const { isAuthenticated, isLoading } = useAuth();
    const insets = useSafeAreaInsets();

    if (isLoading) return null;

    if (!isAuthenticated) {
        return <Redirect href="/(auth)/log-in" />;
    }

    const TabIcon = ({ focused, icon }: TabIconProps) => {
        return (
            <View className="tabs-icon">
                <View className={clsx('tabs-pill', focused && 'tabs-active')}>
                    <MaterialCommunityIcons
                        name={focused ? icon.active : icon.inactive}
                        size={26}
                        color={focused ? "#FFFFFF" : "#661493"} />
                </View>
            </View>
        )
    }

    return (

        
        <Tabs
            screenOptions={{
                headerShown: false,
                tabBarShowLabel: false,
                tabBarStyle: {
                    position: "absolute",
                    bottom: Math.max(insets.bottom, tabBar.horizontalInset),
                    height: tabBar.height,
                    marginHorizontal: tabBar.horizontalInset,
                    borderRadius: tabBar.radius,
                    backgroundColor: colors.card,
                    borderTopWidth: 0,
                    elevation: 0,
                    shadowColor: colors.primary,
                    shadowOffset: {
                        width: 0,
                        height: 3,
                    },
                    shadowOpacity: 0.27,
                    shadowRadius: 3.84,
                },
                tabBarItemStyle: {
                    paddingVertical: tabBar.height / 2 - tabBar.iconFrame / 1.6,

                },
                tabBarIconStyle: {
                    width: tabBar.iconFrame,
                    height: tabBar.iconFrame,
                    alignItems: "center",
                }
            }}>

            {tabs.map((tab) => (
                <Tabs.Screen
                    key={tab.name}
                    name={tab.name}
                    options={{
                        title: tab.title,
                        tabBarIcon: ({ focused }) => (
                            <TabIcon focused={focused} icon={tab.icon} />
                        )
                    }} />
            ))}

        </Tabs>
    );

}


export default TabLayout;