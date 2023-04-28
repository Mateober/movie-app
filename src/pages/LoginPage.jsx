import { useState } from 'react';
import '../sass/loginPage.scss';
import { FcGoogle } from 'react-icons/fc';
import { ImFacebook2 } from 'react-icons/im';

export const LoginPage = () => {
    const [registerVisible, setRegisterVisible] = useState(false);

    return (
        <div className="LoginPage">
            <div className="LoginPage2">
                <div className={`container__login ${registerVisible ? 'hidden' : ''}`}>
                    <h3>Ingresar</h3>
                    <form>
                        <div className="inputLoginPage">
                            <p>Email</p>
                            <input type="email" name="loginEmail" />
                        </div>
                        <div className="inputLoginPage">
                            <p>
                                Password <span>Olvidaste tu contraseña?</span>{' '}
                            </p>
                            <input type="password" name="loginPassword" />
                        </div>
                        <div className="inputLoginPage">
                            <input type="submit" className="btnSubmit" value="Ingresar" />
                        </div>
                    </form>
                    <p className='loginWith'>o inicia sesión con</p>
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
                    <form>
                        <div className="divnamesurname">
                            <div className="inputLoginPage ilp2">
                                <p>Nombre</p>
                                <input type="text" name="registerName" />
                            </div>
                            <div className="inputLoginPage ilp2">
                                <p>Apellido</p>
                                <input type="text" name="registerSurname" />
                            </div>
                        </div>

                        <div className="inputLoginPage">
                            <p>Email</p>
                            <input type="email" name="registerEmail" />
                        </div>
                        <div className="inputLoginPage">
                            <p>Contraseña</p>
                            <input type="password" name="registerPassword" />
                        </div>

                        <div className="inputLoginPage">
                            <p>Repita la contraseña</p>
                            <input type="password" name="registerPassword2" />
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
