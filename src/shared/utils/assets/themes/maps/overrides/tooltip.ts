import { IPalette } from "../../../../interfaces";

export const tooltipStyles = (themePalette: IPalette) => ({
  styleOverrides: {
    tooltip: {
      backgroundColor: themePalette.grey[900],
      borderRadius: "0.5rem",
    },
    arrow: {
      color: themePalette.grey[900],
    },
  },
});
