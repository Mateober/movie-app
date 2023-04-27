export const LoginPage = () => {
    return (
        <div className="containerLoginPage">
            <div className="containerLoginPage2">
                <div className="containerLoginPage__login">
                    <h3>Ingreso</h3>
                    <form>
                        <div>
                            <input type="email" placeholder="Correo" name="loginEmail" />
                        </div>
                        <div>
                            <input type="password" placeholder="Contraseña" name="loginPassword" />
                        </div>
                        <div>
                            <input type="submit" className="btnSubmit" value="Login" />
                        </div>
                    </form>
                </div>

                <div className="containerLoginPage__register">
                    <h3>Registro</h3>
                    <form>
                        <div>
                            <input type="text" placeholder="Nombre" name="registerName" />
                        </div>
                        <div>
                            <input type="email" placeholder="Correo" name="registerEmail" />
                        </div>
                        <div>
                            <input type="password" placeholder="Contraseña" name="registerPassword" />
                        </div>

                        <div>
                            <input type="password" placeholder="Repita la contraseña" name="registerPassword2" />
                        </div>

                        <div>
                            <input type="submit" className="btnSubmit" value="Crear cuenta" />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};
