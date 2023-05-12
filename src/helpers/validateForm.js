const emailRegex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;

const isPasswordInvalid = (password) => {
    const hasUppercase = /[A-Z]/.test(password);
    const hasLowercase = /[a-z]/.test(password);
    const hasDigit = /\d/.test(password);
    const hasSpecialChar = /[.!@#$%^&*()_+\-=<>?]/.test(password);
    const isLengthValid = password.length >= 8;

    return !(hasUppercase && hasLowercase && hasDigit && hasSpecialChar && isLengthValid);
};

export const signUpValidator = (registerName, registerLastname, registerEmail, registerPassword, registerPassword2, setErrorRegisterForm) => {
    if (registerName === '' || registerLastname === '' || registerEmail === '' || registerPassword === '') {
        setErrorRegisterForm('Por favor, complete todos los campos');
    } else if (!emailRegex.test(registerEmail)) {
        setErrorRegisterForm('Correo no válido');
    } else if (isPasswordInvalid(registerPassword)) {
        setErrorRegisterForm('Contraseña no válida');
    } else if (registerPassword !== registerPassword2) {
        setErrorRegisterForm('Las contraseñas no coinciden');
    } else {
        setErrorRegisterForm('');
        return true;
    }
};

export const loginValidator = (loginEmail, loginPassword, setErrorLoginForm) => {
    if (loginEmail == '' && loginPassword == '') {
        setErrorLoginForm('Por favor, complete todos los campos');
    } else if (!emailRegex.test(loginEmail)) {
        setErrorLoginForm('Correo no válido');
    } else if (isPasswordInvalid(loginPassword)) {
        setErrorLoginForm('Contraseña no válida');
    } else {
        setErrorLoginForm('');
        return true;
    }
};
