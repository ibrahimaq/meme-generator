import { useState } from "react";
import usePost from "../../usePost";
import styles from "./styles.module.css";
import { useNavigate } from "react-router-dom";

const Modal = ({ setIsModal, selectedMemeData }) => {
  //use box count for selected meme and initialise state with an array of n boxes
  const [caption, setCaption] = useState(
    Array(selectedMemeData.box_count).fill("")
  );

  //storing text state --
  const handleChange = (e, index) => {
    const text = e.target.value || "";
    //now update caption depending on which index (input field we are on)
    setCaption(
      //if user is on the same input field then return the text, else caption.
      caption.map((caption, i) => {
        if (index === i) {
          return text;
        } else {
          return caption;
        }
      })
    );
  };

  const { getMeme, isFetching } = usePost();

  //////// SUBMIT /////////
  const handleSubmit = (e) => {
    e.preventDefault();
    ///creating new form and populating it with details
    const formData = new FormData();
    formData.append("template_id", selectedMemeData.id);
    formData.append("username", process.env.REACT_APP_IMGFLIP_USERNAME);
    formData.append("password", process.env.REACT_APP_IMGFLIP_PASSWORD);
    caption.forEach((cap, index) =>
      formData.append(`boxes[${index}][text]`, cap)
    );

    //posting request to API
    getMeme(formData);
  };

  return (
    <div className={styles.modalDarkBg}>
      <div className={styles.modal}>
        <button onClick={() => setIsModal(false)}>X</button>
        <div className={styles.content}>
          <img
            src={selectedMemeData.url}
            alt={selectedMemeData.name}
            width="250px"
          />

          {/* {right panel} */}
          <div className={styles.rightPanel}>
            <form onSubmit={handleSubmit}>
              {Array.from(Array(selectedMemeData.box_count), (field, index) => (
                <input
                  type="text"
                  key={index}
                  id={selectedMemeData.id}
                  onChange={(e) => {
                    handleChange(e, index);
                  }}
                />
              ))}
              {!isFetching ? (
                <button type="submit">Make my meme</button>
              ) : (
                <button>...baking</button>
              )}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
