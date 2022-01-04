import {
  breakpoints,
  light,
  shadows,
  typography,
  spacing,
  shape,
  transitions,
  zIndex,
} from "./maps";
import { createTheme, Theme } from "@mui/material/styles";
import { overrideMap } from "./maps/overrides";

const lightTheme: Theme = createTheme({
  breakpoints,
  palette: light,
  shadows,
  typography,
  spacing,
  shape,
  transitions,
  zIndex,
  components: overrideMap(light),
});

export default lightTheme;
