import React, { useEffect, useState } from "react";
import TareaForm from "./componentes/TareaForm";
import Tarea from "./componentes/Tarea";
import "./App.css";

function App() {
  const [list, setlist] = useState([]);

  const nuevaTarea = (tarea) => {
    setlist([tarea, ...list]);
  };

  const borrar = (id) => {
    const listaFiltrada = list.filter((e, index) => index !== id);
    setlist(listaFiltrada);
  };

  const actualizarTarea = (id, tarea) => {
    const listaActualizada = list.map((e, index) => {
      if (index === id) {
        e = tarea;
      }

      return e;
    });

    setlist(listaActualizada);
  };

  useEffect(() => {
    fetch('https://assets.breatheco.de/apis/fake/todos/user/thenoa')
    .then(response => response.json())
    .then(todos => setlist(todos))
    .catch(error => console.log(error))
  }, [])

  useEffect(() => {
    if (list.length > 0) {
      const config = {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(list)
      }
      fetch('https://assets.breatheco.de/apis/fake/todos/user/thenoa', config)
    }
  }, [list])       
                
  return (
    <div className="App" key={list}>
      <TareaForm nuevaTarea={nuevaTarea} />

      <div className="lista">
        {list.map((e, index) => (
          <Tarea
            tarea={e}
            borrar={borrar}
            id={index}
          />
        ))}
      </div>
    </div>
  );
}

export default App;