import { Outlet } from "react-router-dom";
import styles from "./index.module.scss";

import Footer from "../footer";

const Layout = () => {
  return (
    <div className={styles.Layout}>
      <section className={styles.children}>
        <Outlet />
      </section>

      <Footer />
    </div>
  );
};

export default Layout;
