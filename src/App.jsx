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


/* const example = {
   id: 1,
   name: 'Rick Sanchez',
   status: 'Alive',
   species: 'Human',
   gender: 'Male',
   origin: {
      name: 'Earth (C-137)',
      url: 'https://rickandmortyapi.com/api/location/1',
   },
   image: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
}; */

function App() {
  const [characters, setCharacters] = useState([]);

  let {pathname} = useLocation();

  /*  const onSearch = () => {
  setCharacters([...characters, example])
   } */

  function onSearch(id) {
    //alert(id)
    axios(`https://rickandmortyapi.com/api/character/${id}`).then(
      ({ data }) => {
        if (data.name && !characters.find((character) => character.id === data.id)) {
          setCharacters([...characters, data]);
        } else if(!data.name) {
          alert("¡No hay personajes con este ID!");
        }else{
         alert("Ya esta este personaje");
        }
      }
    );
  }

  const onClose = (id) => {
    let newCharacters = characters.filter(
      (character) => character.id !== Number(id)
    );
    setCharacters(newCharacters);
  };

  const [access, setAcess] = useState(false);
  
  const navigate = useNavigate();

  
  //al montar se valida el usuario
  useEffect(() => {
    !access? navigate('/') : navigate('/home')
 }, [access]);

  return (
    <div className="App">
      {pathname!='/' && <NavBar onSearch={onSearch} setAcess={setAcess} />}
      
<Routes>
<Route path="/" element={<Form setAcess={setAcess}/>} />
<Route path="/home" element={<Cards characters={characters} onClose={onClose} />} />
<Route path="/about" element={<About />} />
<Route path="/detail/:id" element={<Detail />} />
<Route path="*" element={<Error404 />} />
</Routes>
    
    </div>
  );
}

export default App;
