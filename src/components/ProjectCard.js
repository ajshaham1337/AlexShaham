import * as React from 'react';
import { Button, Card, CardContent, CardMedia, Typography, CardActionArea, CardActions } from '@mui/material';

// https://gitlab.com/gifreife/cse183-assignment8-group2/-/tree/main/
// StarIcon import...

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
