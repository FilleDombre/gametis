import { NavLink } from "react-router-dom";
import { IoGameController } from "react-icons/io5";
// styles
 import styles from "./Header.module.css";

const Header = () => {
  const activeStyle = {
    color: "#fff",
  };

  return (
    <header className={styles.header}>
      <div className={`${styles.container} container`}>
        <NavLink to="/">
          <IoGameController className={styles.logo} />
        </NavLink>
        <nav className={styles.navigation}>
          <ul>
            <li>
              <NavLink
                to="/home"
                style={({ isActive }) => (isActive ? activeStyle : undefined)}
              >
                Accueil
              </NavLink>
            </li>
            <li>
              <NavLink
                to="popular"
                style={({ isActive }) => (isActive ? activeStyle : undefined)}
              >
                Populaire
              </NavLink>
            </li>
            <li>
              <NavLink
                to="favorites"
                style={({ isActive }) => (isActive ? activeStyle : undefined)}
              >
                Favoris
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
