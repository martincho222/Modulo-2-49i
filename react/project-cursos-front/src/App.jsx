import { Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import LoginPage from "./pages/LoginPage"
import RegistroView from "./pages/RegistroView"
import Navigation from "./components/Navigation"
import Cursos from "./pages/Cursos"
import Curso from "./pages/Curso"
import Admin from "./pages/Admin"


function App() {

  return (
    <>
      <Navigation />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/registro" element={<RegistroView />} />
        <Route path="/cursos" element={<Cursos />} />
        <Route path="/curso/:id" element={<Curso />} />
        <Route path="/admin" element={<Admin />} />
        <Route path='*' element={<h1>Error 404</h1>} />
      </Routes>
    </>
  )
}

export default App
