import styles from "./styles.module.css";
import Header from "../header/Header"
import Footer from "../footer/Footer"


const Layout = ({ children }) => {
  return (
    <div className={styles.container}>
      <Header />
      <div className={styles.content}>
        {children}
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
