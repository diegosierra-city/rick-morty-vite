import { useState } from 'react';
import style from './Card.module.css';
import { IconTrashXFilled, IconHelpHexagonFilled, IconHeartFilled } from '@tabler/icons-react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {addFav,removeFav} from '../../redux/actions'
import { useEffect } from 'react';

export default function Card(props) {
   const {character,onClose} = props;
const dispatch = useDispatch()
   const myFavorites = useSelector((state) => state.myFavorites)
   //let favorite=false ///no lo puedo hacer con let porque REact no va a leer los cambios y actualizar el renderizado
   const [favorite,setFavorite] = useState(false)

   useEffect(()=>{
      if(myFavorites.length>0) myFavorites.find(fav => fav.id === character.id) ? setFavorite(true) : setFavorite(false);
    
   })

    function handleFavorite(){
      if(favorite){
         dispatch(removeFav(character.id))
         setFavorite(false)
      }else{
         dispatch(addFav(character))
         setFavorite(true)
      }
     //console.log('MF',myFavorites) 
   }

   return (
      <div className={style.card}>

         <div className={style.cardImageUp}>
<img src={character.image} alt={character.name} />
<h2 className={style.cardTitle}>{character.name}</h2>
         </div>
         
<div className={style.cardID}>
{character.id}
</div>

      <div className={style.cardInterno}> 
         <div className={style.cardFranja}></div>
         

         <div className={style.znDescription}>
         <div>{character.status}</div>
         <div>{character.especies}</div>
         <div>{character.gender}</div>
         <div>{character.origin.name}</div>
         </div>
         
         

         
        <Link to={`/detail/${character.id}`}><IconHelpHexagonFilled size="40" /></Link>
        <IconHeartFilled size="40" className={favorite ? style.linkIconRed : style.linkIcon} onClick={handleFavorite} />
        <IconTrashXFilled className={style.linkIconRed} size="40" onClick={()=>onClose(character.id)} />
        </div>   
      </div>
   );
}
