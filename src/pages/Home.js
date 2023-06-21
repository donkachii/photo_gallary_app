import React from "react";
import ImageCard from "../components/ImageCard";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import photos from "../data.json";
import { Typography } from "@mui/material";

const Home = ({ filter }) => {
  const filteredPhotos = photos.images.filter((item) =>
    item.name.toLowerCase().includes(filter.toLowerCase())
  );

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
          {filteredPhotos.length > 0 ? (
            filteredPhotos.map((photo, i) => (
              <ImageCard photo={photo} id={photo.id} key={i} />
            ))
          ) : (
            <Grid item>
              <Typography
                variant="paragraph"
                component="p"
                marginTop={3}
                marginBottom={3}
              >
                No pictures found from the search
              </Typography>
            </Grid>
          )}
        </Grid>
      </Container>
    </div>
  );
};

export default Home;
