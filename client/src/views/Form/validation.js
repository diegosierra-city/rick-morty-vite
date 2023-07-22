const regexEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,}$/;
///^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i
const regexUnNumero = /.*\d+.*/;

export const validate = (userData) => {
  // console.log('V1',userData)
  // console.log('V2',userData.name.length)
  let errors = {};

  if (!userData.email || userData.email.length === 0) {
    errors.email = "Falta el email";
  } else if (userData.email.length > 35) {
    errors.email = "No debe tener más de 35 carácteres";
  } else if (regexEmail.test(userData.email) === false) {
    errors.email = "Debe ser un correo electrónico";
  }

  if (!userData.password || userData.password.length < 6 || userData.password.length > 10) {
    errors.password = "Debe ser mayor que 6 caracteres y menor de 10";
  } else if (regexUnNumero.test(userData.password) === false) {
    errors.password = "Debe contener por lo menos un número";
  }

  //setErrors(errors)

  console.log("VErrores", errors);

  return errors;
};
