import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Box, Button, Typography } from '@mui/material';
import { useGameStore } from '../store/game';

import FavoriteIcon from '@mui/icons-material/Favorite';
import HeartBrokenIcon from '@mui/icons-material/HeartBroken';

export const Lifeline = ({ color, team }) => {
  const [heartsRed, setHeartsRed] = useState([true, true, true]);
  const [heartsBlue, setHeartsBlue] = useState([true, true, true]);
  const [lives, useLive] = useGameStore((state) => [
    state.lives,
    state.useLive,
  ]);

  const hasLives = team === 'red' ? lives.red > 0 : lives.blue > 0;

  const sx = {
    display: 'inline-block',
  };

  useEffect(() => {
    setHeartsRed(
      [...Array(3).keys()].map((i) => {
        return lives.red > i;
      })
    );
    setHeartsBlue(
      [...Array(3).keys()].map((i) => {
        return lives.blue > i;
      })
    );
  }, [lives]);

  return (
    <Box
      sx={{
        border: '3px dashed',
        borderColor: (theme) => theme.palette[color].main,
        display: 'grid',
        gridTemplateColumns: '3fr 1fr 3fr',
        alignItems: 'center',
      }}
    >
      <Typography
        sx={{
          textTransform: 'uppercase',
        }}
        variant="h4"
        color={color}
      >
        {team} team
      </Typography>

      <Button
        disabled={!hasLives}
        variant="contained"
        color={color}
        onClick={() => useLive(team)}
      >
        use {team} live
      </Button>

      <Box
        sx={{
          paddingBottom: 1,
          alignContent: 'center',
          textAlign: 'center',
        }}
      >
        <Typography variant="h6" color={color}>
          LIVES
        </Typography>
        <Typography variant="h6" color={color} sx={sx}>
          {heartsRed.map((show, index) =>
            show ? (
              <FavoriteIcon color="secondary" key={index} />
            ) : (
              <HeartBrokenIcon color="error" key={index} />
            )
          )}
          &nbsp;
          {heartsBlue.map((show, index) =>
            show ? (
              <FavoriteIcon color="primary" key={index} />
            ) : (
              <HeartBrokenIcon color="error" key={index} />
            )
          )}
        </Typography>
      </Box>
    </Box>
  );
};

Lifeline.propTypes = {
  color: PropTypes.string.isRequired,
  team: PropTypes.string.isRequired,
};
