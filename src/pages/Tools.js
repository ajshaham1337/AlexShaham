import React from 'react';
import { Typography, Grid, Container, Toolbar } from "@mui/material"

import ProjectCard from '../components/ProjectCard';

import data from '../data/db.json';
import fakebookmarketplace from '../images/fakebookmarketplace.png';
import portfolio from '../images/portfolio.png';
import emailapp from '../images/emailapp.png';
import calendarapp from '../images/calendarapp.png';

console.log(fakebookmarketplace, portfolio, emailapp, calendarapp);

function Tools() {
  return (
    <Container>
      <Toolbar sx={{minHeight: '20px !important'}}/>
      <Typography variant="h4" align="center" color="text.primary" gutterBottom>
        Tools
      </Typography>
      <Grid container spacing={3}>
        {data.tools.map(tool => (
          <Grid item key={tool.id} xs={12} md={6} lg={4} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <ProjectCard project={tool}/>
          </Grid>
        ))}
      </Grid>
      <Toolbar sx={{minHeight: '20px !important'}}/>
    </Container>
  );
}
  
export default Tools;
  