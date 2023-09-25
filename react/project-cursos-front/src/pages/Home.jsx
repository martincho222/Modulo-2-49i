import { Link } from "react-router-dom";
import Home2 from "../assets/images/home2.png";
import '../css/home.css';

const Home = () => {
  return (
    <>
      <div className="container home-container">
        <div className="row">
          <div className="col-4 mt-5">
            <h1>La plataforma de aprendizaje <br /> para desarrolladores</h1>
            <Link to="/registro" className="btn btn-outline-info mt-3">
              Crea tu cuenta
            </Link>
            <p className="text-grey mt-2">Unete a los más de <b>500mil</b> estudiantes</p>
          </div>
          <div className="col-8">
            <img src={Home2} alt="Home2" />
          </div>
        </div>
        <div className="row">
          <div className="col-8 offset-2 parrafito text-grey">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptates enim corporis sint libero repellendus itaque{" "}
              <b>ratione temporibus illo iste accusantium!</b>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
