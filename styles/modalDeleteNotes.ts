import styled from 'styled-components/native';
import { Fonts } from '@/constants/Fonts';
import { h, w } from '@/utils/responsiveMesures';
import { TouchableOpacity, TouchableOpacityProps } from 'react-native';
import Colors from '@/constants/Colors';

const { theme } = Colors;

interface ModalButtonProps extends TouchableOpacityProps {
    bgColor?: string;
}

export const ModalOverlay = styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
    background-color: rgba(0, 0, 0, 0.5);
`;

export const ModalContent = styled.View`
    width: 80%;
    padding: 20px;
    background-color: white;
    border-radius: 10px;
    align-items: center;
`;

export const ModalText = styled.Text`
    font-size: 18px;
    margin-bottom: 20px;
    text-align: center;
`;
export const ViewRow = styled.View`
    flex-direction: row;
    justify-content: space-between; 
    width: 100%; 
`;

export const ModalButton = styled(TouchableOpacity) <ModalButtonProps>`
    flex: 1;
    margin: ${w(2)}px; 
    border-radius: 10px; 
    background-color: ${({ bgColor }) => bgColor || '#fff'}; 
    align-items: center; 
    justify-content: center;
`;

export const TextOptions = styled.Text`
  font-family: ${Fonts.PoppinsRegular};
  font-size: ${w(4)}px;
  color: ${theme.gray};
  margin: ${h(1)}px 0;
`;