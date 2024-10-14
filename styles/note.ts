import styled from 'styled-components/native';
import { Fonts } from '@/constants/Fonts';
import { h, w } from '@/utils/responsiveMesures';
import Colors from '@/constants/Colors';

const { theme } = Colors;

export const ScrollBody = styled.ScrollView`
  background-color: #fff;
`;

export const ScreenContainer = styled.View`
  background-color: #fff;
`;

export const InputTitle = styled.TextInput`
  padding: ${w(2)}px;
  font-family: ${Fonts.PoppinsRegularBold};
  color: ${theme.gray};
  width: 100%;
  height: ${w(9)}px; 
  font-size: ${w(6)}px;
  margin-top: ${w(6)}px;
`;

export const InputContent = styled.TextInput`
  border: none;
  background-color: ${theme.white};
  font-family: ${Fonts.PoppinsRegular};
  color: ${theme.gray};
  font-size: ${w(4)}px;
  width: 100%;
  min-height: ${h(83)}px;
  text-align-vertical: top; 
  padding: ${w(2)}px; 
`;