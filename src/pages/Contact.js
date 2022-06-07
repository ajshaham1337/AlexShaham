import React from 'react';
import { Grid, Typography, Container, Toolbar } from "@mui/material"
import { GitHub, Email, Computer } from '@mui/icons-material/'
// import DiscordIcon from '../images/DiscordIcon';

function Contact() {
  return (
    <Container>
      <Toolbar sx={{minHeight: '20px !important'}}/>
      <Typography variant="h4" align="center" color="text.primary" gutterBottom>
        Contact
      </Typography>
      {/* blob here for what to contact for etc... */}
      <Typography variant="h6" align="center" color="text.primary" gutterBottom>
        Feel free to reach out for any potential business inquiries you may have!
      </Typography>
      <Grid container direction="column" alignItems="left">
        <Grid item>
          <Email/> ajshaham@gmail.com
        </Grid>
        <Grid item>
          <GitHub/> https://github.com/ajshaham1337
        </Grid>
        <Grid item>
          <Computer/> Discord: Nuja#1388
        </Grid>
      </Grid>
      <Toolbar sx={{minHeight: '20px !important'}}/>
    </Container>
  );
}
  
export default Contact;
  