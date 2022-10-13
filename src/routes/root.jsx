import React from 'react';
import { Box, Button, Card, Icon, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const Root = () => {
  const style = {
    padding: 5,
  };
  const btn = {
    minWidth: '200px',
  };
  const navigate = useNavigate();
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
      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '20px',
          maxWidth: '80vw',
          margin: '0 auto',
        }}
      >
        <Card sx={style}>
          <Typography>Blue Team</Typography>
          <Icon name="home" color="white" />
          <Button
            sx={btn}
            variant="contained"
            onClick={() => navigate('/blue/0')}
          >
            Play
          </Button>
        </Card>
        <Card sx={style}>
          <Typography>Red Team</Typography>
          <Icon name="home" color="white" />
          <Button
            sx={btn}
            variant="contained"
            color="secondary"
            onClick={() => navigate('/red/0')}
          >
            Play
          </Button>
        </Card>
      </Box>
    </Box>
  );
};

export default Root;
