import { useState, useRef } from "react";
import usePost from "../../usePost";
import styles from "./styles.module.css";
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBInput,
} from "mdb-react-ui-kit";

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

  //user can close modal if clicked "outside" modal (click is on modal background layer)
  const modalBg = useRef();
  const handleClose = (e) => {
    if (e.target === modalBg.current) {
      setIsModal(false);
    }
  };

  return (
    <div
      ref={modalBg}
      className={styles.modalDarkBg}
      onClick={(e) => {
        handleClose(e);
      }}
    >
      <MDBContainer className={styles.modal}>
        <MDBRow className="f-flex justify-content-end">
          <MDBBtn
            className="btn-close p-2 me-2 mt-2"
            color="none"
            onClick={() => setIsModal(false)}
          ></MDBBtn>
        </MDBRow>

        <MDBRow>
          <MDBCol sm="6" className="text-center">
            <h3 className={`${styles.h3} py-2`}>{selectedMemeData.name}</h3>
            <img
              src={selectedMemeData.url}
              alt={selectedMemeData.name}
              className="figure-img img-fluid z-depth-1"
            />
          </MDBCol>
          {/* {right panel} */}
          <MDBCol sm="6">
            <div className={styles.rightPanel}>
              <form onSubmit={handleSubmit}>
                <p className="text-center">
                  Fill out at least one box before generating meme
                </p>
                <div className={styles.inputGroup}>
                  {Array.from(
                    Array(selectedMemeData.box_count),
                    (field, index) => (
                      <MDBInput
                        label={`Textbox ${index + 1}`}
                        type="text"
                        required
                        key={index}
                        id={selectedMemeData.id}
                        className="my-1 my-sm-4 my-md-5"
                        onChange={(e) => {
                          handleChange(e, index);
                        }}
                      />
                    )
                  )}
                </div>
                {!isFetching ? (
                  <MDBBtn className={styles.submitBtn} type="submit">
                    Make my meme
                  </MDBBtn>
                ) : (
                  <MDBBtn className={styles.submitBtn}>...baking</MDBBtn>
                )}
              </form>
            </div>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </div>
  );
};

export default Modal;
