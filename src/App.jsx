import { CreateTodoButton } from "./CreateTodoButton"
import { TodoCounter } from "./TodoCounter"
import { TodoItem } from "./TodoItem"
import { TodoList } from "./TodoList"
import { TodoSearch } from "./TodoSearch"
import "./App.css"
import React from "react"

const defaultTodos = [
    { text: "Mi primera tarea", completed: true },
    { text: "Comer", completed: false },
    { text: "Dormir", completed: true },
    { text: "Codear", completed: false },
    { text: "Repetir", completed: true },
    { text: "Hacer ejercicio", completed: false },
    { text: "Leer documentación", completed: true },
    { text: "Practicar React", completed: false },
    { text: "Revisar commits", completed: true },
    { text: "Descansar la vista", completed: false },
];

function App(){
    return(
        <div className="a-container">
            <TodoCounter 
            completed={8}
            total={4}/>
            <TodoSearch/>
            <TodoList>
                {defaultTodos.map(({text,completed})=>{
                    return(
                        <TodoItem
                        key={text}
                        text={text}
                        completed={completed}
                        value={text}/>
                    )
                })}
            </TodoList>
            <CreateTodoButton/>
        </div>
    )
}

export {App};