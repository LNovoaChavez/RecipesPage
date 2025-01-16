export const validateRegister = (values) => {
  let errors = {};

  if (!values.name) {
      errors.name = "El nombre es obligatorio";
  } else if (values.name.length < 3) {
      errors.name = "El nombre debe tener al menos 3 caracteres";
  }

  if (!values.lastname) {
      errors.lastname = "El apellido es obligatorio";
  } else if (values.lastname.length < 3) {
      errors.lastname = "El apellido debe tener al menos 3 caracteres";
  }

  if (!values.email) {
      errors.email = "El correo electrónico es obligatorio";
  } else if (!/\S+@\S+\.\S+/.test(values.email)) {
      errors.email = "El correo electrónico no es válido";
  }

  if (!values.password) {
      errors.password = "La contraseña es obligatoria";
  } else if (values.password.length < 6) {
      errors.password = "La contraseña debe tener al menos 6 caracteres";
  } else if (!/[0-9]/.test(values.password)) {
      errors.password = "La contraseña debe contener al menos un número";
  } else if (!/[!@#$%^&*]/.test(values.password)) {
      errors.password = "La contraseña debe contener al menos un carácter especial";
  }

  if (!values.repeatPassword) {
      errors.repeatPassword = "Repetir la contraseña es obligatorio";
  } else if (values.repeatPassword !== values.password) {
      errors.repeatPassword = "Las contraseñas deben coincidir";
  }

  return errors;
};
