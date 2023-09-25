import { Link } from "react-router-dom";

const CursoItem = ({ curso }) => {
  return (
    <div className="col-3">
      <Link to={`/curso/${curso.id}`} className="link_curso">
        <div className="card h-100">
          <img src={curso.imagen} className="card-img-top" alt="" />
          <div className="card-body">
            <h5 className="card-title">{curso.title}</h5>
            <img
              src={curso.img_mentor}
              className="img-fluid"
              alt={curso.mentor}
            />
            <span className="card-text">{curso.mentor}</span>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default CursoItem;
