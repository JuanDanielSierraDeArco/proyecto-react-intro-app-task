import React from "react";
import "./TodoCounter.css"
import { TodoContext } from "../../context/TodoContext";

function TodoCounter(){
  const {totalTodos, completedtodos} = React.useContext(TodoContext)
  let mensaje;

  if(totalTodos === 0){
    mensaje = "No tienes tareas por hacer!";
  }else if(totalTodos === completedtodos){
    mensaje = <><span>¡Felicidades!</span> Has completado todas tus tareas 🎉 </>
  } else {
    mensaje = <>Has completado <span>{completedtodos}</span> de <span>{totalTodos}</span> tareas 📝</>
  }

    return(
        <h1 className="tc-todocounter">{mensaje}</h1>
    )
}

export {TodoCounter};