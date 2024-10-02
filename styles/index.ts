import styled from 'styled-components/native';
import { Fonts } from '@/constants/Fonts';
import { h, w } from '@/utils/responsiveMesures';
import Colors from '@/constants/Colors';

const { theme } = Colors;

export const ScrollBody = styled.ScrollView`
  background-color: ${theme.background};
  flex: 1;
  padding: 0 ${w(5)}px;
`;

export const SectionSearch = styled.View`
  font-size: ${w(7)}px;
  text-align: center;
  margin-top: ${h(5)}px;
  flex-direction: row;
  align-items: center; 
  width: 100%;
  position: relative; 
`;

export const InputSearch = styled.TextInput`
  padding: ${w(2)}px 40px ${w(2)}px 12px;
  border-radius: 13px;
  border-width: 0;
  background-color: ${theme.white};
  outline: none;
  font-family: ${Fonts.PoppinsRegular};
  width: 100%;
  height: ${w(9)}px; 
  font-size: ${w(3)}px;
`;

export const Icon = styled.Image`
  position: absolute;
  right: 12px;
  width: ${w(4)}px;
  height: ${w(4)}px;
`;

export const SectionNotes = styled.View`
  margin-top: ${h(2)}px;
`;

export const Notes = styled.View`
  flex-direction: row;
  border-radius: ${w(2)}px;
  width: 100%;
  height: ${w(18)}px;
  margin: ${w(2)}px 0 ${w(2)}px 0;
  background-color: ${theme.white};
`;

export const BorderLeft = styled.View`
  background-color: ${theme.borderLeft};
  height: 100%;
  width: ${w(5)}px;
  border-radius: ${w(2)}px 0 0 ${w(2)}px;
  margin-right: ${w(3)}px;
`;

export const ColumnText = styled.View`
  flex-direction: column;
  width: 90%;
  justify-content: center;
`;

export const Title = styled.Text`
  max-width: 100%;
  white-space: nowrap;
  font-family: ${Fonts.PoppinsRegularBold};
  text-overflow: ellipsis;
  overflow: hidden;
`;

export const Content = styled.Text`
  font-family: ${Fonts.PoppinsRegular};
  font-size: ${w(3)}px;
  color: ${theme.gray} ;
  max-width: 100%;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;