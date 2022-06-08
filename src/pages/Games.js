import React from 'react';
import { Typography, Grid, Container, Toolbar } from "@mui/material"

import ProjectCard from '../components/ProjectCard';

import data from '../data/db.json';
import qoth from '../images/qoth.png';
import wordlecube from '../images/wordlecube.png';
import keepieuppies from '../images/keepieuppies.png';
import puffedup from '../images/puffedup.png';
import barf from '../images/barf.png';
import restrosu from '../images/retrosu.png';
import beastwithin from '../images/beastwithin.png';

console.log(qoth, wordlecube, keepieuppies, puffedup, barf, restrosu, beastwithin);

function Games() {
  return (
    <Container>
      <Toolbar sx={{minHeight: '20px !important'}}/>
      <Typography variant="h5" align="center" color="text.primary" gutterBottom>
        GAMES
      </Typography>
      <Grid container spacing={3}>
        {data.games.map(game => (
          <Grid item key={game.id} xs={12} md={6} lg={4} sx={{ display: 'flex', justifyContent: 'center' }}>
            <ProjectCard project={game}/>
          </Grid>
        ))}
      </Grid>
      <Toolbar sx={{minHeight: '20px !important'}}/>
    </Container>
  );
}
  
export default Games;
  