import React from 'react';
import { List, ListItem, ListItemText, Box, Grid, Typography, Container, Toolbar } from "@mui/material"

function About() {
  return (
    <div className='About'>
      {/* <TopBar /> */}
      <Container>
        <Toolbar sx={{minHeight: '20px !important'}}/>
        <Typography variant="h5" align="center" color="text.primary" gutterBottom>
          ABOUT
        </Typography>
        <Typography variant="h6" align="center" color="text.secondary" gutterBottom>
          I am a fresh graduate from the University of California, Santa Cruz with a B.S. in Computer Science: Game Design...
        </Typography>
        <Toolbar sx={{minHeight: '20px !important'}}/>
        <Grid container>
          {/* all board/card games played */}
          <Grid item xs={12} md={6} lg={4} sx={{ display: 'flex', justifyContent: 'center' }}>
            <Grid container direction="column" alignItems="center">
              <Typography>Games Played List (Digital/Analog) ???</Typography>
              <Box sx={{ width: '350px', backgroundColor: '#000000', border: '1px solid white' }}>
                {/* https://mui.com/material-ui/react-list/ */}
                <List>
                    <ListItem>
                      <ListItemText primary="WoW Classic"/>
                    </ListItem>
                    <ListItem>
                      <ListItemText primary="LoL"/>
                    </ListItem>
                    <ListItem>
                      <ListItemText primary="..."/>
                    </ListItem>
                </List>
              </Box>
            </Grid>
          </Grid>
          {/* WoW */}
          <Grid item xs={12} md={6} lg={4} sx={{ display: 'flex', justifyContent: 'center' }}>
            <Grid container direction="column" alignItems="center">
              <Typography>World of Warcraft Achievements</Typography>
              <Box sx={{ width: '350px', backgroundColor: '#000000', border: '1px solid white' }}>
                <List>
                  <ListItem>
                    <ListItemText primary="Co Guild Master of a semi-hardcore guild (8/2019 - 6/2021): Unleashed - Rattlegore (US West)"/>
                  </ListItem>
                  <ListItem>
                    <ListItemText primary="Lead a group of 40 people in a high stress environment to success in terms of both speed and execution."/>
                  </ListItem>
                  <ListItem>
                    <ListItemText primary="Managed guild affairs, including player recruitment, compensation, retention, coaching, and happiness."/>
                  </ListItem>
                  <ListItem>
                    <ListItemText primary="Performed individually at the highest level, as determined quantitatively through the official game logs (which display quantile performance relative to others): Warrior & Shaman"/>
                  </ListItem>
                  <ListItem>
                    <ListItemText primary="Cleared the game's hardest dungeon, notorious for defeating most players/guilds or even taking numerous days to complete for those that do, in an impressive speed of 1H 22M 17S: Raid Log"/>
                  </ListItem>
                </List>
              </Box>
            </Grid>
          </Grid>
          {/* LoL */}
          <Grid item xs={12} md={6} lg={4} sx={{ display: 'flex', justifyContent: 'center' }}>
            <Grid container direction="column" alignItems="center">
              <Typography>League of Legends Achievements</Typography>
              <Box sx={{ width: '350px', backgroundColor: '#000000', border: '1px solid white' }}>
                <List>
                  <ListItem>
                    <ListItemText primary="Competitive Director for UCSC’s LoL Club (5/2019 - 10/2020)."/>
                  </ListItem>
                  <ListItem>
                    <ListItemText primary="Managed the varsity collegiate team, coordinated scrimmages/games, coached players, and managed the rosters for about a dozen junior varsity teams."/>
                  </ListItem>
                  <ListItem>
                    <ListItemText primary="Managed the LoL community discord for the school, and hosted several university-wide intramural tournaments and student meetups."/>
                  </ListItem>
                  <ListItem>
                    <ListItemText primary="Mid-laner and captain for UCSC's varsity team (6/2019-5/2021)."/>
                  </ListItem>
                  <ListItem>
                    <ListItemText primary="Played the game since 2009, and in numerous high-tier amateur tournaments: My Account"/>
                  </ListItem>
                </List>
              </Box>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}
  
export default About;
  