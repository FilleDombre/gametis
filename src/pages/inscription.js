import { NavLink } from "react-router-dom";
// styles
import  "./inscription.css";


const Connexion = () => {
 const onSubmit = (e) => {
    e.preventDefault()
 
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
        <h2> Inscription </h2>
        <form onSubmit={onSubmit}>
          <div className="inputBox">
            <input type="text" placeholder="Username" />
          </div>
          <div className="inputBox">
            <input type="password" placeholder="Mot de passe" />
          </div>
          <div className="inputBox">
          <NavLink
                to="/home">
                S'inscrire
              </NavLink>
           
          
          </div>
          <p className="forget">Mot de passe oublié ? Cliquez ici</p>
          <p className="forget">Pas de compte ? S'enregistrer</p>
        </form>
      </div>
    </div>
  </div>
</section>
    </>
  );
};

export default Connexion;
