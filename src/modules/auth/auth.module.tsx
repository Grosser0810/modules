import React from 'react';
import { Box } from '@mui/material';
// eslint-disable-next-line import/no-unresolved
import { useStyles } from './auth.styles';

function Auth() {
  const classes = useStyles();

  return (
    <Box className={classes.wrapper}>
      <div>
        <input type='text' />
      </div>
      <div>
        <input type='text' />
      </div>
    </Box>
  );
}

export default Auth;
