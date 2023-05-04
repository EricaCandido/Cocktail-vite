import styles from "./index.module.scss";
import { Link } from "react-router-dom";

const Menu = ({ menuVisible }) => {
  return (
    <div
      className={`${styles.MenuNotVisible} ${
        menuVisible && styles.MenuVisible
      }`}
    >
      <ul>
        <li>
          <Link to="/"> Home</Link>
        </li>
        <li>
          <Link to="/about-us"> About us</Link>
        </li>
        <li>Contacts</li>
        <li>Map</li>
        <li>More</li>
      </ul>
    </div>

    // <div className={`${styles.menuContent} ${visible && styles.visible}`}></div>
  );
};

export default Menu;
