import React from 'react'

const Error = ({ children }) => {
  return (
    <div className='bg-danger text-center text-white fw-bold fs-5'>
        {children}
    </div>
  )
}

export default Error