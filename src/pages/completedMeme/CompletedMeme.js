import { useLocation, useNavigate, Link } from "react-router-dom";
import styles from "./styles.module.css";
import downloadImage from "./downloadImage";
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBBtn,
  MDBIcon,
} from "mdb-react-ui-kit";

const CompletedMeme = () => {
  const { state } = useLocation();

  //DOWNLOAD MEME
  const handleDownload = () => {
    downloadImage(state.data.url);
  };

  return (
    <MDBContainer className="my-3 d-flex flex-column justify-content-center">
      <h4 className="text-center">Your meme is ready!</h4>
      <MDBRow>
        <MDBCol className="d-flex flex-column align-items-center">
          <img
            src={state.data.url}
            alt="Custom meme"
            className="figure-img img-fluid z-depth-1 my-3"
          />
        </MDBCol>
      </MDBRow>
      <MDBRow className="justify-content-center my-4">
        <MDBCol
          sm="12"
          md="6"
          lg="4"
          className="d-flex flex-row justify-content-evenly"
        >
          <MDBBtn
            size="lg"
            floating
            style={{ backgroundColor: "#3b5998" }}
            href="#"
            className={styles.icon}
          >
            <MDBIcon fab icon="facebook" size="" />
          </MDBBtn>

          <MDBBtn
            size="lg"
            floating
            style={{ backgroundColor: "#55acee" }}
            href="#"
            className={styles.icon}
          >
            <MDBIcon fab icon="twitter" size="sm" />
          </MDBBtn>

          <MDBBtn
            size="lg"
            floating
            style={{ backgroundColor: "#FF5700" }}
            href="#"
            className={styles.icon}
          >
            <MDBIcon fab icon="reddit" size="sm" />
          </MDBBtn>

          <MDBBtn
            size="lg"
            floating
            style={{ backgroundColor: "#E60023" }}
            href="#"
            className={styles.icon}
          >
            <MDBIcon fab icon="pinterest" size="sm" />
          </MDBBtn>

          <MDBBtn
            size="lg"
            floating
            style={{ backgroundColor: "#ac2bac" }}
            href="#"
            className={styles.icon}
          >
            <MDBIcon fab icon="instagram" size="sm" />
          </MDBBtn>
        </MDBCol>
      </MDBRow>

      <MDBRow>
        <MDBCol className={styles.buttons}>
          <MDBBtn className={styles.downloadBtn} onClick={handleDownload}>
            Save meme
            <MDBIcon fas icon="download" className="ms-1" />
          </MDBBtn>

          <Link
            to="/meme-generator"
            className={`btn rounded hover-shadow ${styles.makeAnotherBtn}`}
            style={{ backgroundColor: "#98c1d9", color: "#262626" }}
          >
            Make another meme
          </Link>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
};

export default CompletedMeme;
