import "./index.scss";
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
    <div className="Card">
      <div className="Card__wrapper">
        <img src={cocktail.strDrinkThumb} alt={cocktail.strDrink} />
        <div className="Card__text">
          <p onClick={onHandleClick} className="Card__title">
            {cocktail.strDrink}
          </p>
          <p className="Card__text-impo">{cocktail.strAlcoholic}</p>
          <p className="Card__text-ingr-title">Ingredienti: </p>{" "}
          <ul className="Card__text-ingredients">
            {lista.map((x) => (
              <li>{x}</li>
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
