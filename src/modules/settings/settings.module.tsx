import React from 'react';
import { Button, Box, Tooltip } from '@mui/material';
// eslint-disable-next-line import/extensions,import/no-unresolved
import { MainHeader } from '../../shared';

function Settings() {
  return (
    <div>
      <MainHeader />
      {/* <Box> */}
      {/*  <Typography variant='h3' color='error' >SETTINGS MODULE</Typography> */}
      {/* </Box> */}
      {/* <Button variant='contained'>CONTAINED</Button> */}
      {/* <Button variant='outlined'>OUTlINED</Button> */}
      {/* <Button variant='outlined'> */}
      {/*  <Typography variant='overline' color='error'>Text button</Typography> */}
      {/* </Button> */}
      <Box>
        <Tooltip
          title='SOME TEXT only for check color and I needed some text for it'
          arrow
        >
          <Button variant='contained'>Tooltip</Button>
        </Tooltip>
      </Box>
    </div>
  );
}

export default Settings;
