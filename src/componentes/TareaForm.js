import React, { useState } from "react";
import "../App.css";

const TareaForm = (props) => {
  const [inputText, setInputText] = useState("");
  const [validacion, setValidacion] = useState(true);

  const manejarFormulario = (event) => {
    setInputText(event.target.value);
  };

  const submit = (event) => {
    event.preventDefault();
    if (inputText.trim() !== "") {
      props.nuevaTarea(inputText);
      setInputText("");
      setValidacion(true);
    } else {
      setValidacion(false);
    }
  };

  return (
    <div>
      <form className="form" onSubmit={submit}>
      <h1 style={{ color: "pink", fontSize: 100, margin: 0 }}>todos</h1>
        <input value={inputText} onChange={manejarFormulario} placeholder="What needs to be done?"/>
      </form>
      {!validacion && (
        <div className="validacion">Añada una tarea, por favor</div>
      )}
    </div>
  );
};

export default TareaForm;