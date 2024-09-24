// app/_layout.tsx

import { FontProvider } from '../context/FontContext'; 
import { Slot } from 'expo-router';
import { Text } from 'react-native';

function InitialLayout() {
    return <Slot />;
}

export default function Root() {
    return (
        <FontProvider>
            <InitialLayout />
        </FontProvider>
    );
}
