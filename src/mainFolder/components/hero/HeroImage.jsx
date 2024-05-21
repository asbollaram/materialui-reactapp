import { Box } from '@mui/material';
import React from 'react';

const HeroImage = () => {
  return (
    <Box sx={{ width: '550px' }}>
      <img
        src="/public/Assets/studentOne.jpg"
        alt="React js"
        style={{ width: '100%' }}
      />
    </Box>
  );
};

export default HeroImage;
