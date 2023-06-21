import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import SearchAppBar from "./components/AppBar";
import Photo from "./pages/Photo";

function App() {
  return (
    <BrowserRouter>
      <SearchAppBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:id" element={<Photo />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
