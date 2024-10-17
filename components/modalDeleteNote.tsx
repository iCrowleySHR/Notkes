import React from 'react';
import { Modal } from 'react-native';
import { ModalOverlay, ModalContent, ModalText, ModalButton, ViewRow, TextOptions } from '@/styles/modalDeleteNotes'
import { PropsWithChildren } from 'react';
import { deleteAll } from '@/services/note';
import { router } from 'expo-router';

type Props = PropsWithChildren<{
    isVisible: boolean;
    onClose: () => void;
}>;

export default function ModalDeleteNotes({ isVisible, onClose }: Props) {
    const handleDelete = async () => {
        await deleteAll()
        onClose(); 
        router.push('/');
    };

    return (
        <Modal
            animationType="slide"
            transparent={true}
            visible={isVisible}
            onRequestClose={onClose}
        >
            <ModalOverlay>
                <ModalContent>
                    <ModalText>Deseja realmente apagar todas as notas?</ModalText>
                    <ViewRow>
                        <ModalButton bgColor="#ad3838" onPress={handleDelete}>
                            <TextOptions style={{ color: '#fff' }}>Sim, apagar</TextOptions>
                        </ModalButton>
                        <ModalButton bgColor="#ccc" onPress={onClose}>
                            <TextOptions style={{ color: '#000' }}>Cancelar</TextOptions>
                        </ModalButton>
                    </ViewRow>
                </ModalContent>
            </ModalOverlay>
        </Modal>
    );
}

