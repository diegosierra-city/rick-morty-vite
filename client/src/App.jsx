import "./App.css";
import Cards from "./components/Cards/Cards.jsx";
import NavBar from "./components/NavBar/NavBar.jsx";
import { useState, useEffect } from "react";
import axios from "axios";
import {Routes, Route, useLocation, useNavigate} from 'react-router-dom';
import About from "./views/About/About";
import Detail from "./views/Detail/Detail";
import Error404 from "./views/Error404/Error404";
import Form from "./views/Form/Form";
import Favorites from "./views/Favorites/Favorites";
import {removeFav} from './redux/actions'
import {useDispatch} from 'react-redux'



function App() {
  const [characters, setCharacters] = useState([]);
const dispatch = useDispatch()

  let {pathname} = useLocation();

  const [access, setAccess] = useState(false);
  
  const navigate = useNavigate();

  async function logIn(userData) {
const { email, password } = userData;
   const URL = 'http://localhost:3001/rickandmorty/login/';

   try {
    let response = await axios(URL + `?email=${email}&password=${password}`)
    let data = response.data;
    const { access } = data;
      setAccess(access);
      access? navigate('/home') : alert('Usuario o contraseña incorrectos')
   } catch (error) {
    alert(error)
   }
   
  
}
 
  async function onSearch(id) {
  try {
    let response = await axios(`http://localhost:3001/rickandmorty/character/${id}`)

    let data = response.data;
    if (data.name && !characters.find((character) => character.id === data.id)) {
      setCharacters([...characters, data]);
    } else if(!data.name) {
      alert("¡No hay personajes con este ID!");
    }else{
     alert("Ya esta este personaje");
    }

  } catch (error) {
    console.log(error)
  }
   
  }

  const onClose = (id) => {
    let newCharacters = characters.filter(
      (character) => character.id !== Number(id)
    );
    setCharacters(newCharacters);
    dispatch(removeFav(Number(id)))
  };

  

  
  //al montar se valida el usuario
  useEffect(() => {
    !access? navigate('/') : navigate('/home')
 }, [access]);

  return (
    <div className="App">
      {pathname!='/' && <NavBar onSearch={onSearch} setAccess={setAccess} />}
      
<Routes>
<Route path="/" element={<Form setAccess={setAccess} logIn={logIn}/>} />
<Route path="/home" element={<Cards characters={characters} onClose={onClose} />} />
<Route path="/about" element={<About />} />
<Route path="/detail/:id" element={<Detail />} />
<Route path="/favorites" element={<Favorites />} />
<Route path="*" element={<Error404 />} />
</Routes>
    
    </div>
  );
}

export default App;
