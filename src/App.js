import "./App.css";
import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import SearchAppBar from "./components/AppBar";
import Photo from "./pages/Photo";

function App() {
  const [filter, setFilter] = useState("");
  return (
    <BrowserRouter>
      <SearchAppBar setFilter={setFilter} filter={filter} />
      <Routes>
        <Route
          path="/"
          element={<Home setFilter={setFilter} filter={filter} />}
        />
        <Route
          path="/:id"
          element={<Photo setFilter={setFilter} filter={filter} />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
