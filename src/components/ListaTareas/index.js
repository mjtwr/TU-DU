import React from 'react'
import Tarea from '../Tarea'

const ListaTareas = (props) => {
const {todasLasTareas} = props;

  return (
    <div>
    <h2>Lista de Tareas ✅</h2>
    {
      todasLasTareas.map((infoCadaTarea, i) =>{
        return <Tarea key={i} {...infoCadaTarea} //Cuando trabajamos con map --> utilizamos key={posicion}
        index={i}
        eliminarTarea={props.eliminarTarea}
        /> 
      
      })
    }
    </div>
  )
}

export default ListaTareas;