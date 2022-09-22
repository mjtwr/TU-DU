import React, {useState} from 'react'
import Button from 'react-bootstrap/Button';
import './styles.css';


const Formulario = (props) => {
//FORMULARIOS CONTROLADOS
//  1) Crear un State = useState
//  !!No olvides Importalo arribita!
// 2) Vincular input con el State --> con un value
// 3) Manejar el evento onChange
//    3.1) Funcion que recibe el evento
//    3.2) Vincular el onChange del input con la funcion generada en 3.1
//    3.3) Actualizar State --> event.target.value usando la funcion
// 4) Cuando tenemos las funciones de todos los inputs -> manejamos el evento 
//    onSubmit del form
//    4.1)Generamos su funcion que recibe el event
//    4.2) vincular onSubmit del form con el 4.1
//    4.3 Prevenir el comportamiento por defecto de rercargar la pagina
//    se utiliza event.preventDefault()

const [titulo,setTitulo] = useState("");
const [descripcion, setDescripcion] = useState("");

function cambioTitulo(event){
  setTitulo(event.target.value)
}
function cambiaDescripcion(event){
  setDescripcion(event.target.value)
}
function submitTarea(event){
  event.preventDefault();
  props.envioDeTarea({
    titulo: titulo,
    descripcion: descripcion,
    completada: false
  });
  //Limpiar el form
  setTitulo("")
  setDescripcion("")
}

  return (
    <form className='form' onSubmit={submitTarea}>
    <h2>Crea una Tarea ✍ </h2>
    <input placeholder='Ingresa Titulo' value={titulo} onChange = {cambioTitulo}/>
    <input placeholder='Descripción' value={descripcion} onChange = {cambiaDescripcion}/>
    <Button variant='primary' type='submit'>Crear</Button>
    </form>
  )
}

export default Formulario;