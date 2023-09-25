import React from 'react'
import DataTable from 'react-data-table-component'
import { cursos } from '../../helpers/data'

const CursosTable = () => {
    const columns = [
        {
            name: 'Titulo',
            selector: (row) => row.title,
            sortable: true
        },
        {
            name: 'Mentor',
            selector: (row) => row.mentor
        },
        {
            name: 'Portada',
            selector: (row) => (
                <div>
                    <img src={row.imagen} alt={row.title} width={200} />
                </div>
            )
        },
        {
            name: 'Acciones',
            selector: row => (
                <div>
                    <button className="btn btn-warning btn-sm mx-1">Editar</button>
                    <button className="btn btn-danger btn-sm mx-1">Borrar</button>
                </div>
            )
        }
    ]

  return (
    <DataTable
        columns={columns}
        data={cursos}
        pagination
    />
  )
}

export default CursosTable