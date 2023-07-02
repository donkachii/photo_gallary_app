import React from "react";
import { Typography, Paper, Grid, Box, Rating, Link } from "@mui/material";

const ImageCard = ({ photo, id }) => {
  return (
    <Grid item xs={3}>
      <Link href={id} underline="none">
        <Paper elevation={3}>
          <img src={photo.image} alt="" className="images" />
          <Box padding={1}>
            <Typography variant="subtitle1" component="h2" noWrap>
              {photo.name}
            </Typography>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
              }}
              marginTop={2}
            >
              <Rating
                name="read-only"
                value={photo.rating}
                readOnly
                precision={0.5}
              />
              <Typography variant="body2" component="p" marginLeft={0.5}>
                {photo.rating}
              </Typography>
              <Typography variant="body2" component="p" marginLeft={0.5} noWrap>
                ({photo.numberOfReviews} reviews)
              </Typography>
            </Box>
          </Box>
        </Paper>
      </Link>
    </Grid>
  );
};

export default ImageCard;
