import { useState } from "react";
import styles from "./Form.module.css";
import { validate } from "./validation";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const emailBase = "diegosierra@cityciudad.com";
  const passwordBase = "123456";

export default function Form({ setAcess }) {
  const [login, setLogin] = useState(false);

  const [userData, setUserData] = useState({
    email: emailBase, //""
    password: passwordBase, //""
  });

  const [errors, setErrors] = useState({
    email: "",
    password: "",
  });

  useEffect(() => {
    /// se valida porque estpy prellenando el formulario
  setErrors({});
  },[])
  

  const handleChange = (event) => {
    let campo = event.target.name;
    let valor = event.target.value;

    setUserData({ ...userData, [campo]: valor });
    setErrors(validate({ ...userData, [campo]: valor }));
  };

  

  const handleSubmit = (event) => {
    event.preventDefault();
    const arrayDePropiedades = Object.keys(errors);
    if (arrayDePropiedades.length > 0) {
      console.log('ERROR',errors)
      alert("Debe llenar todos los campos");
      return;
    }

    if (userData.email === emailBase && userData.password === passwordBase) {
      setAcess(true);

      setErrors({
        email: "",
        password: "",
      });
      setUserData({
        email: "",
        password: "",
      });
    } else {
      alert("Usuario o contraseña incorrectos");
    }
  };
  //console.log("INITx", userData.email, "FINx", userData.password, "pp");


  return (
    <div className={styles.container}>
    <form className={styles.form} onSubmit={handleSubmit}>
      <h2>Bienvenido</h2>
      <label htmlFor="email">Correo Electrónico:</label>
      <br />
      <input
        type="text"
        name="email"
        value={userData.email}
        className={errors.email && styles.warning}
        onChange={handleChange}
        placeholder="Escribe tu email..."
        autoComplete="username"
      />
      {errors.email && <p className={styles.danger}>{errors.email}</p>}
      <br />
      <label htmlFor="password">Clave:</label>
      <br />
      <input
        type="password"
        name="password"
        value={userData.password}
        className={errors.password && styles.warning}
        onChange={handleChange}
        placeholder="Escribe tu clave..."
        autoComplete="current-password"
      />
      {errors.password && <p className={styles.danger}>{errors.password}</p>}
      <br />
      <br />
      <button type="submit" className="boton-principal">Ingresar</button>
    </form>
    </div>
  );
}
