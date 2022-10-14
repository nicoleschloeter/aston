import React from 'react';
import { Box, Button, Typography } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

const Header = (logo) => {
  console.log(' window.location', window.location);
  return (
    <Box
      component="header"
      className="header"
      pb={2}
      sx={{ borderBottom: '1px solid white' }}
    >
      <img src={logo.logo} className="App-logo" alt="logo" />
      <Typography sx={{ paddingTop: 3, fontSize: 30 }}>
        Aston-Rio’s 8th birthday party.
      </Typography>
      <Button
        variant="contained"
        color="warning"
        onClick={() => (window.location = '/')}
        sx={{ position: 'absolute', left: 25, top: 25 }}
      >
        <MenuIcon />
      </Button>
    </Box>
  );
};

export { Header };
