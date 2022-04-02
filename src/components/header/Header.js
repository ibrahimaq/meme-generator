import { MDBContainer, MDBTypography } from "mdb-react-ui-kit";
import styles from "./styles.module.css"
const Header = () => {
    return ( 
        <MDBContainer fluid>
            <div className="d-flex flex-column align-items-center justify-content-center pt-3">
                <MDBTypography tag="h1" className={styles.headerTitle}>Meme Generator</MDBTypography>
            </div>
      </MDBContainer>
     );
}
 
export default Header;