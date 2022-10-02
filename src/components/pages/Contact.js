import React from 'react';
import { Link, Button, Grid, Typography, Container, Toolbar } from "@mui/material"
import { GitHub, Email, Computer } from '@mui/icons-material/'
// import DiscordIcon from '../images/DiscordIcon';

import resume from '../../images/resume.pdf';

function Contact() {
  return (
    <div className='Contact'>
      {/* <TopBar /> */}
      <Container>
        <Toolbar sx={{minHeight: '15px !important'}}/>
        <Typography variant="h6" align="center" color="text.secondary" gutterBottom>
          I am currently looking for work opportunities:
          <Link href={resume} target="_blank" underline="none"> RESUME</Link>
        </Typography>
        <Typography variant="h6" align="center" color="text.secondary" gutterBottom>
          Feel free to reach out to me for any business or gaming inquiries you may have!
        </Typography>
        <Grid container>
          <Grid item xs={12} md={6} lg={4} sx={{ display: 'flex', justifyContent: 'center' }}>
            <Grid container direction="column" alignItems="center">
              <Button><Email sx={{ fontSize: '100px' }} /></Button>
              <Typography /> Email: ajshaham@gmail.com
            </Grid>
          </Grid>
          <Grid item xs={12} md={6} lg={4} sx={{ display: 'flex', justifyContent: 'center' }}>
            <Grid container direction="column" alignItems="center">
              <Button><GitHub sx={{ fontSize: '100px' }} /></Button>
              <Typography /> GitHub: https://github.com/ajshaham1337
            </Grid>
          </Grid>
          <Grid item xs={12} md={6} lg={4} sx={{ display: 'flex', justifyContent: 'center' }}>
            <Grid container direction="column" alignItems="center">
              <Button><Computer sx={{ fontSize: '100px' }} /></Button>
              <Typography /> Discord: Nuja#1388
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}
  
export default Contact;
  