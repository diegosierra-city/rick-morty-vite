import { useParams } from "react-router-dom"
import {useState, useEffect } from 'react'
import axios from 'axios'
import styles from './Detail.module.css'
//import {useHistory} from 'react-router-dom'


export default function Detail(){
 const [character, setCharacter] = useState({})
 let {id}=useParams() ///id del personaje por GET

 

  const handleBack = () => {
    //history.goBack();
  };

 useEffect(()=>{
  axios(`http://localhost:3001/rickandmorty/character/${id}`).then(({ data }) => {
   if (data.name) {
      setCharacter(data);
      console.log('PPP',data)
   } else {
      alert('No hay personajes con ese ID');
   }
});
return setCharacter({}); ///limpia cuando se desmonta o se sale de la pagina
 },[id])
 //console.log('PG',id)
 return(
  <div className={styles.container}>
   {character.name? (
    <div className={styles.detail}>
     <div className={styles.col}>
        <button onClick={handleBack}>Regresar</button>
   <h1>{character.name}</h1> 
   <div>Status: {character.status}</div>
   <div>Species: {character.species}</div>
   <div>Gender: {character.gender}</div>
   <div>Origin: {character.origin?.name}</div>
   </div>
   
   <div className={styles.col}>
    <img src={character.image} alt="" />
    <div>{character.id}</div>
    <div>Episodio: {character.episode?.[0]}</div>
   </div>
   </div> 
   ) : (<h2>Cargando..</h2>) }
   
   </div>
  
 )
}

/* {
 "id": 797,
 "name": "Slartivartian",
 "status": "Dead",
 "species": "Alien",
 "type": "Slartivartian",
 "gender": "Male",
 "origin": {
     "name": "Slartivart",
     "url": "https://rickandmortyapi.com/api/location/124"
 },
 "location": {
     "name": "Slartivart",
     "url": "https://rickandmortyapi.com/api/location/124"
 },
 "image": "https://rickandmortyapi.com/api/character/avatar/797.jpeg",
 "episode": [
     "https://rickandmortyapi.com/api/episode/44"
 ],
 "url": "https://rickandmortyapi.com/api/character/797",
 "created": "2021-11-02T13:07:40.795Z"
} */