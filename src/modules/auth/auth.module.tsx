import React, { FC } from 'react';
import { useStyles } from './auth.styles';
import { Box, Typography } from '@mui/material';


const Auth: FC = () => {
  const classes = useStyles();

  return (
    <Box className={classes.wrapper}>
      <div>
        <input type="text"/>
      </div>
      <div>
        <input type="text"/>
      </div>
    </Box>
  )
}

export default Auth;
