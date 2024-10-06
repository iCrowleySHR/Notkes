import styled from 'styled-components/native';
import Colors from '@/constants/Colors';
import { TouchableOpacity } from 'react-native';
import { w, h } from '@/utils/responsiveMesures';

const { theme } = Colors;

export const HeaderContainer = styled.View`
    height: ${h(10)}px;
    background-color: ${theme.borderLeft};
    flex-direction: row;
    align-items: flex-end;
    justify-content: flex-start; 
    padding-left: 10px;
    padding-bottom: 9px;

`;
export const BackButton = styled(TouchableOpacity)`
    margin-right: 10px;
`;
