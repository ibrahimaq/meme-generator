import React, { useState } from "react";
import Modal from "./modal/Modal";
import useFetch from "../useFetch";


const Home = () => {
  //fetching memes from API
  const { memes, isLoading, isError } = useFetch(
    "https://api.imgflip.com/get_memes"
  );

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



  return (
    <div>
      {isLoading ? (
        <div>isLoading..</div>
      ) : (
        <div>
          {memes.map((meme) => {
            return (
              <img
                src={meme.url}
                alt={meme.name}
                key={meme.id}
                id={meme.id}
                width="200px"
                onClick={handleClick}
                style={{ cursor: "pointer" }}
              />
            );
          })}
        </div>
      )}
      {isModal && (
        <Modal setIsModal={setIsModal} selectedMemeData={selectedMemeData} />
      )}
    </div>
  );
};

export default Home;
