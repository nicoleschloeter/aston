import { Box, Button, Card, Typography } from "@mui/material";
import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useGameStore } from "../store/game";

import ArchiveIcon from "@mui/icons-material/Archive";

const End = () => {
  const params = useParams();
  const navigate = useNavigate();
  const { team } = params;
  const isBlueTeam = team === "blue";
  const color = isBlueTeam ? "primary" : "secondary";
  const setScore = useGameStore((state) => state.setScore);

  useEffect(() => {
    setScore(team);
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
      <Card
        sx={{
          padding: 5,
        }}
      >
        <Button
          sx={{
            borderRadius: "25px",
            boxShadow: "5px 5px 10px 0px #000000",
            marginTop: 1,
            minWidth: "70vw",
            minHeight: "300px",
            svg: { fontSize: "8em" },
            ".MuiTypography-root": { color: "white" },
          }}
          color={color}
          variant="contained"
          onClick={() => {
            navigate(`/${team}/reveal`);
          }}
        >
          <Box>
            <>
              <Typography color="primary" sx={{ fontSize: 60 }}>
                {team} team
              </Typography>
              <Typography>Smell & Taste</Typography>
              <ArchiveIcon />
              <Typography sx={{ fontSize: 30 }}>Reveal Score</Typography>
            </>
          </Box>
        </Button>
      </Card>
    </Box>
  );
};

export default End;
