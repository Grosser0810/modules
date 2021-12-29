export const accordionStyles = (themePalette: any) => ({
  styleOverrides: {
    //   root: {
    //     borderRadius: '1px !important',
    //     backgroundColor: themePalette.action.hover,
    //     boxShadow: 'none',
    //     height: '6.8rem',
    //   },
    //   expanded: {
    //     height: '6.8rem',
    //   },
    //   region: {},
    // },
    root: {
      '&.MuiAccordion-root:before': {
        backgroundColor: 'transparent',
      },
    },
  },
});
