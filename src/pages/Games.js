import React, { useEffect, useState } from 'react';
import { Grid, Container, Toolbar } from "@mui/material"
import ProjectCard from '../components/ProjectCard';

import data from '../data/db.json';

const Games = () => {
  return (
    <Container>
      <Toolbar sx={{minHeight: '20px !important'}}/>
      <Grid container spacing={3} sx={{ flexGrow: 1 }}>
        {data.games.map(game => (
          <Grid item key={game.id} xs={12} md={6} lg={4}>
            <ProjectCard project={game}/>
          </Grid>
        ))}
      </Grid>
      <Toolbar sx={{minHeight: '20px !important'}}/>
    </Container>
  );
}
  
export default Games;
  