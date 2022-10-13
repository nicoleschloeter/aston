import React from 'react';
import {
  Box,
  Button,
  RadioGroup,
  Typography,
  FormControlLabel,
  Radio,
} from '@mui/material';
import { useNavigate, useParams } from 'react-router-dom';
import { useGameStore } from '../store/game';

const Team = () => {
  const navigate = useNavigate();
  const params = useParams();
  const { team, questionId } = params;
  const id = parseInt(questionId, 10);
  const [currentIndex, setAnswer, getQuestions] = useGameStore((state) => [
    state.currentIndex,
    state.setAnswer,
    state.getQuestions,
  ]);

  const game = getQuestions(team, questionId);
  const { title, options, correct, answer } = game;
  const nextPage = id + 1;
  console.log('team', team, '==', game, currentIndex);

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
      <Button variant="contained" onClick={() => navigate('/')}>
        home
      </Button>
      <Typography variant="h2">{team} team</Typography>
      <Typography>
        {title} {nextPage}
      </Typography>
      <RadioGroup
        sx={{ maxWidth: 400, margin: '0 auto' }}
        value={answer}
        onChange={(event, value) => {
          console.log(event, value);
          setAnswer(team, questionId, value);
        }}
      >
        {options.map((item, index) => (
          <FormControlLabel
            key={`option-${index}`}
            value={item}
            control={<Radio />}
            label={item}
          />
        ))}
      </RadioGroup>
      <Button
        variant="contained"
        onClick={() => navigate(`/${team}/${nextPage}`)}
      >
        Next
      </Button>

      <Typography>
        correct answer is {correct} (vs {answer})
      </Typography>
    </Box>
  );
};

export default Team;
