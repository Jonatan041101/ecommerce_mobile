import {Dimensions} from 'react-native';
const {height, width} = Dimensions.get('window');

enum COLORS {
  PRIMARY = '#2A4D50',
  SECONDARY = '#DDF0FF',
  TERTIARY = '#FF7754',

  GRAY = '#83829A',
  GRAY_TWO = '#C1C0C8',

  OFF_WHITE = '#F3F4F8',
  WHITE = '#FFFFFF',
  BLACK = '#000000',
  RED = '#e81e4d',
  GREEN = ' #00C135',
  LIGHT_WHITE = '#FAFAFC',
}

enum SIZES {
  X_SMALL = 10,
  SMALL = 12,
  MEDIUM = 16,
  LARGE = 20,
  X_LARGE = 24,
  XX_LARGE = 44,
  HEIGHT = height,
  WIDTH = width,
}

enum POPPINS {
  BOLD = 'Poppins-Bold',
  X_BOLD = 'Poppins-ExtraBold',
  LIGHT = 'Poppins-Light',
  MEDIUM = 'Poppins-Medium',
  REGULAR = 'Poppins-Regular',
  SEMIBOLD = 'Poppins-SemiBold',
}

export {COLORS, SIZES, POPPINS};
