import React, { useState } from "react";
import "../App.css";

const Tarea = (props) => {
  const [modoEdit] = useState(false);

  const borrarTarea = () => {
    props.borrar(props.id);
  };

  return (
    <div>
      {!modoEdit ? (
        <div className="tarea">
          <span>{props.list}</span>
          <span onClick={borrarTarea} style={{color: "red"}}>X</span>
        </div>
      ) : (
        <form>        
        </form>
      )}
    </div>
  );
};

export default Tarea;