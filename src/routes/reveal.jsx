import React from 'react';
import { Box, Button, Card, Typography } from '@mui/material';
import { useGameStore } from '../store/game';
import { useNavigate, useParams } from 'react-router-dom';

const Reveal = () => {
  const params = useParams();
  const navigate = useNavigate();
  const { team } = params;
  const isBlueTeam = team === 'blue';
  const color = isBlueTeam ? 'primary' : 'secondary';
  const done = useGameStore((state) => state.done);

  return (
    <Box
      sx={{
        marginTop: 1,
        paddingTop: '20px',
        alignContent: 'center',
        textAlign: 'center',
      }}
    >
      <Card
        sx={{
          padding: 5,
        }}
      >
        <Button
          sx={{
            borderRadius: '25px',
            boxShadow: '5px 5px 10px 0px #000000',
            marginTop: 1,
            minWidth: '70vw',
            minHeight: '300px',
            svg: { fontSize: '8em' },
            '.MuiTypography-root': { color: 'white' },
          }}
          color={color}
          variant="contained"
          onClick={() => {
            navigate('/');
          }}
        >
          <Box>
            <Typography color="primary" sx={{ fontSize: 60 }}>
              SCORE:
              <br />
              {done[team]}
            </Typography>
          </Box>
        </Button>
      </Card>
    </Box>
  );
};

export default Reveal;
