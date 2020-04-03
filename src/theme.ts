import { createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles';
import { deepOrange, cyan } from '@material-ui/core/colors';

// Create a theme instance.
const theme = responsiveFontSizes(
  createMuiTheme({
    palette: {
      primary: {
        main: deepOrange[500],
      },
      secondary: {
        main: '#3A3335',
      },
      // error: {
      //   main: red.A400,
      // },
      // background: {
      //   default: '#fff',
      // },
    },
  }),
);

export default theme;
