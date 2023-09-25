import React from "react";
import Login from "../components/Login";

const LoginPage = () => {
  return (
    <div>
      <div className="container mt-5">
        <div className="row text-center mb-3">
          <div className="col">
            <h3>Iniciar Sesión</h3>
          </div>
        </div>
        <div className="row">
          <div className="col-4 offset-4">
            <p className="text-center">Ingresa tu correo electrónico</p>
            <Login />
            <div className="text-center text-muted mt-4">
              <span>
                Al continuar con tu correo aceptas los términos y condiciones y
                el aviso de privacidad.
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
