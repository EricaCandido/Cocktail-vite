import styles from "./index.module.scss";

const Menu = ({ menuVisible }) => {
  return (
    <div
      className={`${styles.MenuNotVisible} ${
        menuVisible && styles.MenuVisible
      }`}
    >
      <ul>
        <li>Home</li>
        <li>About us</li>
        <li>Contacts</li>
        <li>Map</li>
        <li>More</li>
      </ul>
    </div>

    // <div className={`${styles.menuContent} ${visible && styles.visible}`}></div>
  );
};

export default Menu;
