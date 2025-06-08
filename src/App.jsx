import React from "react"; // Pastikan React diimpor
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Layout from "./myporto/Layout";           
import Homepage from "./myporto/Homepage";       
import Aboutpage from "./myporto/Aboutpage";     
import Projectspage from "./myporto/Projectspage"; 

function App() {
  return (
    <BrowserRouter basename="/myportofolio">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Homepage />} />
          <Route path="about" element={<Aboutpage />} />
          <Route path="projects" element={<Projectspage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
