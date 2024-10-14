import React from 'react';
import { FontProvider } from '../context/FontContext';
import { Slot } from 'expo-router';


function InitialLayout() {
    return (
        <Slot />
    );
}

export default function Root() {
    return (
        <FontProvider>
            <InitialLayout />
        </FontProvider>
    );
}
