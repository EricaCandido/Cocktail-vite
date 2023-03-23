import styles from "./index.module.scss";
import { RxHamburgerMenu } from "react-icons/rx";

const Hero = ({ setCategory, setMenuVisibility, setReservationVisibility }) => {
  const onHandleFilter = (category) => {
    setCategory(category);
  };

  const onHandleMenuVisibility = () => {
    setMenuVisibility((prev) => !prev);
  };

  const onHandleReservationVisibility = () => {
    setReservationVisibility(true);
  };

  return (
    <div className={styles.Hero}>
      <div className={styles.nav}>
        <p onClick={onHandleReservationVisibility} className={styles.booking}>
          Book a table
        </p>
        <RxHamburgerMenu
          className={styles.hamburger}
          onClick={onHandleMenuVisibility}
        />
      </div>

      <div className={styles.titleOne}>
        <p>Strong</p>
        <p className={styles.titleLight}>&Light</p>
      </div>

      <p className={styles.titleThree}>Cocktails</p>
      <img
        className={styles.titleImage}
        src="https://cdn-icons-png.flaticon.com/512/442/442032.png?w=740&t=st=1679431232~exp=1679431832~hmac=ceb6ced3dc4bd097bc7a9b620835a555565451e602647207f1a330f84ce67613"
        alt="img"
      />
      <p className={styles.quote}>
        “In wine there is wisdom, in beer there is Freedom, in water there is
        bacteria.”
      </p>
      <ul className={styles.categories}>
        <li onClick={() => onHandleFilter("Ordinary Drink")}>Ordinary Drink</li>
        <li onClick={() => onHandleFilter("Cocktail")}>Cocktail</li>
        <li onClick={() => onHandleFilter("Ordinary Drink")}>Soft Drink</li>
        <li onClick={() => onHandleFilter("Shot")}>Shots</li>
        <li onClick={() => onHandleFilter("Punch / Party Drink")}>
          Punch / Party Drink
        </li>
        <li onClick={() => onHandleFilter("Homemade Liqueur")}>
          Homemade Liqueur
        </li>
        <li onClick={() => onHandleFilter("Other / Unknown")}>Other</li>
      </ul>
    </div>
  );
};

export default Hero;
