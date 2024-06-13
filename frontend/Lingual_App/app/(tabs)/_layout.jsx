import { View, Text, Image } from 'react-native';
import React from 'react';
import { Tabs, Redirect } from 'expo-router';
import { icons } from '../../constants';

const TabIcon = ({ icon, color, name, focused }) => {
    return (
        <View className="items-center justify-center gap-2">
            <Image
                source={icon}
                resizeMode="contain"
                tintColor={color}
                className="w-6 h-6"
            />
            <Text className={`${focused ? 'font-psemibold' : 'font-pregular'} text-xs`} style={{ color: color }}>
                {name}
            </Text>
        </View>
    )
}

// Bottom menu bar

const TabsLayout = () => {
    return (
        <>
            <Tabs
                screenOptions={{
                    tabBarShowLabel: false,
                    // Because we're in an object, we need to pass the colours manually instead of using tailwind
                    tabBarActiveTintColor: '#FE504F',
                    tabBarInactiveTintColor: '#ADB3BC',
                    tabBarStyle: {
                        backgroundColor: '#FBF6FC',
                        borderTopWidth: 1,
                        borderTopColor: '#FBF7FC',
                        height: 84,
                    }
                }}
            >

                {/* HomeTab */}

                <Tabs.Screen
                    name="home"
                    options={{
                        title: 'Home',
                        headerShown: false,
                        tabBarIcon: ({ color, focused }) => (
                            <TabIcon
                                icon={icons.home}
                                color={color}
                                name="Home"
                                focused={focused}
                            />
                        )
                    }}
                />

                {/* ChatTab */}

                <Tabs.Screen
                    name="chat"
                    options={{
                        title: 'Chat',
                        headerShown: false,
                        tabBarIcon: ({ color, focused }) => (
                            <TabIcon
                                icon={icons.messageCircle}
                                color={color}
                                name="Chat"
                                focused={focused}
                            />
                        )
                    }}
                />

                {/* ProfileTab */}

                <Tabs.Screen
                    name="profile"
                    options={{
                        title: 'Profile',
                        headerShown: false,
                        tabBarIcon: ({ color, focused }) => (
                            <TabIcon
                                icon={icons.user}
                                color={color}
                                name="Profile"
                                focused={focused}
                            />
                        )
                    }}
                />

                {/* LessonsTab */}

                <Tabs.Screen
                    name="lessons"
                    options={{
                        title: 'Lessons',
                        headerShown: false,
                        tabBarIcon: ({ color, focused }) => (
                            <TabIcon
                                icon={icons.bookOpen}
                                color={color}
                                name="Lessons"
                                focused={focused}
                            />
                        )
                    }}
                />

                {/* SettingsTab */}

                <Tabs.Screen
                    name="settings"
                    options={{
                        title: 'Settings',
                        headerShown: false,
                        tabBarIcon: ({ color, focused }) => (
                            <TabIcon
                                icon={icons.settings}
                                color={color}
                                name="Settings"
                                focused={focused}
                            />
                        )
                    }}
                />

            </Tabs>
        </>
    )
}

export default TabsLayout