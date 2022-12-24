import React from "react";
import ProjectCard from "./ProjectCard";
import { Grid, Container } from "@mui/material";

function PropagateData(projectType) {
  return (
    <Container>
      <Grid container spacing={3}>
        {projectType.map((type) => (
          <Grid
            item
            key={type.id}
            xs={12}
            md={6}
            lg={4}
            sx={{ display: "flex", justifyContent: "center" }}
          >
            <ProjectCard project={type} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default PropagateData;
