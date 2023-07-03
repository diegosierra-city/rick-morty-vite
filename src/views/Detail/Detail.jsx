import { useParams } from "react-router-dom"
import {useState, useEffect } from 'react'
import axios from 'axios'
import styles from './Detail.module.css'

export default function Detail(){
 const [character, setCharacter] = useState({})
 let {id}=useParams() ///id del personaje por GET

 useEffect(()=>{
  axios(`https://rickandmortyapi.com/api/character/${id}`).then(({ data }) => {
   if (data.name) {
      setCharacter(data);
      console.log('PPP',data)
   } else {
      alert('No hay personajes con ese ID');
   }
});
return setCharacter({});
 },[id])
 //console.log('PG',id)
 return(
  <div className={styles.container}>
   {character.name? (
    <>
     <div>
        <div>Regresar con historial</div>
   <h1>{character.name}</h1> 
   <div>Status: {character.status}</div>
   <div>Species: {character.species}</div>
   <div>Gender: {character.gender}</div>
   <div>Origin: {character.origin?.name}</div>
   </div>
   
   <div>
    <img src={character.image} alt="" />
    <div>{character.id}</div>
    <div>Episodio: {character.episode?.[0]}</div>
   </div>
   </> 
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