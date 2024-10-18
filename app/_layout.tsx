import React from 'react';
import { FontProvider } from '../context/FontContext';
import { Slot } from 'expo-router';
import { ThemeProvider } from '@/context/ThemeContext';

function InitialLayout() {
    return (
        <Slot />
    );
}

export default function Root() {
    return (
        <ThemeProvider>
            <FontProvider>
                <InitialLayout />
            </FontProvider>
        </ThemeProvider>
    );
}
