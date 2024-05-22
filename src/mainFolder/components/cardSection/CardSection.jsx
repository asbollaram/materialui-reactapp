import React from 'react';
import Cardone from './Cardone';
import Cardtwo from './Cardtwo';
import Cardthree from './Cardthree';
import { Stack } from '@mui/material';

const CardSection = () => {
  return (
    <>
      <div>
        <h2 style={{ borderBottom: '1px solid #e2e2e2', padding: '5px' }}>
          Non-Veg
        </h2>
      </div>

      <Stack direction="row" gap={3} m={4}>
        <Cardone />
        <Cardtwo />
        <Cardthree />
      </Stack>
    </>
  );
};

export default CardSection;
