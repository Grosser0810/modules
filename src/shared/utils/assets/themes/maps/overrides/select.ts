import { IPalette } from '../../../../interfaces';

export const selectStyles = (themePalette: IPalette) => ({
  styleOverrides: {
    outlined: {
      '&.MuiInputBase-inputAdornedStart': {
        marginLeft: '-3.5rem',
        paddingLeft: '4rem',
      },
    },
  },
});
