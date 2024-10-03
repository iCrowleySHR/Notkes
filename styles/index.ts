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

export const ScreenContainer = styled.View`
  background-color: ${theme.background};
  flex: 1;
  padding: 0 ${w(5)}px;
`;

export const SectionSearch = styled.View`
  font-size: ${w(7)}px;
  text-align: center;
  margin-top: ${h(5)}px;
  margin-bottom: ${h(2)}px;
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
  color: ${theme.gray};
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
  border: ${w(0.3)}px solid ${theme.borderLeft};
  overflow: hidden;
`;

export const BorderLeft = styled.View`
  background-color: ${theme.borderLeft};
  height: 100%;
  width: ${w(5)}px;
  margin-right: ${w(3)}px;
`;

export const ColumnText = styled.View`
  flex-direction: column;
  width: 90%;
  justify-content: center;
`;

export const Title = styled.Text`
  font-size: ${w(4)}px;
  max-width: 95%;
  color: ${theme.gray};
  white-space: nowrap;
  font-family: ${Fonts.PoppinsRegularBold};
  text-overflow: ellipsis;
  overflow: hidden;
`;

export const Content = styled.Text`
  font-family: ${Fonts.PoppinsRegular};
  font-size: ${w(3)}px;
  color: ${theme.gray} ;
  max-width: 95%;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const ButtonAdd = styled.Pressable`
  height: ${w(17)}px;
  width: ${w(17)}px;
  margin: ${h(3)}px auto ${w(20)}px;
`;

export const LabelAdd = styled.Text`
  font-family: ${Fonts.PoppinsRegular};
  font-size: ${w(3)}px;
  color: ${theme.gray} ;
  text-align: center;
  margin-top: ${h(1)}px;
`;