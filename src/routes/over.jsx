import { Box, Button, Card, Typography } from "@mui/material";
import AnimatedNumbers from "react-animated-numbers";

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useGameStore } from "../store/game";

const Over = () => {
  const navigate = useNavigate();
  const [done, extra, total] = useGameStore((state) => [
    state.done,
    state.extra,
    state.total,
  ]);

  const [numBlue] = useState(total.blue);
  const [numRed] = useState(total.red);

  return (
    <Box
      sx={{
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: "20px",
        marginTop: 1,
        padding: "40px",
        alignContent: "center",
        textAlign: "center",
      }}
    >
      <Card
        sx={{
          padding: 5,
        }}
      >
        <Button
          sx={{
            borderRadius: "25px",
            boxShadow: "5px 5px 10px 0px #000000",
            marginTop: 3,
            minWidth: "30vw",
            minHeight: "300px",
            svg: { fontSize: "8em" },
            ".MuiTypography-root": { color: "white" },
          }}
          color="primary"
          variant="contained"
          onClick={() => {
            navigate("/");
          }}
        >
          <Box>
            <Typography
              color="primary"
              sx={{
                fontSize: 50,
                paddingTop: 2,
                borderBottom: "1px dashed white",
              }}
            >
              Blue Team
            </Typography>
            <Typography color="primary" sx={{ fontSize: 46 }}>
              {done.blue}
            </Typography>
            <Typography sx={{ fontSize: 46, borderBottom: "1px dashed white" }}>
              Extra: {extra.blue}
            </Typography>
            <Box
              sx={{
                marginLeft: 10,
                position: "relative",
              }}
            >
              <AnimatedNumbers
                animateToNumber={numBlue}
                fontStyle={{ fontSize: 100 }}
                configs={(number, index) => {
                  return { mass: 1, tension: 230 * (index + 1), friction: 140 };
                }}
              ></AnimatedNumbers>
            </Box>
          </Box>
        </Button>
      </Card>
      <Card
        sx={{
          padding: 5,
        }}
      >
        <Button
          sx={{
            borderRadius: "25px",
            boxShadow: "5px 5px 10px 0px #000000",
            marginTop: 3,
            minWidth: "30vw",
            minHeight: "300px",
            svg: { fontSize: "8em" },
            ".MuiTypography-root": { color: "white" },
          }}
          color="secondary"
          variant="contained"
          onClick={() => {
            navigate("/");
          }}
        >
          <Box>
            <Typography
              color="primary"
              sx={{
                fontSize: 50,
                paddingTop: 2,
                borderBottom: "1px dashed white",
              }}
            >
              Red Team
            </Typography>
            <Typography color="primary" sx={{ fontSize: 46 }}>
              {done.red}
            </Typography>
            <Typography sx={{ fontSize: 46, borderBottom: "1px dashed white" }}>
              Extra: {extra.red}
            </Typography>
            <Box
              sx={{
                marginLeft: 10,
                position: "relative",
              }}
            >
              <AnimatedNumbers
                animateToNumber={numRed}
                fontStyle={{ fontSize: 100 }}
                configs={(number, index) => {
                  return { mass: 1, tension: 230 * (index + 1), friction: 140 };
                }}
              ></AnimatedNumbers>
            </Box>
          </Box>
        </Button>
      </Card>
    </Box>
  );
};

export default Over;
