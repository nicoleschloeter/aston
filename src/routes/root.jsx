import AddIcon from "@mui/icons-material/AddCircle";
import ArrowCircleDownIcon from "@mui/icons-material/ArrowCircleDown";
import DeleteIcon from "@mui/icons-material/Delete";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import SportsEsportsIcon from "@mui/icons-material/SportsEsports";
import VerifiedIcon from "@mui/icons-material/Verified";
import { Box, Button, Card, Typography } from "@mui/material";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useGameStore } from "../store/game";

const Root = () => {
  const [updateHeader, reset, done, extra, getNextQuestion, addExtra] =
    useGameStore((state) => [
      state.updateHeader,
      state.reset,
      state.done,
      state.extra,
      state.getNextQuestion,
      state.addExtra,
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
        <Typography sx={{ fontSize: 40 }} color="primary">
          Blue Team
        </Typography>
        <Typography sx={{ fontSize: 40 }} color="secondary">
          Red Team
        </Typography>
        <Card sx={style}>
          <Typography sx={{ fontSize: 26 }} color="primary">
            Smell & Taste
          </Typography>
          <Button
            sx={btn}
            variant="contained"
            onClick={() => {
              navigate(getNextQuestion("blue"));
            }}
          >
            {done.blue === "" ? <SportsEsportsIcon /> : <VerifiedIcon />}
          </Button>
        </Card>
        <Card sx={style}>
          <Typography sx={{ fontSize: 26 }} color="secondary">
            Smell & Taste
          </Typography>
          <Button
            sx={btn}
            variant="contained"
            color="secondary"
            onClick={() => navigate(getNextQuestion("red"))}
          >
            {done.red === "" ? <SportsEsportsIcon /> : <VerifiedIcon />}
          </Button>
        </Card>
        <Card
          sx={{
            ...style,
            backgroundColor:
              done.blue === "" || done.red === ""
                ? "rgba(0, 0, 0, 0.12)"
                : "error",
          }}
        >
          <Typography
            sx={{ fontSize: 26 }}
            color={done.blue === "" ? "error" : "primary"}
          >
            Touch & Act
          </Typography>
          <Typography
            sx={{ fontSize: 40, marginTop: -1 }}
            color={done.blue === "" ? "error" : "primary"}
          >
            Points: {extra.blue}
          </Typography>
          <Button
            sx={{ ...btn, marginRight: 3 }}
            variant="contained"
            color="warning"
            disabled={extra.blue === 0}
            onClick={() => {
              addExtra("blue", true);
            }}
          >
            <RemoveCircleOutlineIcon />
          </Button>
          <Button
            sx={btn}
            variant="contained"
            disabled={done.blue === ""}
            onClick={() => {
              addExtra("blue");
            }}
          >
            <AddIcon />
          </Button>
        </Card>
        <Card
          sx={{
            ...style,
            backgroundColor:
              done.blue === "" || done.red === ""
                ? "rgba(0, 0, 0, 0.12)"
                : "error",
          }}
        >
          <Typography
            sx={{ fontSize: 26 }}
            color={done.red === "" ? "error" : "secondary"}
          >
            Touch & Act
          </Typography>
          <Typography
            sx={{ fontSize: 40, marginTop: -1 }}
            color={done.red === "" ? "error" : "secondary"}
          >
            Points: {extra.red}
          </Typography>
          <Button
            sx={{ ...btn, marginRight: 3 }}
            variant="contained"
            color="warning"
            disabled={extra.red === 0}
            onClick={() => {
              addExtra("red", true);
            }}
          >
            <RemoveCircleOutlineIcon />
          </Button>
          <Button
            sx={btn}
            variant="contained"
            color="secondary"
            disabled={done.red === ""}
            onClick={() => addExtra("red")}
          >
            <AddIcon />
          </Button>
        </Card>
        <Button
          color="error"
          sx={{
            gridColumn: "1 / span 2",
            marginBottom: 25,
            svg: { fontSize: "9em" },
          }}
          variant="contained"
          disabled={done.blue === "" || done.red === ""}
          onClick={() => {
            navigate("/over");
          }}
        >
          <ArrowCircleDownIcon />
        </Button>
      </Box>
      <Button
        sx={{
          position: "absolute",
          top: "10px",
          left: "auto",
          right: "10px",
        }}
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
