import React, { useEffect, useState } from 'react';
import { Grid, Container, Toolbar } from "@mui/material"
import ProjectCard from '../components/ProjectCard';

const Games = () => {
  const [games, setGames] = useState([])

  console.log('part 1: ', Object.keys(games));
  useEffect(() => {
    fetch('/data/db.json')
      .then(response => response.json())
      .then(({ games }) => games)
      .then(data => setGames(data))
  }, []);
  console.log('part 2: ', Object.keys(games));

  return (
    <Container>
      <Toolbar sx={{minHeight: '20px !important'}}/>
      <Grid container spacing={3} sx={{ flexGrow: 1 }}>
        {games.map(game => (
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
  