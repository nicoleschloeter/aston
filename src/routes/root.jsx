import DeleteIcon from "@mui/icons-material/Delete";
import SportsEsportsIcon from "@mui/icons-material/SportsEsports";
import { Box, Button, Card, Typography } from "@mui/material";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useGameStore } from "../store/game";

const Root = () => {
  const [updateHeader, reset, done, getNextQuestion] = useGameStore((state) => [
    state.updateHeader,
    state.reset,
    state.done,
    state.getNextQuestion,
  ]);

  const style = {
    padding: 5,
  };
  const btn = {
    borderRadius: "5%",
    boxShadow: "5px 5px 10px 0px #000000",
    marginTop: 1,
    minWidth: "200px",
    svg: { fontSize: "8em" },
  };
  const score = {
    color: "white",
    fontSize: 36,
    padding: 3.5,
  };
  const navigate = useNavigate();

  useEffect(() => {
    updateHeader();
  }, []);

  return (
    <Box
      sx={{
        marginTop: 1,
        paddingTop: "20px",
        alignContent: "center",
        textAlign: "center",
      }}
    >
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "20px",
          maxWidth: "80vw",
          margin: "0 auto",
        }}
      >
        <Card sx={style}>
          <Typography color="primary">Blue Team</Typography>
          <Button
            sx={btn}
            variant="contained"
            onClick={() => {
              navigate(getNextQuestion("blue"));
            }}
          >
            {done.blue === "" || done.red === "" ? (
              <SportsEsportsIcon />
            ) : (
              <Typography sx={score}>{done.blue}</Typography>
            )}
          </Button>
        </Card>
        <Card sx={style}>
          <Typography color="secondary">Red Team</Typography>
          <Button
            sx={btn}
            variant="contained"
            color="secondary"
            onClick={() => navigate(getNextQuestion("red"))}
          >
            {done.blue === "" || done.red === "" ? (
              <SportsEsportsIcon />
            ) : (
              <Typography sx={score}>{done.red}</Typography>
            )}
          </Button>
        </Card>
      </Box>
      <Button
        sx={{ position: "absolute", bottom: 15, left: "auto", right: "auto" }}
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
