import { FontProvider } from '../context/FontContext';
import { Slot } from 'expo-router';

function InitialLayout() {
    return (
        <FontProvider>
            <Slot />
        </FontProvider>
    );
}

export default function Root() {
    return (
        <InitialLayout />
    );
}