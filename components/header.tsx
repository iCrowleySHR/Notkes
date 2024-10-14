import React from 'react';
import { router } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { HeaderContainer, BackButton, Button, Label, ImageSave, SectionButtons } from '@/styles/header';
import { w } from '@/utils/responsiveMesures';

const SaveImage = require('@/assets/images/salvar.png');

interface HeaderProps {
    onDelete?: () => void;
}

const Header: React.FC<HeaderProps> = ({  onDelete }) => {

    return (
        <HeaderContainer>
            <BackButton onPress={() => router.push('/')}>
                <Ionicons name="arrow-back" size={w(7)} color="#fff" />
            </BackButton>
            <SectionButtons>
                <Button onPress={onDelete}>
                    <MaterialIcons name="delete" size={w(7)} color="#ad3838" />
                    <Label>Deletar</Label>
                </Button>
            </SectionButtons>
        </HeaderContainer>
    );
};

export default Header;
