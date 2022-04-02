import Home from "./pages/home/Home";
import CompletedMeme from "./pages/completedMeme/CompletedMeme";
import Layout from "./components/layout/Layout";
import { BrowserRouter, Routes, Route } from "react-router-dom";



function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/meme-generator" element={<Home />} />
          <Route path="/meme-generator/completed-meme" element={<CompletedMeme />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
