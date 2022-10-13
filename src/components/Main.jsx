import React from 'react';
import { Box, Typography } from '@mui/material';

const Main = () => {
  return (
    <Box
      sx={{
        borderTop: '1px solid white',
        marginTop: '20px',
        paddingTop: '20px',
        alignContent: 'center',
        textAlign: 'center',
      }}
    >
      <Typography>main</Typography>
    </Box>
  );
};

export { Main };
