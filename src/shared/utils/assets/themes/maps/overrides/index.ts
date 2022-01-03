import { buttonStyles } from './button';
import { menuStyles } from './menu';
import { menuItemStyles } from './menuItem';
import { listItemStyles } from './listItem';
import { selectStyles } from './select';
import { switchStyles } from './switch';
import { tooltipStyles } from './tooltip';
import { formLabelStyles } from './formLabel';
import { typographyStyles } from './typography';
import { backdropStyles } from './backdrop';
import { paperStyles } from './paper';
import { dialogStyles } from './dialog';
import { accordionStyles } from './accordion';
import { IPalette } from '../../../../interfaces';

export const overrideMap = (themePalette: IPalette) => ({
  MuiButton: buttonStyles(themePalette),
  MuiMenu: menuStyles(themePalette),
  MuiMenuItem: menuItemStyles(themePalette),
  MuiListItem: listItemStyles(themePalette),
  MuiSelect: selectStyles(themePalette),
  MuiSwitch: switchStyles(themePalette),
  MuiTooltip: tooltipStyles(themePalette),
  MuiFormLabel: formLabelStyles(themePalette),
  MuiTypography: typographyStyles(themePalette),
  MuiBackdrop: backdropStyles(themePalette),
  MuiPaper: paperStyles(themePalette),
  MuiDialog: dialogStyles(themePalette),
  MuiAccordion: accordionStyles(themePalette),
});
