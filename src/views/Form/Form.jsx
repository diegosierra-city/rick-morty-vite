import { useState } from "react";
import styles from "./Form.module.css"
import { validate } from "./validation";
import { useNavigate } from "react-router-dom";

export default function Form ({setAcess}) {

 const [login, setLogin] = useState(false); 

 const [userData, setUserData] = useState({
  email: "",
  password: "",
});

const [errors, setErrors] = useState({
 email: "",
 password: "",
});


const handleChange = (event) => {
  let campo = event.target.name;
  let valor = event.target.value;

setUserData({...userData, [campo]: valor})
setErrors(
validate({...userData, [campo]: valor})
)

}

const emailBase='diegosierra@cityciudad.com'
  const passwordBase='123456'

const handleSubmit = (event) => {
event.preventDefault();
const arrayDePropiedades = Object.keys(errors);
if(arrayDePropiedades.length > 0){
alert('Debe llenar todos los campos')
return;
}

if(userData.email===emailBase && userData.password===passwordBase){
 setAcess(true)
 
 setErrors({
  name: "",
  email: "",
  message: "",
  })
  setUserData({
  name: "",
  email: "",
  message: "",
  })

}else{
 alert('Usuario o contraseña incorrectos')
}

}

return(
<form className={styles.form} onSubmit={handleSubmit}>
        <label htmlFor="email">Correo Electrónico:</label>
        <br />
        <input type="text" name="email" value={userData.email}className={errors.email && styles.warning} onChange={handleChange} placeholder="Escribe tu email..." autoComplete="username" />
        {errors.email && <p className={styles.danger}>{errors.email}</p>}
        <br />
        <label htmlFor="password">Clave:</label>
        <br />
        <input type="password" name="password" value={userData.password} className={errors.password && styles.warning} onChange={handleChange} placeholder="Escribe tu clave..." autoComplete="current-password" />
        {errors.password && <p className={styles.danger}>{errors.password}</p>}
<br />       
        <button type="submit">Enviar</button>
      </form>
)
}