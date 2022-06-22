import React from 'react';
import { Box, Tabs, Tab, Grid, Container } from '@mui/material'
import PropTypes from 'prop-types'
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import WebIcon from '@mui/icons-material/Web';

import ProjectCard from '../components/ProjectCard';

import TabContext from '../utility/TabContext';

import data from '../data/db.json';

import qoth from '../images/qoth.png';
import wordlecube from '../images/wordlecube.png';
import keepieuppies from '../images/keepieuppies.png';
import puffedup from '../images/puffedup.png';
import barf from '../images/barf.png';
import restrosu from '../images/retrosu.png';
import beastwithin from '../images/beastwithin.png';
import fakebookmarketplace from '../images/fakebookmarketplace.png';
import portfolio from '../images/portfolio.png';
import emailapp from '../images/emailapp.png';
import calendarapp from '../images/calendarapp.png';
import cloato from '../images/cloato.png';
console.log(qoth, wordlecube, keepieuppies, puffedup, barf, restrosu, beastwithin, fakebookmarketplace, portfolio, cloato, emailapp, calendarapp);

// <Toolbar sx={{minHeight: '20px !important'}}/>

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          {children}
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

function PropagateData(projectType) {
  return (
    <Container>
      <Grid container spacing={3}>
        {projectType.map(type => (
          <Grid item key={type.id} xs={12} md={6} lg={4} sx={{ display: 'flex', justifyContent: 'center' }}>
            <ProjectCard project={type}/>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

function Portfolio() {
  const { tab, setTab } = React.useContext(TabContext);

  const handleChange = (event, newValue) => {
    setTab(newValue);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs value={tab} onChange={handleChange} centered aria-label="tabs">
          <Tab icon={<SportsEsportsIcon/>} label="Games" {...a11yProps(0)} />
          <Tab icon={<WebIcon/>} label="Tools" {...a11yProps(1)} />
        </Tabs>
      </Box>
      <TabPanel value={tab} index={0}>
        {PropagateData(data.games)}
      </TabPanel>
      <TabPanel value={tab} index={1}>
        {PropagateData(data.tools)}
      </TabPanel>
    </Box>
  );
}
  
export default Portfolio;
  