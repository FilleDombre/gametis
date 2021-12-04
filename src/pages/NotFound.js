import { Link } from "react-router-dom";

import styles from "./NotFound.module.css";

const NotFound = () => {
  return (
    <section className={styles.not_found}>
      <h1 className="title">404 - Page inexistante</h1>
      <Link to="/" className={styles.link}>
       Retour à la page d'accueil
      </Link>
    </section>
  );
};

export default NotFound;
