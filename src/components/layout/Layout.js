import { MDBContainer, MDBTypography } from "mdb-react-ui-kit";
import styles from "./styles.module.css";
const Layout = ({ children }) => {
  return (
    <>
      <MDBContainer fluid className={`${styles.BgImage}`}>
        <div className="d-flex flex-column align-items-center justify-content-center my-4">
          <MDBTypography tag="h1">Meme Generator</MDBTypography>
        </div>
      </MDBContainer>
      {children}
    </>
  );
};

export default Layout;
