import React from "react";
import ImageCard from "../components/ImageCard";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import photos from "../data.json";
import { Typography } from "@mui/material";

const Home = () => {
  return (
    <div>
      <Container sx={{ marginY: 5 }}>
        <Typography variant="h4" component="h2" marginTop={5} marginBottom={3}>
          {photos.name}
        </Typography>

        <Grid
          container
          spacing={{ xs: 1, sm: 3, md: 5 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
        >
          {photos.images.map((photo, i) => (
            <ImageCard photo={photo} id={photo.id} key={i} />
          ))}
        </Grid>
      </Container>
    </div>
  );
};

export default Home;
