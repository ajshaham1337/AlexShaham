import React from 'react';
import { Typography, Grid, Container, Toolbar } from "@mui/material"

import ProjectCard from '../components/ProjectCard';

import data from '../data/db.json';
import fakebookmarketplace from '../images/fakebookmarketplace.png';
import portfolio from '../images/portfolio.png';
import emailapp from '../images/emailapp.png';
import calendarapp from '../images/calendarapp.png';
import cloato from '../images/cloato.png';

console.log(fakebookmarketplace, portfolio, cloato, emailapp, calendarapp);

function Tools() {
  return (
    <Container>
      <Toolbar sx={{minHeight: '20px !important'}}/>
      <Typography variant="h5" align="center" color="text.primary" gutterBottom>
        TOOLS
      </Typography>
      <Grid container spacing={3}>
        {data.tools.map(tool => (
          <Grid item key={tool.id} xs={12} md={6} lg={4} sx={{ display: 'flex', justifyContent: 'center' }}>
            <ProjectCard project={tool}/>
          </Grid>
        ))}
      </Grid>
      <Toolbar sx={{minHeight: '20px !important'}}/>
    </Container>
  );
}
  
export default Tools;
  