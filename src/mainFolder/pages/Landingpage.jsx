import { Box, Container } from '@mui/material';
import React from 'react';
import Navbar from '../components/NavBar/Navbar';
import HeroSection from '../components/hero/HeroSection';
import AccordionPage from '../components/NavBar/AccordionPage';
import CardSection from '../components/cardSection/CardSection';
import TabsSection from '../components/tabsSection/TabsSection';
import Mainchart from '../components/chartSection/Mainchart';

const Landingpage = () => {
  return (
    <Container>
      <Box>
        <Navbar />
        <HeroSection />
        <AccordionPage />
        <CardSection />
        <TabsSection />
        <Mainchart />
      </Box>
    </Container>
  );
};

export default Landingpage;
