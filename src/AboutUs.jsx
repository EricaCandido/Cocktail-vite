import styles from "./AboutUs.module.scss";
import { Link } from "react-router-dom";
import ericandido from "./assets/ericandido.jpeg";

import linkedin from "./assets/linkedin.png";
import github from "./assets/github.png";
import { BiHomeHeart } from "react-icons/bi";

export default function AboutUs() {
  return (
    <div className={styles.AboutUs}>
      <nav>
        <div className={styles.logo}>
          <div className={styles.titleOne}>
            <p>Strong</p>
            <p className={styles.titleLight}>&Light</p>
          </div>
          <p className={styles.titleThree}>Cocktails</p>
        </div>
        <img
          className={styles.titleImage}
          src="https://cdn-icons-png.flaticon.com/512/442/442032.png?w=740&t=st=1679431232~exp=1679431832~hmac=ceb6ced3dc4bd097bc7a9b620835a555565451e602647207f1a330f84ce67613"
          alt="img"
        />

        <p className={styles.back}>
          <Link to="/">
            Back to <BiHomeHeart />
          </Link>
        </p>
      </nav>
      <h1>About Us...Oops.. Me!</h1>
      <div className={styles.Wrapper}>
        <div className={styles.textWrapper}>
          <h3>Erica Candido</h3>
          <p>Ascolto & Creo Applicazioni Web </p>
          <p>Front-end developer </p>
          <h3>Contacts</h3>

          <a href="https://github.com/EricaCandido">
            Github <img src={github} alt="gitImg"></img>
          </a>
          <a href="https://www.linkedin.com/in/erica-candido-8085a4259/">
            Linkedin <img src={linkedin} alt="linkedinImg"></img>
          </a>

          <p>Email: ericandido1997@gmail.com</p>
          <h3>Altri progetti</h3>
          <a href="https://movie-plex.vercel.app">MoviePlex</a>
          <a href="https://explorer-project-three.vercel.app">HireLand</a>
          <a href="https://to-do-list-project-phi.vercel.app">DailyTasks</a>
        </div>
        <img className={styles.photo} src={ericandido} alt="photo" />
      </div>
    </div>
  );
}
