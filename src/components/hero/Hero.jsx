import styles from "./index.module.scss";
import { RxHamburgerMenu } from "react-icons/rx";
import { useRef } from "react";

const Hero = ({
  setCategory,
  setMenuVisibility,
  setReservationVisibility,
  setCocktailLetter,
}) => {
  const onHandleFilter = (category) => {
    setCategory(category);
  };

  const onHandleMenuVisibility = () => {
    setMenuVisibility((prev) => !prev);
  };

  const onHandleReservationVisibility = () => {
    setReservationVisibility(true);
  };

  const alpha = Array.from(Array(26)).map((e, i) => i + 65);
  const alphabet = alpha.map((x) => String.fromCharCode(x));

  const inputRef = useRef();
  const onHandleSelectedLetter = (e) => {
    setCocktailLetter(e.target.id);
  };

  return (
    <div className={styles.Hero}>
      <div className={styles.nav}>
        <p onClick={onHandleReservationVisibility} className={styles.booking}>
          Book a table
        </p>
        <RxHamburgerMenu
          className={styles.hamburger}
          onClick={onHandleMenuVisibility}
        />
      </div>
      <div className={styles.main}>
        <div className={styles.titleOne}>
          <p>Strong</p>
          <p className={styles.titleLight}>&Light</p>
        </div>

        <p className={styles.titleThree}>Cocktails</p>
        <img
          className={styles.titleImage}
          src="https://cdn-icons-png.flaticon.com/512/442/442032.png?w=740&t=st=1679431232~exp=1679431832~hmac=ceb6ced3dc4bd097bc7a9b620835a555565451e602647207f1a330f84ce67613"
          alt="img"
        />
        <p className={styles.quote}>
          “In wine there is wisdom, in beer there is Freedom, in water there is
          bacteria.”
        </p>
      </div>
      <div className={styles.lists}>
        <ul className={styles.alphabet}>
          {alphabet.map((letter) => (
            <li
              key={letter}
              id={letter}
              ref={inputRef}
              onClick={onHandleSelectedLetter}
            >
              {letter}
            </li>
          ))}
        </ul>
        <ul className={styles.categories}>
          <li onClick={() => onHandleFilter("Ordinary Drink")}>
            Ordinary Drink
          </li>
          <li onClick={() => onHandleFilter("Cocktail")}>Cocktail</li>
          <li onClick={() => onHandleFilter("Ordinary Drink")}>Soft Drink</li>
          <li onClick={() => onHandleFilter("Shot")}>Shots</li>
          <li onClick={() => onHandleFilter("Punch / Party Drink")}>
            Punch / Party Drink
          </li>
          <li onClick={() => onHandleFilter("Homemade Liqueur")}>
            Homemade Liqueur
          </li>
          <li onClick={() => onHandleFilter("Other / Unknown")}>Other</li>
        </ul>
      </div>
    </div>
  );
};

export default Hero;

// CON STYLED COMPONENT

// import styled from "styled-components";
// import { RxHamburgerMenu } from "react-icons/rx";

// const HeroWrapper = styled.div`
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   align-items: center;
//   position: relative;
//   height: 80vh;
//   border-bottom: 1px solid #4b0d0d;
// `;

// const Nav = styled.div`
//   padding: 0 20px;
//   position: absolute;
//   top: 0;
//   width: 90%;
//   display: flex;
//   justify-content: space-between;
//   align-items: center;

//   & p {
//     color: #faebd7;
//     padding: 10px;
//     border: 1px solid #faebd7;
//     width: fit-content;
//     border-radius: 20px;
//     cursor: pointer;
//     transition: all 0.35s ease-out;
//     box-shadow: $box-shadow;
//     &:hover {
//       color: #faebd7;
//       background: rgba(134, 22, 87, 1);
//     }
//     @media screen and (max-width: 800px) {
//       font-size: 0.8rem;
//     }
//   }
//   & span {
//     font-size: 2rem;
//     cursor: pointer;
//   }
// `;

// const TitleOne = styled.div`
//   @import url("https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,800;1,400&display=swap");
//   font-family: "Playfair Display", serif;
//   display: flex;
//   border-bottom: 1px solid #4b0d0d;
//   font-size: 6rem;
//   font-weight: bold;

