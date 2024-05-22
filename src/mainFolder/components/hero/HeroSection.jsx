import { Box, Stack } from '@mui/material';
import React from 'react';
import HeroText from './HeroText';
import HeroImage from './HeroImage';

const HeroSection = () => {
  return (
    <Stack
      direction="row"
      spacing={2}
      justifyContent="space-between"
      alignItems="center"
      mt={1}
    >
      <Box sx={{ flex: '2' }}>
        <HeroText />
      </Box>
      <Box sx={{ flex: '2' }}>
        <HeroImage />
      </Box>
    </Stack>
  );
};

export default HeroSection;
