import React from "react";
import { Link } from "react-router-dom";

const CursoDetail = ({ curso }) => {
  const { data } = curso;

  return (
    <>
      {data.length !== 0 ? (
        <>
          <div className="container mt-5">
            <div className="row">
              <div className="col">
                <div className="my-4">
                  <h3>{data[0].title}</h3>
                </div>
                <div className="mb-2">
                  <img
                    className="avatar"
                    src={data[0].img_mentor}
                    alt={data[0].mentor}
                  />
                  <span>{data[0].mentor}</span>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-6">
                <iframe
                  width="560"
                  height="315"
                  src={data[0].video}
                  title="YouTube video player"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                ></iframe>
                <p>{data[0].detalle}</p>
              </div>
              <div className="col-6">
                <div className="card ml-3 w-100">
                  <div className="card-header">
                    <h3>
                      $885 <span>ARG/mes</span>{" "}
                    </h3>
                  </div>
                  <div className="card-body">
                    <h4 className="card-title">Membresía Premium</h4>
                    <hr />
                    <ul>
                      <li>Acceso a +150 cursos</li>
                      <li>Cancela en cualquier momento</li>

                      <li>Clases en vivo semanales</li>
                    </ul>

                    <Link to="/comprar" className="btn btn-info btn-block">
                      Comprar Membresía
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : (
        <div className="container mt-5">
          <div className="row">
            <div className="col text-center">
              <h3>Curso no encontado</h3>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default CursoDetail;
