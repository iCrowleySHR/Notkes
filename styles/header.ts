import styled from 'styled-components/native';
import Colors from '@/constants/Colors';
import { Fonts } from '@/constants/Fonts';
import { TouchableOpacity } from 'react-native';
import { w, h } from '@/utils/responsiveMesures';

const { theme } = Colors;

export const HeaderContainer = styled.View`
    height: ${h(10)}px;
    background-color: ${theme.borderLeft};
    flex-direction: row;
    align-items: center;
    padding: 0 ${w(4)}px;

`;
export const BackButton = styled(TouchableOpacity)`
 margin-right: ${w(6)}px;
`;

export const SectionButtons = styled.View`
  flex-direction: row;
  position: absolute;
  right: 5px;
`;

export const Button = styled.Pressable`
  height: ${w(7)}px;
  justify-content: center;
  align-items: center;
  margin: 0 ${w(2)}px 0 ${w(2)}px;
`;

export const Label = styled.Text`
  font-family: ${Fonts.PoppinsRegular};
  font-size: ${w(3)}px;
  color: #fff;
  text-align: center;
  margin-top: ${h(0.5)}px;
`;

export const ImageSave = styled.View`
  width: 100%;
  height: 100%; 
  filter: invert(1);
`;