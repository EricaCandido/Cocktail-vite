import styles from "./index.module.scss";
// import { useState } from "react";

const Reservation = ({
  setReservationVisibility,
  setPopupVisibility,
  setReserved,
  setName,
  setSurname,
  setDate,
  setTime,
  name,
  surname,
  date,
  time,
}) => {
  // const [name, setName] = useState("");
  // const [surname, setSurname] = useState("");
  // const [date, setDate] = useState("");
  // const [time, setTime] = useState("");

  const onHandleClose = () => {
    setReservationVisibility(false);
  };

  const onHandleNameInput = (e) => {
    setName(e.target.value);
  };
  const onHandleSurnameInput = (e) => {
    setSurname(e.target.value);
  };
  const onHandledateInput = (e) => {
    setDate(e.target.value);
  };
  const onHandleTimeInput = (e) => {
    setTime(e.target.value);
  };
  const onHandleCloseandPopup = () => {
    if ((name, surname, date, time)) {
      setTimeout(() => {
        setReservationVisibility(false);
      }, 2000);
      //   setReservationVisibility(false);
      setPopupVisibility(true);
      setReserved(true);
    }
  };
  const onHandleSubmit = (e) => {
    e.preventDefault();
    console.log({
      name,
      surname,
      date,
      time,
    });
  };

  return (
    <div className={styles.Reservation}>
      <div onClick={onHandleClose} className={styles.overlay}></div>

      <img
        className={styles.image}
        src="https://cdn-icons-png.flaticon.com/512/442/442032.png?w=740&t=st=1679431232~exp=1679431832~hmac=ceb6ced3dc4bd097bc7a9b620835a555565451e602647207f1a330f84ce67613"
        alt="img"
      />
      <button onClick={onHandleClose} className={styles.close}>
        ❌
      </button>
      <form onSubmit={onHandleSubmit} className={styles.resForm}>
        <h3 className={styles.title}>Inserisci i dati per la prenotazione</h3>
        <input
          onChange={onHandleNameInput}
          name="name"
          id="name"
          type="text"
          placeholder="Nome"
          value={name}
          required
        />
        <input
          onChange={onHandleSurnameInput}
          name="surname"
          id="surname"
          type="text"
          placeholder="Cognome"
          value={surname}
          required
        />
        <input
          onChange={onHandledateInput}
          name="date"
          id="date"
          type="date"
          required
          value={date}
        />
        <input
          name="time"
          id="time"
          onChange={onHandleTimeInput}
          type="time"
          required
          value={time}
        />
        <input
          onClick={onHandleCloseandPopup}
          className={styles.bookBtn}
          type="submit"
          value="Prenota"
        />
      </form>
    </div>
  );
};

export default Reservation;
