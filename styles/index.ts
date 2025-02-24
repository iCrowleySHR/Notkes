import styled, { useTheme } from 'styled-components/native';
import { Fonts } from '@/constants/Fonts';
import { h, w } from '@/utils/responsiveMesures';

export const ScrollBody = styled.ScrollView`
  background-color: ${(props) => props.theme.colors.background};
  flex: 1;
`;

export const ScreenContainer = styled.View`
  background-color: ${(props) => props.theme.colors.background};
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

export const InputSearch = styled.TextInput.attrs((props) => ({
  placeholderTextColor: props.theme.colors.placeholderColor,
}))`
  padding: ${w(1)}px ${w(10)}px ${w(1)}px ${w(3)}px;
  border-radius: 13px;
  border-width: 0;
  background-color: ${(props) => props.theme.colors.noteBackground};
  font-family: ${Fonts.PoppinsRegular};
  color: ${(props) => props.theme.colors.gray};
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
  background-color: ${(props) => props.theme.colors.noteBackground};
  border: ${w(0.3)}px solid ${(props) => props.theme.colors.borderLeft};
  overflow: hidden;
`;

export const BorderLeft = styled.View`
  background-color: ${(props) => props.theme.colors.borderLeft};
  height: 100%;
  width: ${w(5)}px;
  margin-right: ${w(3)}px;
`;

export const ColumnText = styled.View`
  flex-direction: column;
  width: 90%;
  justify-content: center;
  position: relative;
`;

export const Title = styled.Text.attrs(() => ({
  numberOfLines: 1,
  ellipsizeMode: 'tail'
}))`
  font-size: ${w(4)}px;
  max-width: 95%;
  color: ${(props) => props.theme.colors.gray};
  font-family: ${Fonts.PoppinsRegularBold};
`;

export const Content = styled.Text.attrs(() => ({
  numberOfLines: 1,
  ellipsizeMode: 'tail'
}))`
  font-family: ${Fonts.PoppinsRegular};
  font-size: ${w(3)}px;
  color: ${(props) => props.theme.colors.gray} ;
  max-width: 95%;
`;

export const DateText = styled.Text`
  font-family: ${Fonts.PoppinsRegular};
  font-size: ${w(2.5)}px;
  position: absolute;
  bottom: 0; 
  right: 1px;
  color: ${(props) => props.theme.colors.gray} ;
`;

export const ButtonAdd = styled.Pressable`
  height: ${w(17)}px;
  width: ${w(17)}px;
  margin: ${h(3)}px auto ${w(15)}px;
`;

export const LabelAdd = styled.Text`
  font-family: ${Fonts.PoppinsRegular};
  font-size: ${w(3)}px;
  color: ${(props) => props.theme.colors.gray} ;
  text-align: center;
  margin-top: ${h(1)}px;
`;