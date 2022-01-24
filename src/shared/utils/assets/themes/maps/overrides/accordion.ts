import { IPalette } from "../../../../interfaces";

export const accordionStyles = (themePalette: IPalette) => ({
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
      "&.MuiAccordion-root:before": {
        backgroundColor: "transparent",
      },
    },
  },
});
