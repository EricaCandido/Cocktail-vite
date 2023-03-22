import styles from "./index.module.scss";
import { ingredientsList } from "../../utils/funcs";

const CocktailDetail = ({ data, setModalContext }) => {
  const onHandleClick = () =>
    setModalContext((prev) => ({
      ...prev,
      isVisible: false,
    }));

  const lista = ingredientsList(data);

  return (
    <div className={styles.CocktailDetail}>
      <div className={styles.wrapper}>
        <button onClick={onHandleClick} className={styles.close}>
          ❌
        </button>
        <div className={styles.text}>
          <h2 className={styles.title}>{data.strDrink}</h2>
          <p>{data.strInstructionsIT}</p>
          <p className={styles.title}>Ingredienti:</p>
          {lista.map((x) => (
            <li>{x}</li>
          ))}
          {/* <li>{data.strIngredient1}</li>
          <li>{data.strIngredient2}</li>
          <li>{data.strIngredient3}</li>
          <li>{data.strIngredient4}</li> */}
        </div>
        <div className={styles.img}>
          <img src={data.strDrinkThumb} alt="strDrinkThumb" />
        </div>
      </div>
    </div>
  );
};

export default CocktailDetail;
