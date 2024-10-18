import React, { useContext, useState } from 'react';
import { ScrollBody, Title, Section, Text as StyledText } from '@/styles/configuration';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { w } from '@/utils/responsiveMesures';
import ModalDeleteNotes from '@/components/modalDeleteNote';
import { Switch } from 'react-native';
import { ThemeContext } from '@/context/ThemeContext';

export default function Configuration() {
    const [modalVisible, setModalVisible] = useState(false);

    const toggleModal = () => {
        setModalVisible(!modalVisible);
    };

    const { toggleTheme, theme } = useContext(ThemeContext)

    return (
        <ScrollBody>
            <Title>Configurações</Title>
            <Section onPress={toggleModal}>
                <MaterialIcons name="delete" size={w(7)} color="#ad3838" />
                <StyledText>Apagar todas as notas</StyledText>
            </Section>
            <Section onPress={toggleTheme}>
                <StyledText>Mudar tema</StyledText>
            </Section>
            <ModalDeleteNotes isVisible={modalVisible} onClose={toggleModal} />
        </ScrollBody>
    );
}
