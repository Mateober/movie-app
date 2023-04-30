import { useState } from 'react';
import '../sass/loginPage.scss';
import { FcGoogle } from 'react-icons/fc';
import { ImFacebook2 } from 'react-icons/im';
import { useForm } from '../hooks/useForm';

const loginFormFields = {
    loginEmail: '',
    loginPassword: '',
};

const registerFormFields = {
    registerName: '',
    registerSurname: '',
    registerEmail: '',
    registerPassword: '',
    registerPassword2: '',
};

export const LoginPage = () => {
    const [registerVisible, setRegisterVisible] = useState(false);

    const { loginEmail, loginPassword, onInputChange: onLoginInputChange } = useForm(loginFormFields);
    const {
        registerName,
        registerSurname,
        registerEmail,
        registerPassword,
        registerPassword2,
        onInputChange: onRegisterInputChange,
    } = useForm(registerFormFields);

    console.log(registerName)

    const loginSubmit = (event) => {
        console.log(first)
        event.preventDefault();
    };

    const registerSubmit = (event) => {
        event.preventDefault();
    };

    return (
        <div className="LoginPage">
            <div className="LoginPage2">
                <div className={`container__login ${registerVisible ? 'hidden' : ''}`}>
                    <h3>Ingresar</h3>
                    <form onSubmit={loginSubmit}>
                        <div className="inputLoginPage">
                            <p>Email</p>
                            <input type="email" name="loginEmail" value={loginEmail} onChange={onLoginInputChange} />
                        </div>
                        <div className="inputLoginPage">
                            <p>
                                Password <span>Olvidaste tu contraseña?</span>
                            </p>
                            <input type="password" name="loginPassword" value={loginPassword} onChange={onLoginInputChange} />
                        </div>
                        <div className="inputLoginPage">
                            <input type="submit" className="btnSubmit" value="Ingresar" />
                        </div>
                    </form>
                    <p className="loginWith">o inicia sesión con</p>
                    <div className="buttonsContainer">
                        <div className="btnLogin buttonsContainer__google">
                            <FcGoogle />
                            Google
                        </div>
                        <div className="btnLogin buttonsContainer__facebook">
                            <ImFacebook2 />
                            Facebook
                        </div>
                    </div>
                    <p className="registerNow" onClick={() => setRegisterVisible(!registerVisible)}>
                        Aun no te has registrado? <span>Registrate ahora</span>{' '}
                    </p>
                </div>

                <div className={`container__login ${registerVisible ? '' : 'hidden'}`}>
                    <h3>Registro</h3>
                    <form onSubmit={registerSubmit}>
                        <div className="divnamesurname">
                            <div className="inputLoginPage ilp2">
                                <p>Nombre</p>
                                <input type="text" name="registerName" value={registerName} onChange={onRegisterInputChange} />
                            </div>
                            <div className="inputLoginPage ilp2">
                                <p>Apellido</p>
                                <input
                                    type="text"
                                    name="registerSurname"
                                    value={registerSurname}
                                    onChange={onRegisterInputChange}
                                />
                            </div>
                        </div>

                        <div className="inputLoginPage">
                            <p>Email</p>
                            <input type="email" name="registerEmail" value={registerEmail} onChange={onRegisterInputChange} />
                        </div>
                        <div className="inputLoginPage">
                            <p>Contraseña</p>
                            <input
                                type="password"
                                name="registerPassword"
                                value={registerPassword}
                                onChange={onRegisterInputChange}
                            />
                        </div>

                        <div className="inputLoginPage">
                            <p>Repita la contraseña</p>
                            <input
                                type="password"
                                name="registerPassword2"
                                value={registerPassword2}
                                onChange={onRegisterInputChange}
                            />
                        </div>

                        <div className="inputLoginPage">
                            <input type="submit" className="btnSubmit" value="Crear cuenta" />
                        </div>
                        <p className="registerNow" onClick={() => setRegisterVisible(!registerVisible)}>
                            Ya estas registrado? <span>Ingresa ahora</span>
                        </p>
                    </form>
                </div>
            </div>
        </div>
    );
};
