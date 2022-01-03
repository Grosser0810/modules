import { IPalette } from '../../../../interfaces';

export const menuItemStyles = (themePalette: IPalette) => ({
  styleOverrides: {
    root: {
      '&.Mui-selected': {
        background: '#fff',
        '&:focus': {
          background: '#fff',
        },
        '&:hover': {
          backgroundColor: themePalette.action.hover,
        },
      },
      '&:focus': {
        backgroundColor: '#fff',
      },
      '&:hover': {
        backgroundColor: themePalette.action.hover,
      },
      boxShadow: 'none',
      height: '3.6rem',
    },
  },
});
