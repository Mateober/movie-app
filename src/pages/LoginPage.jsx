import { useEffect, useState } from 'react';
import '../sass/loginPage.scss';
import { FcGoogle } from 'react-icons/fc';
import { ImFacebook2 } from 'react-icons/im';
import { BsFillEyeFill, BsFillEyeSlashFill } from 'react-icons/bs';
import { FaExclamationCircle } from 'react-icons/fa';
import { useForm } from '../hooks/useForm';
import { useSelector } from 'react-redux';
import { useAuthStore } from '../hooks/useAuthStore';
import { loginValidator, signUpValidator } from '../helpers/validateForm';

const loginFormFields = {
    loginEmail: '',
    loginPassword: '',
};
const registerFormFields = {
    registerName: '',
    registerLastname: '',
    registerEmail: '',
    registerPassword: '',
    registerPassword2: '',
    registerUsername: 'Username',
    registerProfilepic: 'https://i.postimg.cc/Rh66Bkp6/Avatar9.png',
};

export const LoginPage = () => {
    const { errorMessage } = useSelector((state) => state.auth);
    const { startLogin, startRegister } = useAuthStore();

    const [eyeIcon1, setEyeIcon1] = useState(true);
    const [eyeIcon2, setEyeIcon2] = useState(true);
    const [eyeIcon3, setEyeIcon3] = useState(true);

    const [registerVisible, setRegisterVisible] = useState(false);

    const { loginEmail, loginPassword, onInputChange: onLoginInputChange } = useForm(loginFormFields);
    const {
        registerName,
        registerLastname,
        registerEmail,
        registerPassword,
        registerPassword2,
        registerUsername,
        registerProfilepic,
        onInputChange: onRegisterInputChange,
    } = useForm(registerFormFields);

    const [errorLoginForm, setErrorLoginForm] = useState('');
    const [errorRegisterForm, setErrorRegisterForm] = useState('');
    const [errorApi, setErrorApi] = useState('');

    const loginSubmit = (event) => {
        event.preventDefault();
        if (!loginValidator(loginEmail, loginPassword, setErrorLoginForm)) {
            return;
        }

        startLogin({ email: loginEmail, password: loginPassword });
    };

    const registerSubmit = (event) => {
        event.preventDefault();
        if (!signUpValidator(registerName, registerLastname, registerEmail, registerPassword, registerPassword2, setErrorRegisterForm)) {
            return;
        }
        startRegister({ name: registerName, lastname: registerLastname, email: registerEmail, password: registerPassword, username: registerUsername, profilepic: registerProfilepic });
    };

    useEffect(() => {
        if (errorMessage !== undefined) {
            setErrorApi(errorMessage);
        }
    }, [errorMessage]);

    const [menuInfo, setMenuInfo] = useState(false);

    const onClickIconInfo = () => {
        setMenuInfo(!menuInfo);
        setTimeout(() => {
            setMenuInfo(false);
        }, 4000);
    };
    return (
        <div className="LoginPage">
            <div className="LoginPage2">
                <div className={`container__login ${registerVisible ? 'hidden' : ''}`}>
                    <h3>Login</h3>
                    <form onSubmit={loginSubmit}>
                        <div className="inputLoginPage">
                            <p>Email</p>
                            <input type="text" name="loginEmail" value={loginEmail} onChange={onLoginInputChange} />
                        </div>
                        <div className="inputLoginPage inputPassword">
                            <div className="passwordInfo">
                                <div className="passwordTitleIcon">
                                    <p className="passwordTitle">Password</p>
                                    <FaExclamationCircle className="iconExclamation" onClick={onClickIconInfo} />
                                </div>

                                <ul className={`passwordInfoInfo ${menuInfo ? 'menuInfoTrue' : ''}`}>
                                    <li>Password must contain:</li>
                                    <li>Minimum 8 characters</li>
                                    <li>Minimum 1 lowercase and uppercase</li>
                                    <li>Minimum 1 special character</li>
                                </ul>
                            </div>

                            <div className="eyeDiv">
                                <input type={`${eyeIcon1 ? 'password' : 'text'}`} name="loginPassword" value={loginPassword} onChange={onLoginInputChange} />
                                <div className="eyeDiv2" onClick={() => setEyeIcon1(!eyeIcon1)}>
                                    <BsFillEyeFill className={`eyeIcon ${!eyeIcon1 ? 'hidden' : ''}`} />
                                    <BsFillEyeSlashFill className={`eyeIcon ${eyeIcon1 ? 'hidden' : ''}`} />
                                </div>
                            </div>

                            <p className="forget">Did you forget your password?</p>
                        </div>
                        <div className="errorMessage">{errorLoginForm !== '' ? errorLoginForm : errorApi}</div>
                        <div className="inputLoginPage 3">
                            <input type="submit" className="btnSubmit" value="Login" />
                        </div>
                    </form>
                    <p className="loginWith">or login with (Not working for now)</p>
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
                        You have not yet registered? <span>Register now</span>
                    </p>
                </div>

                <div className={`container__login ${registerVisible ? '' : 'hidden'}`}>
                    <h3>Register</h3>
                    <form onSubmit={registerSubmit}>
                        <div className="divnamesurname">
                            <div className="inputLoginPage ilp2">
                                <p>Name</p>
                                <input type="text" name="registerName" value={registerName} onChange={onRegisterInputChange} />
                            </div>
                            <div className="inputLoginPage ilp2">
                                <p>Last name</p>
                                <input type="text" name="registerLastname" value={registerLastname} onChange={onRegisterInputChange} />
                            </div>
                        </div>

                        <div className="inputLoginPage">
                            <p>Email</p>
                            <input type="text" name="registerEmail" value={registerEmail} onChange={onRegisterInputChange} />
                        </div>
                        <div className="inputLoginPage">
                            <div className="passwordInfo">
                                <div className="passwordTitleIcon">
                                    <p className="passwordTitle">Password</p>
                                    <FaExclamationCircle className="iconExclamation" onClick={onClickIconInfo} />
                                </div>

                                <ul className={`passwordInfoInfo ${menuInfo ? 'menuInfoTrue' : ''}`}>
                                    <li>Password must contain:</li>
                                    <li>Minimum 8 characters</li>
                                    <li>Minimum 1 lowercase and uppercase</li>
                                    <li>Minimum 1 special character</li>
                                </ul>
                            </div>
                            <div className="eyeDiv">
                                <input type={`${eyeIcon2 ? 'password' : 'text'}`} name="registerPassword" value={registerPassword} onChange={onRegisterInputChange} />
                                <div className="eyeDiv2" onClick={() => setEyeIcon2(!eyeIcon2)}>
                                    <BsFillEyeFill className={`eyeIcon ${!eyeIcon2 ? 'hidden' : ''}`} />
                                    <BsFillEyeSlashFill className={`eyeIcon ${eyeIcon2 ? 'hidden' : ''}`} />
                                </div>
                            </div>
                        </div>

                        <div className="inputLoginPage">
                            <p>Repeat password</p>
                            <div className="eyeDiv">
                                <input type={`${eyeIcon3 ? 'password' : 'text'}`} name="registerPassword2" value={registerPassword2} onChange={onRegisterInputChange} />
                                <div className="eyeDiv2" onClick={() => setEyeIcon3(!eyeIcon3)}>
                                    <BsFillEyeFill className={`eyeIcon ${!eyeIcon3 ? 'hidden' : ''}`} />
                                    <BsFillEyeSlashFill className={`eyeIcon ${eyeIcon3 ? 'hidden' : ''}`} />
                                </div>
                            </div>
                        </div>
                        <div className="errorMessage">{errorRegisterForm !== '' ? errorRegisterForm : errorApi}</div>
                        <div className="inputLoginPage">
                            <input type="submit" className="btnSubmit" value="Create Account" />
                        </div>
                        <p className="registerNow" onClick={() => setRegisterVisible(!registerVisible)}>
                            Are you already registered? <span>Login now</span>
                        </p>
                    </form>
                </div>
            </div>
        </div>
    );
};
