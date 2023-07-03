import style from './Card.module.css';
import { IconTrashXFilled, IconHelpHexagonFilled } from '@tabler/icons-react';
import { Link } from 'react-router-dom';

export default function Card(props) {
   const {character,onClose} = props;
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
         
         

         <IconTrashXFilled className={style.linkIconRed} size="40" onClick={()=>onClose(character.id)} />
        <Link to={`/detail/${character.id}`}><IconHelpHexagonFilled size="40" /></Link>
        </div>   
      </div>
   );
}
