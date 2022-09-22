import React from "react";
import "./styles.css";
import Button from 'react-bootstrap/Button';

const Tarea = (props) => {
  return (
    <div className="Tarea">
      <div>
        <input type="checkbox" />
        <span>{props.index + 1} - </span>
        <span>{props.titulo}</span>
        <Button variant="danger" style={{borderRadius: "40%"}} 
        onClick={()=>{
          props.eliminarTarea(props.index) //asi eliminamos todo el objeto en el index
        }}> X</Button>
      </div>
      <p>{props.descripcion}</p>
    </div>
  );
};

export default Tarea;