import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import '../css/navigation.css'
import { Link } from 'react-router-dom';

const Navigation = () => {
  return (
    <Navbar expand="lg" bg='light' className="nav-header">
      <Container>
        <Navbar.Brand>
          <Link to='/' className='items'>Cursos App</Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Link to="/" className='items mx-2' >Inicio</Link>
            <Link to="/cursos" className='items mx-2' >Cursos</Link>
            <Link to="/login" className='items mx-2' >Iniciar Sesión</Link>
            <Link to="/registro" className='items mx-2' >Registro</Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Navigation