import React from 'react';
import { useNavigation } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import { HeaderContainer, BackButton } from '@/styles/header'
import { w } from '@/utils/responsiveMesures';

export default function Header() {
    const navigation = useNavigation();

    return (
        <HeaderContainer>
            <BackButton onPress={() => navigation.goBack()}>
                <Ionicons name="arrow-back" size={w(7)} color="#fff" />
            </BackButton>
        </HeaderContainer>
    );
}
