import { useState } from "react";
import styles from './SearchBar.module.css'

export default function SearchBar({onSearch}) {
   const [id,setId] = useState('')

   function handleChange(e){
let newId = e.target.value;
      setId(newId)
     }
     //console.log('INIT',id,'FIN')
   return (
      <div>
         <input type='search' value={id} name='id' onChange={handleChange} />
         <button className="boton-principal" onClick={()=>{
            setId('')
            onSearch(id)
         }}>Agregar</button>
      </div>
   );
}
