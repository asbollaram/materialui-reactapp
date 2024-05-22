import * as React from 'react';
import Card from '@mui/material/Card';
import Box from '@mui/material/Box';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import ShareRoundedIcon from '@mui/icons-material/ShareRounded';

export default function HeroText() {
  return (
    <Card variant="outlined" sx={{ maxWidth: 560 }}>
      <Box sx={{ p: 2 }}>
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
        >
          <Typography gutterBottom variant="h6" component="div">
            Learn Web Developmet
          </Typography>
          <Typography gutterBottom variant="h6" component="div">
            <ShareRoundedIcon />
          </Typography>
        </Stack>
        <Typography
          variant="h4"
          sx={{
            backgroundImage:
              'linear-gradient(to right, #3556CF 0%, #CF0F0F  100%)',
            webkitBackgroundClip: 'text',
            backgroundClip: 'text',
            color: 'transparent',
          }}
        >
          MERN FULL Stack Cource
        </Typography>
      </Box>
      <Divider />
      <Box sx={{ p: 2 }}>
        <Typography gutterBottom variant="body2">
          Select Your Course here!
        </Typography>
        <Stack direction="row" spacing={2}>
          <Chip color="primary" label="Download" size="larger" />
          <Chip label="Apply Now" size="larger" color="warning" />
        </Stack>
      </Box>
    </Card>
  );
}
