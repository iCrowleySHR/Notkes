import styled from 'styled-components/native';
import Colors from '@/constants/Colors';
import { Fonts } from '@/constants/Fonts';
import { TouchableOpacity } from 'react-native';
import { w, h } from '@/utils/responsiveMesures';
import { StatusBar } from 'react-native';

const statusBar = StatusBar.currentHeight;
const { theme } = Colors;


export const HeaderContainer = styled.View`
    height: ${h(10)}px;
    background-color: ${theme.borderLeft};
    flex-direction: row;
    align-items: center;
    padding: 0 ${w(4)}px 0 ${w(4)}px;
    justify-content: space-between;
    margin-top: ${statusBar}px;
`;
export const BackButton = styled(TouchableOpacity)`
 margin-right: ${w(6)}px;
`;

export const ButtonSave = styled.Pressable`
  height: ${w(10)}px;
  width: ${w(10)}px;
  align-items: center;
  justify-content: center;
  margin-top: ${h(0.5)}px;
`;

export const LabelSave = styled.Text`
  font-family: ${Fonts.PoppinsRegular};
  font-size: ${w(3)}px;
  color: #fff;
  text-align: center;
  margin-top: ${h(0.5)}px;
`;

export const ImageSave = styled.View`
  width: 60%;
  height: 60%; 
`;