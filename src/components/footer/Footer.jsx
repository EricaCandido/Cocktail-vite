import styles from "./index.module.scss";
import { Link } from "react-router-dom";
import { FiPhoneCall } from "react-icons/fi";

const Footer = () => {
  return (
    <div className={styles.Footer}>
      <div className={styles.wrapper}>
        <div className={styles.links}>
          <Link to="about-us">About us</Link>
          <Link to="about-us">Contacts</Link>

          <p>Google maps</p>
        </div>

        <div className={styles.text}>
          <p>Cocktails by ******</p>
          <p>Partita Iva: ******</p>
          <p>
            <FiPhoneCall /> 333 22 55 77 111
          </p>
          <p>Via Roma, 5.</p>
        </div>
      </div>
      <p className={styles.rights}>
        Createdy by Erica Candido. All rights reserved.
      </p>
    </div>
  );
};

export default Footer;
