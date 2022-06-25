import * as React from 'react';
import { Button, Card, CardContent, CardMedia, Typography, CardActionArea, CardActions } from '@mui/material';

// https://gitlab.com/gifreife/cse183-assignment8-group2/-/tree/main/
// StarIcon import...

// "picture": "/Portfolio/static/media/qoth.681ba46a5db2c31bd98c.png", 
// "picture": "/Portfolio/static/media/wordlecube.fb30520e87484eb76a7b.png", 
// "picture": "/Portfolio/static/media/keepieuppies.a634417d981c01d5fa23.png", 
// "picture": "/Portfolio/static/media/puffedup.392dda579e0e6a01543b.png",
// "picture": "/Portfolio/static/media/puffedup.392dda579e0e6a01543b.png",
// "picture": "/Portfolio/static/media/barf.5e44d3bd5e86a1ff0c70.png",
// "picture": "/Portfolio/static/media/retrosu.99e5a7bcc4d50e7299f8.png",
// "picture": "/Portfolio/static/media/beastwithin.975507d78661f6570e4d.png",
// "picture": "/Portfolio/static/media/fakebookmarketplace.2206970401e33505e0c8.png", 
// "picture": "/Portfolio/static/media/portfolio.91d700d5df1639177d56.png", 
// "picture": "/Portfolio/static/media/cloato.0c5de7b43d72dea80f87.png",
// "picture": "/Portfolio/static/media/emailapp.5738e8e26dde841f49be.png", 
// "picture": "/Portfolio/static/media/calendarapp.2098d88ce41eda913f62.png", 

// /* eslint-disable */
import qoth from '../images/qoth.png';
import wordlecube from '../images/wordlecube.png';
import keepieuppies from '../images/keepieuppies.png';
import puffedup from '../images/puffedup.png';
import barf from '../images/barf.png';
import retrosu from '../images/retrosu.png';
import beastwithin from '../images/beastwithin.png';
import fakebookmarketplace from '../images/fakebookmarketplace.png';
import portfolio from '../images/portfolio.png';
import emailapp from '../images/emailapp.png';
import calendarapp from '../images/calendarapp.png';
import cloato from '../images/cloato.png';
// /* eslint-enable */

const imageDB = {
  'qoth': qoth,
  'wordlecube': wordlecube,
  'keepieuppies': keepieuppies,
  'puffedup': puffedup,
  'barf': barf,
  'retrosu': retrosu,
  'beastwithin': beastwithin,
  'fakebookmarketplace': fakebookmarketplace,
  'portfolio': portfolio,
  'emailapp': emailapp,
  'calendarapp': calendarapp,
  'cloato': cloato
};

function ProjectCard({project}) {
  return (
    <Card elevation={1} sx={{ height: 375, width: 350 }}>
      <CardActionArea sx={{ height: 325 }}>
        <CardMedia component="img" height="155" image={imageDB[project.picture]}/>
        <CardContent>
          <Typography gutterBottom variant="h5">
            {project.title}
          </Typography>
          <Typography gutterBottom>
            {project.role}
          </Typography>
          <Typography gutterBottom>
            {project.code}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {project.description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions sx={{ display: 'flex', justifyContent: 'center' }}>
        <Button href={project.link} target="_blank" variant="outlined">
          Playable Link
        </Button>
      </CardActions>
    </Card>
  );
}

export default ProjectCard;
