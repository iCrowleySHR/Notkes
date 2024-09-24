import styled from 'styled-components/native';
import { Fonts } from '@/constants/Fonts';
import { h, w } from '@/utils/responsiveMesures';

export const Text = styled.Text`
    font-family: ${Fonts.RalewayThin};
    font-size: ${w(7)}px;
    text-align: center;
    font-weight: 700;
`;