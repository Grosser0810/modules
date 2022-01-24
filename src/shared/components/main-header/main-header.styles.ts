import { makeStyles, createStyles } from '@mui/styles';
import { ITheme } from '../../utils';

export const useStyles = makeStyles((theme: ITheme) => createStyles({
  headerWrapper: {
    padding: '2rem',
    backgroundColor: theme.palette.background.default,
  },
}));
