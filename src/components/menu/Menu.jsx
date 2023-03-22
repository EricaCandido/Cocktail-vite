import styles from "./index.module.scss";

const Menu = () => {
  return (
    <div className={styles.Menu}></div>
    // <div className={`${styles.menuContent} ${visible && styles.visible}`}></div>
  );
};

export default Menu;
