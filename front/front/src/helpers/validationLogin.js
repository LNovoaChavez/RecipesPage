export const validateLoginForm = (values) => {
    let errors = {}
    
    if (!values.email) {
        errors.email = "Email es requerido";
    } else if (!/\S+@\S+\.\S+/.test(values.email)) {
        errors.email = "Email es invalido";
    }

    if (!values.password) {
        errors.password = "Password es requerida";
    }

    return errors;
}
