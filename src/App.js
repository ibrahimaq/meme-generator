
import Home from "./components/Home";
import CompletedMeme from "./components/CompletedMeme";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";

function App() {

 


  return (
    
      <BrowserRouter>
      
        <Routes>
          <Route path = "/" element={<Home />} />
          <Route path = "/completed-meme" element={<CompletedMeme  />} />
        </Routes>
      
      </BrowserRouter>
      

    
  );
}

export default App;
