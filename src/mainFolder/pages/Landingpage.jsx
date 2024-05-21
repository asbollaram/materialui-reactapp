import { Box, Container } from '@mui/material';
import React from 'react';
import Navbar from '../components/NavBar/Navbar';
import HeroSection from '../components/hero/HeroSection';
import AccordionPage from '../components/NavBar/AccordionPage';

const Landingpage = () => {
  return (
    <Container>
      <Box>
        <Navbar />
        <HeroSection />
        <AccordionPage />
      </Box>
    </Container>
  );
};

export default Landingpage;
