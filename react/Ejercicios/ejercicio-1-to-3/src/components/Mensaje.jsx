import { useState } from "react"
import { Button } from "react-bootstrap"

const Mensaje = () => {
    const [mensaje, setMensaje] = useState('');

  return (
    <>
    <div className="d-flex justify-content-center ">
        <h1>Hello world {mensaje}</h1>
    </div>
    <div>
        <Button 
            variant="primary" 
            className="d-flex mx-auto"
            onClick={() => setMensaje('from changed state')}
        >
            Primary
        </Button>
    </div>
    </>
  )
}

export default Mensaje