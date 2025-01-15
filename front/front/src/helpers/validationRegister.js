export const validateRegister = (values) => {
    let errors = {};
  
    // Validación del nombre
    if (!values.name) {
      errors.name = "Name is required";
    } else if (values.name.length < 3) {
      errors.name = "Name must be at least 3 characters";
    }
  
    // Validación del apellido
    if (!values.lastname) {
      errors.lastname = "Lastname is required";
    } else if (values.lastname.length < 3) {
      errors.lastname = "Lastname must be at least 3 characters";
    }
  
    // Validación del email
    if (!values.email) {
      errors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(values.email)) {
      errors.email = "Email is invalid";
    }
  
    // Validación del password
    if (!values.password) {
      errors.password = "Password is required";
    } else if (values.password.length < 6) {
      errors.password = "Password must be at least 6 characters";
    } else if (!/[0-9]/.test(values.password)) {
      errors.password = "Password must contain at least one number";
    } else if (!/[!@#$%^&*]/.test(values.password)) {
      errors.password = "Password must contain at least one special character";
    }
  
    // Validación de repetir password
    if (!values.repeatPassword) {
      errors.repeatPassword = "Repeat password is required";
    } else if (values.repeatPassword !== values.password) {
      errors.repeatPassword = "Passwords must match";
    }
  
    return errors;
  };
  