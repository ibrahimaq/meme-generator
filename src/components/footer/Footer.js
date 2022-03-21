import { MDBContainer, MDBIcon } from "mdb-react-ui-kit";
import { Link } from "react-router-dom";
import styles from "./styles.module.css";
const Footer = () => {
  return (
    <footer>
      <MDBContainer fluid className={styles.footer}>
     
        <p>Made by Ibrahim Al-Quraishi</p>

        <Link to="https://github.com/ibrahimaq">
          <MDBIcon fab icon="github" />
        </Link>
   
      </MDBContainer>
    </footer>
  );
};

export default Footer;
