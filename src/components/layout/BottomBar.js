import { NavLink } from "react-router-dom";
import { IoGameController, IoTrendingUp, IoHeart } from "react-icons/io5";

// styles
 import styles from "./BottomBar.module.css";

const BottomBar = () => {
  const activeStyle = {
    color: "#fff",
  };

  return (
    <nav className={styles.navigation}>
      <ul>
        <li>
          <NavLink
            to="/home"
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            <IoGameController className={styles.icon} />
            <span>Accueil</span>
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/popular"
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            <IoTrendingUp className={styles.icon} />
            <span>Populaire</span>
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/favorites"
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            <IoHeart className={styles.icon} />
            <span>Favoris</span>
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default BottomBar;
