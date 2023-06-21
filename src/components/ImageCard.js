import React from "react";
import { Typography, Paper, Grid, Box, Rating } from "@mui/material";

const ImageCard = ({ photo }) => {
  return (
    <Grid item xs={3}>
      <Paper elevation={3}>
        <img src={photo.image} alt="" className="images" />
        <Box padding={1}>
          <Typography variant="subtitle1" component="h2">
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
            <Typography variant="body2" component="p" marginLeft={0.5}>
              ({photo.numberOfReviews} reviews)
            </Typography>
          </Box>
        </Box>
      </Paper>
    </Grid>
  );
};

export default ImageCard;
