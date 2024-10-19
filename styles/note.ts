import styled from 'styled-components/native';
import { Fonts } from '@/constants/Fonts';
import { h, w } from '@/utils/responsiveMesures';

export const ScrollBody = styled.ScrollView`
    background-color: ${(props) => props.theme.colors.noteBackground};
`;

export const ScreenContainer = styled.View`
    background-color: ${(props) => props.theme.colors.noteBackground};
`;

export const InputTitle = styled.TextInput.attrs((props) => ({
  placeholderTextColor: props.theme.colors.placeholderColor, 
}))`
  padding: ${w(2)}px;
  font-family: ${Fonts.PoppinsRegularBold};
  color: ${(props) => props.theme.colors.gray};
  width: 100%;
  height: ${h(7)}px; 
  font-size: ${w(6)}px;
  margin-top: ${w(6)}px;
`;

export const InputContent = styled.TextInput.attrs((props) => ({
  placeholderTextColor: props.theme.colors.placeholderColor, 
}))`
  border: none;
  background-color: ${(props) => props.theme.colors.noteBackground};
  font-family: ${Fonts.PoppinsRegular};
  color: ${(props) => props.theme.colors.gray};
  font-size: ${w(4)}px;
  width: 100%;
  min-height: ${h(83)}px;
  vertical-align: top; 
  padding: ${w(2)}px; 
  border-width: 0;
`;