import { Palette, Theme } from '@mui/material/styles';
import { Color } from '@mui/material';

export interface IPalette extends Palette {
  blueGrey: Color;
  brown: Color;
  deepOrange: Color;
  orange: Color;
  amber: Color;
  yellow: Color;
  lime: Color;
  lightGreen: Color;
  green: Color;
  teal: Color;
  cyan: Color;
  lightBlue: Color;
  blue: Color;
  indigo: Color;
  deepPurple: Color;
  purple: Color;
  pink: Color;
  red: Color;
}

export interface ITheme extends Theme {
  palette: IPalette;
}