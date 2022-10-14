import React, { useEffect } from 'react';
import { Box, Button, Card, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useGameStore } from '../store/game';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import DeleteIcon from '@mui/icons-material/Delete';

const Root = () => {
  const [updateHeader, reset] = useGameStore((state) => [
    state.updateHeader,
    state.reset,
  ]);

  const style = {
    padding: 5,
  };
  const btn = {
    borderRadius: '5%',
    boxShadow: '5px 5px 10px 0px #000000',
    marginTop: 1,
    minWidth: '200px',
    svg: { fontSize: '8em' },
  };
  const navigate = useNavigate();

  useEffect(() => {
    updateHeader();
  }, []);

  return (
    <Box
      sx={{
        marginTop: 5,
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
          <Typography color="primary">Blue Team</Typography>
          <Button
            sx={btn}
            variant="contained"
            onClick={() => navigate('/blue/0')}
          >
            <SportsEsportsIcon />
          </Button>
        </Card>
        <Card sx={style}>
          <Typography color="secondary">Red Team</Typography>
          <Button
            sx={btn}
            variant="contained"
            color="secondary"
            onClick={() => navigate('/red/0')}
          >
            <SportsEsportsIcon />
          </Button>
        </Card>
      </Box>
      <Button
        sx={{ marginTop: 3 }}
        variant="contained"
        color="warning"
        onClick={() => reset()}
      >
        <DeleteIcon />
      </Button>
    </Box>
  );
};

export default Root;
