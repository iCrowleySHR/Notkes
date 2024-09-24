import { Dimensions } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const width = Dimensions.get('screen').width;

export const h = (size : number) => {
  if (width > 768) { 
    return hp(size * 0.8); 
  }
  return hp(size * 1); 
};

export const w = (size : number) => {
    if (width > 768) { 
      return wp(size * 0.8); 
    }
    return wp(size * 1); 
  };
