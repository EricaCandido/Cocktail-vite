import "./App.scss";
import Content from "./components/content/Content";
import Hero from "./components/hero";
import { useState, useEffect } from "react";
import { GET } from "./utils/http";
import { filteredList } from "./utils/funcs";
import CocktailDetail from "./components/cocktailDetail/CocktailDetail";

function App() {
  const [cocktailList, setCocktailList] = useState([]);
  const [category, setCategory] = useState("Cocktail");
  const [modalContext, setModalContext] = useState({
    isVisible: false,
    data: {},
  });

  useEffect(() => {
    GET("https://www.thecocktaildb.com/api/json/v1/1/search.php?f=d").then(
      ({ drinks }) => {
        setCocktailList(() => drinks);
      }
    );
  }, []);
  return (
    <div className="App">
      <Hero setCategory={setCategory} />

      {modalContext.isVisible ? (
        <CocktailDetail
          data={modalContext.data}
          setModalContext={setModalContext}
        />
      ) : (
        <Content
          setModalContext={setModalContext}
          cocktailList={filteredList(cocktailList, "strCategory", category)}
          setCocktailList={setCocktailList}
        />
      )}
    </div>
  );
}

export default App;
