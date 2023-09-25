import React from "react";
import Registro from "../components/Registro";
import home1 from "../assets/images/home1.png";
import "../css/registro.css";

const RegistroView = () => {
  return (
    <>
      <div className="container">
        <div className="row mb-3">
          <div className="col w-100">
            <div className="card-registro justify-content-center mx-auto border p-3 rounded">
              <img src={home1} className="card-img-top" alt="portada" />
              <div className="card-body">
                <h3 className="card-title text-center mb-3">
                  Crea tu Cuenta gratis
                </h3>
                <Registro />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default RegistroView;
