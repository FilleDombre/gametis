import { AiFillHeart } from "react-icons/ai";
// styles
  import styles from "./Footer.module.css";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className="container">
        <p className="text-muted">
          © {currentYear} Elbikri World
        </p>
        <p className={styles.created}>
          Créee avec{" "}
          <span>
            <AiFillHeart className={styles.heart} />
          </span>{" "}
          by Sarah CERT2
        </p>
      </div>
    </footer>
  );
};

export default Footer;
