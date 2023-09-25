import { useEffect, useState } from "react";
import CursoDetail from "../components/CursoDetail";
import ProgramDetail from "../components/ProgramDetail";
import { cursos, programas } from "../helpers/data";
import { useParams } from "react-router-dom";
import "../css/curso.css";

const Curso = () => {
  const [user, setUser] = useState(["1"]);
  const [curso, setCurso] = useState({
    data: [],
    loading: true,
  });

  const [programa, setPrograma] = useState({
    data: [],
    loading: true,
  });

  const getProgramFiltered = () => {
    const program = programas.filter((programa) => programa.id_curso === +id);

    setPrograma({
      data: program,
      loading: false,
    });
  };

  const { id } = useParams();
  
  const getCurso = () => {
    const cursoFiltered = cursos.filter((curso) => curso.id === +id);
    setCurso({
      data: cursoFiltered,
      loading: false,
    });
  };

  useEffect(() => {
    getCurso();
    getProgramFiltered();
  }, []);

  return (
    <div className="mb-4">
      {user.length > 0 ? (
        <>
          <CursoDetail curso={curso} />
          <ProgramDetail programa={programa} />
        </>
      ) : (
        <div className="alert alert-danger w-100 text-center" role="alert">
          Para ver esta información, debe iniciar sesión.
        </div>
      )}
    </div>
  );
};

export default Curso;
