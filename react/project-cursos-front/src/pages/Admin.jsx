import React, { useState } from "react";
import CursosTable from "../components/Admin/CursosTable";
import ModalCreacion from "../components/Admin/ModalCreacion";

const Admin = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col">
          <h2>Admin</h2>
          <button className="btn btn-outline-primary" onClick={handleShow}>Agregar curso</button>
          <hr />
        </div>
      </div>
      <div className="row">
        <div className="col">
          <h3>Administrador de cursos</h3>
          <hr />
        </div>
      </div>

      <div className="row">
        <CursosTable />
      </div>

      <ModalCreacion show={show} handleClose={handleClose} />


    </div>
  );
};

export default Admin;
