import React from 'react';
import { FontProvider } from '../context/FontContext';
import { Stack } from 'expo-router';
import Header from '@/components/header'


function InitialLayout() {
    return (
        <Stack
            screenOptions={{
                header: () => <Header />,
                headerTitleStyle: {
                    fontWeight: 'bold',
                },
            }}
        >
            <Stack.Screen
                name="index"
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="note"
            />
        </Stack>
    );
}

export default function Root() {
    return (
        <FontProvider>
            <InitialLayout />
        </FontProvider>
    );
}
