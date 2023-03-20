import "./index.scss";

const Card = ({ cocktail }) => {
  return (
    <div className="Card">
      <div className="Card__wrapper">
        <img src={cocktail.strDrinkThumb} alt={cocktail.strDrink} />
        <div className="Card__text">
          <p className="Card__title">{cocktail.strDrink}</p>
          <p>Classificazione: {cocktail.strAlcoholic}</p>
          <ul>
            <p className="Card__ingredients">Ingredienti: </p>
            <li>{cocktail.strIngredient1}</li>
            <li>{cocktail.strIngredient2}</li>
            <li>{cocktail.strIngredient3}</li>
            <li>{cocktail.strIngredient4}</li>
          </ul>
        </div>
      </div>
    </div>
  );
};
export default Card;
