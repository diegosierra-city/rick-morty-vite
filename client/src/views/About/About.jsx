import styles from './About.module.css'
//import {useHistory} from 'react-router-dom'


export default function About(){
 
  const handleBack = () => {
    //history.goBack();
  };
let character={
 "id": '0',
 "name": "Diego Sierra",
 "status": "Vivo",
 "species": "Humana",
 "type": "",
 "episode": "Todos",
 "gender": "Male",
 "origin": {"name":"Colombia"},
 "image": "../../src/assets/images/Diego.jpg",
  "url": "https://diegosierra.vercel.app",
 "created": "2021-11-02T13:07:40.795Z"
}
 //console.log('PG',id)
 return(
  <div className={styles.container}>
   {character.name? (
    <div className={styles.cardInterno}>
     <div className={styles.col}>
        
   <h1>{character.name}</h1> 
   <div>Status: {character.status}</div>
   <div>Species: {character.species}</div>
   <div>Gender: {character.gender}</div>
   <div>Origin: {character.origin?.name}</div>
   </div>
   
   <div className={styles.col}>
    <img src={character.image} alt="" className={styles.cardImage} />
    <div className={styles.cardID}>{character.id}</div>
    <div>Episodio: {character.episode}</div>
   </div>
   </div> 
   ) : (<h2>Cargando..</h2>) }
   
   </div>
  
 )
}