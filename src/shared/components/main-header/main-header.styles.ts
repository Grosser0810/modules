import { makeStyles, createStyles } from '@mui/styles';
import { Theme } from '@mui/material';
import { ITheme } from '../../utils/interfaces/theme';

export const useStyles = makeStyles((theme: ITheme) =>
  createStyles({
    headerWrapper: {
      padding: '2rem',
      backgroundColor: theme.palette.background.default
    }
  })
);
