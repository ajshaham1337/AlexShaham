import React from "react";
import { Box, Toolbar } from "@mui/material";
import PropagateData from "../PropagateData";
import data from "../../data/db.json";

function GameDev() {
  return (
    <div className="GameDev">
      <Toolbar sx={{ minHeight: "20px !important" }} />
      <Box sx={{ width: "100%" }}>{PropagateData(data.games)}</Box>
    </div>
  );
}

export default GameDev;
