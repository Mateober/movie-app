import { useState } from 'react';
import '../sass/loginPage.scss';
import { FcGoogle } from 'react-icons/fc';
import { ImFacebook2 } from 'react-icons/im';
import { BsFillEyeFill, BsFillEyeSlashFill } from 'react-icons/bs';
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
    const [eyeIcon1, setEyeIcon1] = useState(true);
    const [eyeIcon2, setEyeIcon2] = useState(true);
    const [eyeIcon3, setEyeIcon3] = useState(true);
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

    const loginSubmit = (event) => {
        console.log({ loginEmail, loginPassword });
        event.preventDefault();
    };

    const registerSubmit = (event) => {
        console.log({ registerName, registerSurname, registerEmail, registerPassword, registerPassword2 });
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
                            <div className="eyeDiv">
                                <input
                                    type={`${eyeIcon1 ? 'password' : 'text'}`}
                                    name="loginPassword"
                                    value={loginPassword}
                                    onChange={onLoginInputChange}
                                />
                                <div className="eyeDiv2" onClick={() => setEyeIcon1(!eyeIcon1)}>
                                    <BsFillEyeFill className={`eyeIcon ${!eyeIcon1 ? 'hidden' : ''}`} />
                                    <BsFillEyeSlashFill className={`eyeIcon ${eyeIcon1 ? 'hidden' : ''}`} />
                                </div>
                            </div>
                        </div>
                        <div className="inputLoginPage 3">
                            <input type="submit" className="btnSubmit" value="Ingresar" />
                        </div>
                    </form>
                    <p className="loginWith">o inicia sesión con (No funciona por ahora)</p>
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
                            <div className="eyeDiv">
                                <input
                                    type={`${eyeIcon2 ? 'password' : 'text'}`}
                                    name="registerPassword"
                                    value={registerPassword}
                                    onChange={onRegisterInputChange}
                                />
                                <div className="eyeDiv2" onClick={() => setEyeIcon2(!eyeIcon2)}>
                                    <BsFillEyeFill className={`eyeIcon ${!eyeIcon2 ? 'hidden' : ''}`} />
                                    <BsFillEyeSlashFill className={`eyeIcon ${eyeIcon2 ? 'hidden' : ''}`} />
                                </div>
                            </div>
                        </div>

                        <div className="inputLoginPage">
                            <p>Repita la contraseña</p>
                            <div className="eyeDiv">
                                <input
                                    type={`${eyeIcon3 ? 'password' : 'text'}`}
                                    name="registerPassword2"
                                    value={registerPassword2}
                                    onChange={onRegisterInputChange}
                                />
                                <div className="eyeDiv2" onClick={() => setEyeIcon3(!eyeIcon3)}>
                                    <BsFillEyeFill className={`eyeIcon ${!eyeIcon3 ? 'hidden' : ''}`} />
                                    <BsFillEyeSlashFill className={`eyeIcon ${eyeIcon3 ? 'hidden' : ''}`} />
                                </div>
                            </div>
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
