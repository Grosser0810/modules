import React from 'react';
import {
  Box,
  FormControlLabel,
  Switch,
} from '@mui/material';
import { useStyles } from './main-header.styles';

export const MainHeader = () => {
  const classes = useStyles();
  const themeParams = JSON.parse(localStorage.getItem('theme') || '');

  const toggleTheme = () => {
    const currentTheme = localStorage.getItem('theme');
    const isDark = !JSON.parse(currentTheme || '')?.isDark;
    localStorage.setItem('theme', JSON.stringify({ isDark }));
  };

  return (
    <Box className={classes.headerWrapper}>
      {/*<Typography variant="h1">SOME TEXT</Typography>*/}
      <FormControlLabel
        control={<Switch onChange={toggleTheme} />}
        label='Label'
      />
    </Box>
  );
};
