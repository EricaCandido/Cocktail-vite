import styles from "./App.module.scss";
import Content from "./components/content/Content";
import Hero from "./components/hero";
import Footer from "./components/footer";
import Menu from "./components/menu";
import { useState, useEffect } from "react";
import { GET } from "./utils/http";
import { filteredList } from "./utils/funcs";
import CocktailDetail from "./components/cocktailDetail";
import Reservation from "./components/reservation";
import Popup from "./components/popup";

function App() {
  const [cocktailList, setCocktailList] = useState([]);
  const [category, setCategory] = useState("Cocktail");
  const [menuVisible, setMenuVisibility] = useState(false);
  const [reservationVisible, setReservationVisibility] = useState(false);
  const [popupVisibile, setPopupVisibility] = useState(false);
  const [reserved, setReserved] = useState(false);
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [modalContext, setModalContext] = useState({
    isVisible: false,
    data: {},
  });

  reserved &&
    setTimeout(() => {
      setPopupVisibility(false);
    }, 4000);

  useEffect(() => {
    GET("https://www.thecocktaildb.com/api/json/v1/1/search.php?f=f").then(
      ({ drinks }) => {
        setCocktailList(() => drinks);
      }
    );
  }, []);
  return (
    <div className={styles.App}>
      <Menu menuVisible={menuVisible} />
      {reservationVisible && (
        <Reservation
          setReservationVisibility={setReservationVisibility}
          setPopupVisibility={setPopupVisibility}
          setReserved={setReserved}
          setName={setName}
          setSurname={setSurname}
          setDate={setDate}
          setTime={setTime}
          name={name}
          surname={surname}
          date={date}
          time={time}
        />
      )}
      {popupVisibile && (
        <Popup>
          <h3>Tavolo prenotato con successo!</h3>
          <p className={styles.popupMessage}>
            Ciao {name}, ti aspettiamo giorno {date.slice(6)} alle ore {time}.
          </p>
        </Popup>
      )}
      <Hero
        setCategory={setCategory}
        setMenuVisibility={setMenuVisibility}
        setReservationVisibility={setReservationVisibility}
      />

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
