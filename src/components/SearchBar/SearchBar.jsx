import { useState } from "react";

export default function SearchBar({onSearch}) {
   const [id,setId] = useState('')

   function handleChange(e){
let newId = e.target.value;
      setId(newId)
     }
   return (
      <div>
         <input type='search' value={id} onChange={handleChange} />
         <button className="boton-principal" onClick={()=>{
            setId('')
            onSearch(id)
         }}>Agregar</button>
      </div>
   );
}
