import styles from "./index.module.scss";
import { ingredientsList } from "../../utils/funcs";

const Card = ({ cocktail, setModalContext }) => {
  const onHandleClick = () => {
    setModalContext((prev) => ({
      ...prev,
      isVisible: true,
      data: cocktail,
    }));
  };

  const lista = ingredientsList(cocktail);

  return (
    <div className={styles.Card}>
      <div className={styles.wrapper}>
        <img
          className={styles.img}
          src={cocktail.strDrinkThumb}
          alt={cocktail.strDrink}
        />
        <div className={styles.text}>
          <p onClick={onHandleClick} className={styles.title}>
            {cocktail.strDrink}
          </p>
          <p className={styles.textImpo}>{cocktail.strAlcoholic}</p>
          <p className={styles.ingrTitle}>Ingredients: </p>
          <ul className={styles.ingredients}>
            {lista.map((x) => (
              <li key={x}>{x}</li>
            ))}
            {/* <li>{cocktail.strIngredient1}</li>
            <li>{cocktail.strIngredient2}</li>
            <li>{cocktail.strIngredient3}</li>
            <li>{cocktail.strIngredient4}</li> */}
          </ul>
        </div>
      </div>
    </div>
  );
};
export default Card;
