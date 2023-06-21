import "./App.css";
import SearchAppBar from "./components/AppBar";
import ImageCard from "./components/ImageCard";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import photos from "./data.json";
import { Typography } from "@mui/material";

function App() {
  return (
    <div>
      <SearchAppBar />
      <Container sx={{ marginY: 5 }}>
        <Typography variant="h4" component="h2" marginTop={5} marginBottom={3}>
          {photos.name}
        </Typography>

        <Grid container spacing={5}>
          {photos.images.map((photo, i) => (
            <ImageCard photo={photo} id={photo.id} key={i} />
          ))}
        </Grid>
      </Container>
    </div>
  );
}

export default App;
