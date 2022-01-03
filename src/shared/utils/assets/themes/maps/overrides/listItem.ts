import { IPalette } from '../../../../interfaces';

export const listItemStyles = (themePalette: IPalette) => ({
  styleOverrides: {
    root: {
      borderBottom: `1px solid ${themePalette.action.hover}`,
    },
  },
});
