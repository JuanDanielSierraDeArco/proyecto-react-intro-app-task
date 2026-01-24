import React from "react";
import "./TodoSearch.css"

function TodoSearch(){
  const [searchValue, setSearchValue] = React.useState("");
    return (
        <input type="text"
        placeholder="Buscar tarea"
        className="ts-todosearch"
        value={searchValue}
        onChange={(event) =>{
          setSearchValue(event.target.value);
        }}
        />
    )
}

export {TodoSearch};