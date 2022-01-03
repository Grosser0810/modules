import React, { FC } from 'react';
import { Button, Typography, Box, Tooltip, IconButton } from '@mui/material';
import { MainHeader } from '../../shared';

const Settings:FC = () => {
  return (
    <div>
      <MainHeader />
      {/*<Box>*/}
      {/*  <Typography variant='h3' color='error' >SETTINGS MODULE</Typography>*/}
      {/*</Box>*/}
      {/*<Button variant='contained'>CONTAINED</Button>*/}
      {/*<Button variant='outlined'>OUTlINED</Button>*/}
      {/*<Button variant='outlined'>*/}
      {/*  <Typography variant='overline' color='error'>Text button</Typography>*/}
      {/*</Button>*/}
      <Box>
        <Tooltip title='SOME TEXT only for check color and I needed some text for it' arrow>
          <Button variant='contained'>Tooltip</Button>
        </Tooltip>
      </Box>
    </div>
  )
};

export default Settings;