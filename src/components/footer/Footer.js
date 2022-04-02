import { MDBContainer, MDBIcon } from "mdb-react-ui-kit";
import { Link } from "react-router-dom";
import styles from "./styles.module.css";
const Footer = () => {
  return (
    <footer className={styles.footer}>
      <MDBContainer fluid className={styles.footerContainer}>
        <p>Made by Ibrahim Al-Quraishi</p>
        <a href="https://github.com/ibrahimaq" rel="noreferrer" target="_blank">
          <MDBIcon fab icon="github" />
        </a>
      </MDBContainer>
    </footer>
  );
};

export default Footer;
