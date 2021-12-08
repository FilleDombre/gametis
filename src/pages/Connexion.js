import { NavLink } from "react-router-dom";
// styles
import  "./Connexion.css";


const Connexion = () => {
  // const [filteredGames, setFilteredGames] = useState([]);
  // const [searchTerm, setSearchTerm] = useState("");

  // const {
  //   data: allGames,
  //   isPending,
  //   error,
  // } = useFetch(`${process.env.REACT_APP_API_URL}/games`);

  // const debouncedSearchTerm = useDebounce(searchTerm, 500);

  // const currentYear = new Date().getFullYear();

  // useEffect(() => {
  //   if (debouncedSearchTerm && allGames) {
  //     setFilteredGames(
  //       allGames.filter((game) =>
  //         game.title.toLowerCase().includes(debouncedSearchTerm.toLowerCase())
  //       )
  //     );
  //   }
  // }, [debouncedSearchTerm, allGames]);
 const onSubmit = (e) => {
    e.preventDefault();
    // this.setState({
    //   showName: true
    // });
    <NavLink
                to="/"
                
              >
                Accueil
              </NavLink>
  }
  return (
    <>
<section>
  <div className="color" />
  <div className="color" />
  <div className="color" />
  <div className="box">
    <div className="square" />
    <div className="square"  />
    <div className="square"  />
    <div className="square" />
    <div className="square"  />
    <div className="container">
      <div className="form">
        <h2> Connexion</h2>
        <form onSubmit={onSubmit}>
          <div className="inputBox">
            <input type="text" placeholder="Username" />
          </div>
          <div className="inputBox">
            <input type="password" placeholder="Mot de passe" />
          </div>
          <div className="inputBox">
            <input type="submit"  onClick={onSubmit} defaultValue="Connexion" />
          
          </div>
          <p className="forget">Mot de passe oublié ? Cliquez ici</p>
          <p className="forget">Pas de compte ? ? S'enregistrer</p>
        </form>
      </div>
    </div>
  </div>
</section>
    </>
  );
};

export default Connexion;
