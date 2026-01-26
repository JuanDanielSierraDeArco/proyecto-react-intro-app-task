import React from "react";
import "./TodoList.css"

function TodoList({children}){
    return (
        <ul className="tl-todolist">
            {children}
        </ul>
    )
}

export {TodoList};