import { Link } from "react-router-dom";
import SearchBar from "../SearchBar/SearchBar";
import styles from './NavBar.module.css';
import {IconMoodX} from '@tabler/icons-react'
import { useNavigate } from "react-router-dom";

const NavBar = (props) => {
console.log('Nav',props)
 const characterRandom=()=>{
  //busco un numero al azar entre 1 y 826
  let num = Math.floor(Math.random() * (826 - 1) + 1);
  return num;
  }

  const navigate = useNavigate();

  const logOut = () => {
props.setAcess(false)
navigate('/')
  }
return(
 <div className={styles.header}>
  <div className={styles.logout} onClick={logOut}>
<IconMoodX size="30" />
  </div>
  <div className={styles.menu}>
<Link to="/favorites"><button className="boton-principal">Favorites</button></Link>    
<Link to="/home"><button className="boton-principal">Home</button></Link>
<Link to="/about"><button className="boton-principal">About</button></Link>

  </div>

  <div className={styles.logo}>
  <img src="../../src/assets/images/logo.png" alt="logo" />
  </div>

  <SearchBar onSearch={props.onSearch} />

  <button className="boton-principal" onClick={()=>{props.onSearch(characterRandom())}}>Random</button>
 </div>
 
)
}

export default NavBar;