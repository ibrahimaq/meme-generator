import React, { useState } from "react";
import Modal from "../../components/modal/Modal";
import useFetch from "../../useFetch";
import styles from "./styles.module.css";
import Masonry from "react-masonry-css";
import { MDBContainer, MDBTypography } from "mdb-react-ui-kit";

const Home = () => {
  //fetching memes from API
  const { memes, isLoading, isError } = useFetch("https://api.imgflip.com/get_memes");
  
  //modal state
  const [isModal, setIsModal] = useState(false);

  //URL of selected meme to show in modal
  const [selectedMemeData, setselectedMemeData] = useState({});

  //pop up modal with selected meme template and input boxes
  const handleClick = (e) => {
    setIsModal(true);
    //finding selected meme id to retrieve from original fetched api object
    const memeID = e.target.getAttribute("id");
    const getMemeData = memes.find((meme) => meme.id === memeID);
    setselectedMemeData(getMemeData);
  };

  const masonryBreakpoints = {
    default: 4,
    1200: 3,
    500: 2,
    300: 1,
  };

  return (
    <section>
      {isError && <p style={{color: "#ffffff"}}>Sorry we were unable to fetch memes at the moment. Refresh or try again later.</p>}
      {isLoading && (
        <MDBContainer style={{color: "#ffffff"}}>
          <p>Loading...</p>
        </MDBContainer>
      ) }
      {memes && 
      (
        <MDBContainer>
          <h4 className="text-center lead my-4">Select a meme to begin</h4>
          <Masonry
            breakpointCols={masonryBreakpoints}
            className={styles.myMasonryGrid}
            columnClassName={styles.myMasonryGridColumn}
          >
            {memes.map((meme) => {
              return (
                <figure key={meme.id} className="text-center">
                  <img
                    src={meme.url}
                    alt={meme.name}
                    id={meme.id}
                    onClick={handleClick}
                    style={{ cursor: "pointer" }}
                    className="image figure-img img-fluid z-depth-1 pointer"
                  />
                  <figcaption className="figure-caption">
                    {meme.name}
                  </figcaption>
                </figure>
              );
            })}
          </Masonry>
        </MDBContainer>
      )}
      {isModal && (
        <Modal setIsModal={setIsModal} selectedMemeData={selectedMemeData} />
      )}
    </section>
  );
};

export default Home;
