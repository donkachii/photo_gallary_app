import { Box, Container, Typography } from "@mui/material";
import React from "react";
import QuiltedImageList from "../components/ImageCollage";

const Photo = () => {
  return (
    <div>
      <Container sx={{ width: 900 }}>
        <Typography variant="h3" component="h2" marginTop={5}>
          Kids Playground
        </Typography>
        <Box marginTop={3} sx={{ display: "flex" }}>
          <img
            src="https://media.timeout.com/images/105124791/750/422/image.jpg"
            alt=""
            height={325}
          />
          <QuiltedImageList />
        </Box>
        <Box>
          <Typography variant="h6" component="h4" marginTop={3}>
            Photo Description
          </Typography>
          <Typography variant="paragraph" component="p" marginTop={2}>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit
            voluptates rem quos delectus debitis earum modi, ipsum veritatis.
            Perferendis officiis nobis, aut hic praesentium nulla vero, possimus
            omnis reprehenderit blanditiis quis incidunt minima voluptatibus
            illum quam corporis libero fugiat doloremque. Lorem ipsum dolor sit
            amet consectetur, adipisicing elit. Exercitationem officiis commodi
            beatae animi incidunt necessitatibus aut provident ad ex. Saepe!
          </Typography>
        </Box>
      </Container>
    </div>
  );
};

export default Photo;
