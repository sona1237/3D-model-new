import { useState } from "react";
import ShowCase from "./components/ShowCase";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import FileComponent from "./components/FileComponent";
import AllModelsPage from "./components/AllModelsPage";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<FileComponent />} />
        <Route exact path="/show-case" element={<ShowCase />} />
        <Route path="/all/models" element={<AllModelsPage />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
