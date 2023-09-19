import { useState } from "react"
import { Button } from "react-bootstrap"

const Mensaje = ({ mensaje }) => {
    const [state, setState] = useState('');

  return (
    <>
    <div className="d-flex justify-content-center ">
        <h1>{mensaje} {state}</h1>
    </div>
    <div>
        <Button 
            variant="primary" 
            className="d-flex mx-auto"
            onClick={() => setState('from changed state')}
        >
            Click Me
        </Button>
    </div>
    </>
  )
}

export default Mensaje