import { Box, Typography } from '@mui/material';
import React from 'react';

const HeroText = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        width: '100%',
        height: '350px',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Typography variant="h3">Welcome to React JS Cource</Typography>
    </Box>
  );
};

export default HeroText;
