import { useContext } from "react";
import { FavoritesContext } from "../context/FavoritesContext";
import GameList from "../components/games/GameList";

// styles
import styles from "./Favorites.module.css";

const Favorites = () => {
  const { favorites, totalFavorites } = useContext(FavoritesContext);

  return (
    <section className={styles.favorite}>
      <h1 className="title">Vos jeux favoris</h1>
      {totalFavorites === 0 ? (
        <p className={styles.feedback}>Pas encore de jeux favoris !</p>
      ) : (
        <GameList items={favorites} />
      )}
    </section>
  );
};

export default Favorites;
