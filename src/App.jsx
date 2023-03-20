import "./App.scss";
import Content from "./components/content/Content";
import Hero from "./components/hero";
import { useState } from "react";

function App({ cocktail }) {
  const [cocktailList, setCocktailList] = useState([]);
  return (
    <div className="App">
      <Hero cocktail={cocktail} setCocktailList={setCocktailList} />
      <Content cocktailList={cocktailList} setCocktailList={setCocktailList} />
    </div>
  );
}

export default App;
