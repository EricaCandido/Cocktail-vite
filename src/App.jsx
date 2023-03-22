import styles from "./App.module.scss";
import Content from "./components/content/Content";
import Hero from "./components/hero";
import Footer from "./components/footer";
import Menu from "./components/menu";
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
    <div className={styles.App}>
      <Menu />
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
      <Footer />
    </div>
  );
}

export default App;
