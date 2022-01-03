import { IPalette } from '../../../../interfaces';

export const formLabelStyles = (themePalette: IPalette) => ({
  styleOverrides: {
    root: {
      color: themePalette.primary.dark,
    },
  },
});
