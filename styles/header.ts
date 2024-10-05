import styled from 'styled-components/native';
import Colors from '@/constants/Colors';
import { TouchableOpacity } from 'react-native';
import { w, h } from '@/utils/responsiveMesures';

const { theme } = Colors;

export const HeaderContainer = styled.View`
    height: ${h(5)}px;
    background-color: ${theme.borderLeft};
    flex-direction: row;
    align-items: center;
    padding-left: 10px;
`;
export const BackButton = styled(TouchableOpacity)`
    margin-right: 10px;
`;
