import styled from 'styled-components/native';
import { Fonts } from '@/constants/Fonts';
import { h, w } from '@/utils/responsiveMesures';

export const ScrollBody = styled.ScrollView`
  flex: 1;
  background-color: ${(props) => props.theme.colors.background};
`;

export const Title = styled.Text`
    font-family: ${Fonts.PoppinsRegular};
    text-align: center;
    margin-top: ${h(5)}px;
    font-size: ${w(6)}px;
    color: ${(props) => props.theme.colors.gray};
`;

export const Section = styled.Pressable`
  flex-direction: row;
  background-color: ${(props) => props.theme.colors.noteBackground};
  height: ${h(6)}px;
  width: 90%;
  align-self: center;
  border-radius: 15px;
  margin-top: ${h(2)}px;
  margin-bottom: ${h(2)}px;
  border: ${w(0.3)}px solid ${(props) => props.theme.colors.borderLeft};
  align-items: center;
  padding-left: ${w(4)}px;
`;

export const Text = styled.Text`
  font-family: ${Fonts.PoppinsRegular};
  font-size: ${w(4)}px;
  padding-left: ${w(3)}px;
  color: ${(props) => props.theme.colors.gray};

`;