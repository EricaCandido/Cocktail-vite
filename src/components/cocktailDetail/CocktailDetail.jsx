import "./index.scss";
import { ingredientsList } from "../../utils/funcs";

const CocktailDetail = ({ data, setModalContext }) => {
  const onHandleClick = () =>
    setModalContext((prev) => ({
      ...prev,
      isVisible: false,
    }));

  const lista = ingredientsList(data);

  return (
    <div className="CocktailDetail">
      <div className="CocktailDetail__wrapper">
        <button
          onClick={onHandleClick}
          className="CocktailDetail__wrapper__close"
        >
          🍸❌
        </button>
        <div className="CocktailDetail__wrapper__text">
          <h2 className="CocktailDetail__wrapper__title">{data.strDrink}</h2>
          <p>{data.strInstructionsIT}</p>
          <p className="CocktailDetail__wrapper__title">Ingredienti:</p>
          {lista.map((x) => (
            <li>{x}</li>
          ))}
          {/* <li>{data.strIngredient1}</li>
          <li>{data.strIngredient2}</li>
          <li>{data.strIngredient3}</li>
          <li>{data.strIngredient4}</li> */}
        </div>
        <div className="CocktailDetail__wrapper__img">
          <img src={data.strDrinkThumb} alt="strDrinkThumb" />
        </div>
      </div>
    </div>
  );
};

export default CocktailDetail;
