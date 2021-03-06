import {
  cyan500, cyan700,
  green400,
  grey100, grey300, grey400, grey500,
  white, darkBlack, fullBlack,Howlblue,
} from 'material-ui/styles/colors';
import {fade} from 'material-ui/utils/colorManipulator';
import spacing from 'material-ui/styles/spacing';

/**
 *  Light Theme is the default theme used in material-ui. It is guaranteed to
 *  have all theme variables needed for every component. Variables not defined
 *  in a custom theme will default to these values.
 */
export default {
  spacing,
  fontFamily: 'inherit',
  borderRadius: 30,
  padding: 10,
  palette: {
    primary1Color: Howlblue,
    primary2Color: Howlblue,
    primary3Color: grey400,
    accent1Color: green400,
    accent2Color: grey100,
    accent3Color: grey500,
    textColor: darkBlack,
    secondaryTextColor: fade(darkBlack, 0.54),
    alternateTextColor: white,
    canvasColor: white,
    borderColor: Howlblue ,
    disabledColor: fade(darkBlack, 0.3),
    pickerHeaderColor: cyan500,
    clockCircleColor: fade(darkBlack, 0.07),
    shadowColor: fullBlack,
  },
};
