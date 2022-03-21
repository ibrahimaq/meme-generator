
import Home from "./components/home/Home";
import CompletedMeme from "./components/completedMeme/CompletedMeme";
import Layout from "./components/layout/Layout";
import Footer from "./components/footer/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {MDBContainer} from "mdb-react-ui-kit";

function App() {

 


  return (
    
      <BrowserRouter>
        <Layout>
          <MDBContainer>
              <Routes>
                <Route path = "/meme-generator" element={<Home />} />
                <Route path = "/meme-generator/completed-meme" element={<CompletedMeme  />} />
              </Routes>
          </MDBContainer>
          <Footer />
        </Layout>
        
      </BrowserRouter>
      

    
  );
}

export default App;
