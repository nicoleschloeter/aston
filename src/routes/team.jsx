import React, { useEffect } from 'react';
import {
  Box,
  Button,
  RadioGroup,
  Typography,
  FormControlLabel,
  Radio,
} from '@mui/material';
import { useNavigate, useParams } from 'react-router-dom';
import { useGameStore, DEFAULT_ANSWER } from '../store/game';

const Team = () => {
  const navigate = useNavigate();
  const params = useParams();
  const { team, questionId } = params;
  const id = parseInt(questionId, 10);
  const [updateHeader, setAnswer, getQuestions] = useGameStore((state) => [
    state.updateHeader,
    state.setAnswer,
    state.getQuestions,
  ]);

  const game = getQuestions(team, questionId);
  const { title, options, correct, answer } = game;
  const nextPage = id + 1;
  const isBlueTeam = team === 'blue';
  const color = isBlueTeam ? 'primary' : 'secondary';
  console.log('team', answer);

  useEffect(() => {
    updateHeader();
  }, []);

  return (
    <Box
      sx={{
        marginTop: 5,
        alignContent: 'center',
        textAlign: 'center',
      }}
    >
      <Typography
        px={8}
        mb={2}
        sx={{
          display: 'inline-block',
          textTransform: 'uppercase',
          border: '1px dashed',
          borderColor: color,
        }}
        variant="h6"
        color={color}
      >
        {team} team
      </Typography>
      <Typography variant="h3" py={2} mb={2}>
        {title} {nextPage}
      </Typography>
      <RadioGroup
        sx={{
          margin: '0 auto',
          display: 'grid',
          padding: 2,
          gridTemplateColumns: `repeat(${options.length}, min-content)`,
          gap: '20px',
          justifyContent: 'center',
          img: {
            maxWidth: 120,
            height: 'auto',
          },
        }}
        value={answer}
        onChange={(event, value) => {
          console.log(event, value);
          setAnswer(team, questionId, value);
        }}
      >
        {options.map((item, index) => (
          <FormControlLabel
            key={`option-${index}`}
            value={item.name}
            control={<Radio />}
            label={
              <Box>
                {item.src && <img src={item.src} alt="pic" />}
                <Typography
                  variant="h6"
                  color={isBlueTeam ? 'primary.main' : 'secondary.main'}
                >
                  {item.name}
                </Typography>
              </Box>
            }
            sx={{
              svg: { color: isBlueTeam ? 'primary.main' : 'secondary.main' },
              padding: '20px 60px 20px 30px',
              background: 'white',
              maxWidth: 200,
              minHeight: 120,
            }}
          />
        ))}
      </RadioGroup>
      <Button
        variant="contained"
        disabled={answer === DEFAULT_ANSWER}
        sx={{ marginTop: 10, minWidth: 200, fontSize: 20 }}
        color={color}
        onClick={() => navigate(`/${team}/${nextPage}`)}
      >
        Next
      </Button>

      {answer !== DEFAULT_ANSWER && (
        <Typography pt={3} sx={{ fontStyle: 'italic', opacity: 0.2 }}>
          correct: {correct} vs ticked: {answer}
        </Typography>
      )}
    </Box>
  );
};

export default Team;
