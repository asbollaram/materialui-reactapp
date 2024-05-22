import { Stack, Typography } from '@mui/material';
import React from 'react';
import Barchart from './Barchart';
import Linechartpage from './Linecharpage';

const Mainchart = () => {
  return (
    <>
      {' '}
      <Typography variant="h4" sx={{ borderBottom: '1px solid #e1e1e1' }}>
        Product Graps
      </Typography>
      <Stack direction="row">
        <Barchart />
        <Linechartpage />
      </Stack>
    </>
  );
};

export default Mainchart;
