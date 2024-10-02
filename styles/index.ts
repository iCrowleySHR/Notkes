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
  height: ${h(6)}px; 
`;

export const Icon = styled.Image`
  position: absolute;
  right: 12px;
  width: ${w(5)}px;
  height: ${w(5)}px;
`;

// export const SectionNotes = styled.View`
//   margin-top: ${h(2)}px;
// `;

// export const Notes = styled.View`
//   border-radius: 15px;
//   background-color: ${theme.white};
// `;