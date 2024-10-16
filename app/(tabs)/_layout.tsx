import React from 'react';
import { Tabs } from 'expo-router';
import { FontAwesome } from '@expo/vector-icons';
import Ionicons from '@expo/vector-icons/Ionicons';

export default function Root() {
    return (
        <Tabs
            screenOptions={{
                headerShown: false,
                tabBarShowLabel: false,
                tabBarActiveTintColor: '#a6c7ee',
            }}
        >
            <Tabs.Screen
                name="index"
                options={{
                    title: 'Home',
                    tabBarIcon: ({ color }) => <FontAwesome size={28} name="home" color={color} />,
                }}
            />

            <Tabs.Screen
                name="configuration"
                options={{
                    title: 'Configuration',
                    tabBarIcon: ({ color }) => <Ionicons name="settings-sharp" size={24} color={color} />,
                }}
            />
        </Tabs>
    );
}