//   & p {
//     margin: 0;
//     padding: 0;
//   }
//   @media screen and (max-width: 800px) {
//     font-size: 4rem;
//   }
//   @media screen and (max-width: 400px) {
//     font-size: 2.3rem;
//   }
// `;

// const TitleLight = styled.p`
//   font-weight: lighter;
// `;

// const TitleThree = styled.p`
//   @import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@100;400;700&display=swap");
//   font-family: "Montserrat", sans-serif;
//   font-size: 2rem;
//   margin: 5px;
//   top: 50%;
//   right: 5%;
//   color: antiquewhite;

//   p {
//     margin: 0;
//     padding: 0;
//   }
//   @media screen and (max-width: 400px) {
//     font-size: 1.5rem;
//   }
// `;

// const TitleImage = styled.img`
//   width: 50px;
//   padding: 10px;
// `;

// const Quote = styled.p`
//   position: absolute;
//   font-size: 1.2rem;
//   width: 100%;
//   bottom: 0;
//   text-align: center;
//   font-variant: small-caps;
//   @media screen and (max-width: 400px) {
//     font-size: 1rem;
//   }
// `;

// const HeroUl = styled.ul`
//   display: flex;
//   gap: 10px;
//   flex-wrap: wrap;
//   align-items: center;
//   justify-content: center;
//   width: 100%;
//   padding: 0;
//   position: absolute;
//   bottom: -15%;
//   list-style-type: none;
//   text-align: center;
//   font-variant: small-caps;
//   @media screen and (max-width: 800px) {
//     bottom: -27%;
//   }

//   @media screen and (max-width: 400px) {
//     bottom: -38%;
//   }

//   & li {
//     border: 1px solid #1f1a1c;
//     border-radius: 20px;
//     padding: 7px;
//     box-shadow: 0 0 4px #1f1a1c;
//     cursor: pointer;
//     transition: all 0.35s ease-out;
//     &:hover {
//       color: #faebd7;
//       background: rgba(63, 13, 18, 1);
//     }
//   }
// `;

// const Hero = ({ setCategory, setMenuVisibility, setReservationVisibility }) => {
//   const onHandleFilter = (category) => {
//     setCategory(category);
//   };

//   const onHandleMenuVisibility = () => {
//     setMenuVisibility((prev) => !prev);
//   };

//   const onHandleReservationVisibility = () => {
//     setReservationVisibility(true);
//   };

//   return (
//     <HeroWrapper>
//       <Nav>
//         <p onClick={onHandleReservationVisibility}> Book a table</p>
//         <span>
//           <RxHamburgerMenu onClick={onHandleMenuVisibility} />
//         </span>
//       </Nav>
//       <TitleOne>
//         <p>Strong</p>
//         <TitleLight>&Light</TitleLight>
//       </TitleOne>
//       <TitleThree>Cocktails</TitleThree>
//       <TitleImage
//         src="https://cdn-icons-png.flaticon.com/512/442/442032.png?w=740&t=st=1679431232~exp=1679431832~hmac=ceb6ced3dc4bd097bc7a9b620835a555565451e602647207f1a330f84ce67613"
//         alt="img"
//       />
//       <Quote>
//         “In wine there is wisdom, in beer there is Freedom, in water there is
//         bacteria.”
//       </Quote>
//       <HeroUl>
//         <li onClick={() => onHandleFilter("Ordinary Drink")}>Ordinary Drink</li>
//         <li onClick={() => onHandleFilter("Cocktail")}>Cocktail</li>
//         <li onClick={() => onHandleFilter("Ordinary Drink")}>Soft Drink</li>
//         <li onClick={() => onHandleFilter("Shot")}>Shots</li>
//         <li onClick={() => onHandleFilter("Punch / Party Drink")}>
//           Punch / Party Drink
//         </li>
//         <li onClick={() => onHandleFilter("Homemade Liqueur")}>
//           Homemade Liqueur
//         </li>
//         <li onClick={() => onHandleFilter("Other / Unknown")}>Other</li>
//       </HeroUl>
//     </HeroWrapper>
//   );
// };

// export default Hero;
