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
        setErrorRegisterForm('Please complete all fields');
    } else if (!emailRegex.test(registerEmail)) {
        setErrorRegisterForm('Invalid email');
    } else if (isPasswordInvalid(registerPassword)) {
        setErrorRegisterForm('Invalid password');
    } else if (registerPassword !== registerPassword2) {
        setErrorRegisterForm('Passwords do not match');
    } else {
        setErrorRegisterForm('');
        return true;
    }
};

export const loginValidator = (loginEmail, loginPassword, setErrorLoginForm) => {
    if (loginEmail == '' || loginPassword == '') {
        setErrorLoginForm('Please complete all fields');
    } else if (!emailRegex.test(loginEmail)) {
        setErrorLoginForm('Invalid email');
    } else if (isPasswordInvalid(loginPassword)) {
        setErrorLoginForm('Invalid password');
    } else {
        setErrorLoginForm('');
        return true;
    }
};
