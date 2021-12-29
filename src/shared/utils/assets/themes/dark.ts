import {
  breakpoints,
  shadows,
  typography,
  spacing,
  shape,
  transitions,
  zIndex,
  dark,
} from './maps';
import { createTheme, Theme } from '@mui/material/styles';
import { overrideMap } from './maps/overrides';
import { responsiveFontSizes } from '@mui/material';

const darkTheme: Theme = responsiveFontSizes(
  createTheme({
    breakpoints,
    palette: dark,
    shadows,
    typography,
    spacing,
    shape,
    transitions,
    zIndex,
    components: overrideMap(dark),
  })
);
export default darkTheme;
