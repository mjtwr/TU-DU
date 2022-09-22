import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
// COMPONENT IMPORT
import NavbarComponent from './components/Navbar';
import Formulario from './components/Formulario'
import ListaTareas from './components/ListaTareas'

function App() {

  const todasLasTareasIniciales = [
    {
      titulo: "Hacer que funcione el to-do",
      descripcion: "Estamos aprendiendo react",
      completada: false
    },
    {
      titulo: "Investigar crons",
      descripcion: "Para usar en la app",
      completada: false
    },
    {
      titulo: "Hacer los labs",
      descripcion: "Apúrale",
      completada: false
    }
  ];

  const [todasLasTareas, setTodasLasTareas] = useState(todasLasTareasIniciales);

 const envioDeTarea = (nuevaTarea) => {
    //Actualizar un objeto con nuevos datos?
    // 1)Crea la copia con el spreadOperatos para arreglos
    //NUNCA usar push
    // 2)Agregar el nuevo objeto al arreglo copia
    // 3) Actualizar el estado copn el nuevo arreglo

    //AQUI HAREMOS UNA COPIA DEL ARRAY Y AGREGAMOS LA NUEVA
    const nuevoArreglo = [...todasLasTareas, nuevaTarea]
    setTodasLasTareas(nuevoArreglo)
  }

    // ELIMINAR TAREA
  const eliminarTarea = (posicion) =>{
    // 1) Creamos la copia del Array con el spreadOperator
    // 2)Usamos el método splice
    // 3)Actualizamos el Status con el nuevo arreglo
    const nuevoArregloTareas = [...todasLasTareas]
    nuevoArregloTareas.splice(posicion, 1)
    setTodasLasTareas(nuevoArregloTareas)
  }


  return (
    <div className="App">
      <NavbarComponent todasLasTareas = {todasLasTareas}/>
      <Container>
      <Row>
        <Col>
          <Formulario envioDeTarea={envioDeTarea}/> {/* Aquí mandamos props a Formulario*/ }
        </Col>

        <Col> 
            <ListaTareas todasLasTareas = {todasLasTareas} eliminarTarea={eliminarTarea}/>
        </Col>
      </Row>
    </Container>
    </div>
  );
}

export default App;
