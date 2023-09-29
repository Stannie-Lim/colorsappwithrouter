import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

import { Routes, Route, Link } from "react-router-dom";

import Color from "./Color";
import Navbar from "./Navbar";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div id="container">
      <h1>Hello React Router!</h1>
      <Navbar />
      <div id="main-section">
        <Routes>
          <Route path="/:color" element={<Color />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
