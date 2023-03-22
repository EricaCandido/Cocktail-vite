import styles from "./index.module.scss";
import Card from "../card";

const Content = ({ cocktailList, setModalContext }) => {
  return (
    <div className={styles.Content}>
      {cocktailList.map((cocktail) => (
        <Card
          cocktail={cocktail}
          key={cocktail.idDrink}
          setModalContext={setModalContext}
        />
      ))}
    </div>
  );
};

export default Content;
