import "./index.scss";
import Card from "../card";
import { GET } from "../../utils/http";
import { useState, useEffect } from "react";

const Content = ({ cocktailList, setCocktailList, cocktail }) => {
  // const [cocktailList, setCocktailList] = useState([]);
  useEffect(() => {
    GET("https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a").then(
      (data) => setCocktailList(() => data.drinks)
    );
  }, []);

  return (
    <div className="Content">
      {cocktailList.map((cocktail) => (
        <Card cocktail={cocktail} key={cocktail.id} />
      ))}
    </div>
  );
};

export default Content;
