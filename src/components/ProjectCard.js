import * as React from 'react';
import { Button, Card, CardContent, CardMedia, Typography, CardActionArea, CardActions } from '@mui/material';

// https://gitlab.com/gifreife/cse183-assignment8-group2/-/tree/main/
// StarIcon import...

function ProjectCard({project}) {
  return (
    <Card elevation={1} sx={{ height: 375, width: 350 }}>
      <CardActionArea sx={{ height: 325 }}>
        <CardMedia component="img" height="155" image={project.picture}/>
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
