import React from 'react';
import { useNavigation } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import { HeaderContainer, BackButton, ButtonSave, LabelSave, ImageSave } from '@/styles/header';
import { w } from '@/utils/responsiveMesures';
import { Image } from 'react-native';

const SaveImage = require('@/assets/images/salvar.png');

interface HeaderProps {
    onSave?: () => void;
}

const Header: React.FC<HeaderProps> = ({ onSave }) => {
    const navigation = useNavigation();

    return (
        <HeaderContainer>
            <BackButton onPress={() => navigation.goBack()}>
                <Ionicons name="arrow-back" size={w(7)} color="#fff" />
            </BackButton>
            <ButtonSave onPress={onSave}>
                <ImageSave>
                    <Image
                        source={SaveImage}
                        style={{ width: '100%', height: '100%' }}
                        resizeMode="contain"
                    />
                </ImageSave>
                <LabelSave>Salvar</LabelSave>
            </ButtonSave>
        </HeaderContainer>
    );
};

export default Header;
