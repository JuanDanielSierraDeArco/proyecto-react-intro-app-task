import React from "react";
import "./CreateTodoButton.css"
import { MdOutlinePlaylistAddCircle as Add} from "react-icons/md";
import { GoArrowRight as Dir} from "react-icons/go";

function CreateTodoButton(){
    return (
        <div className="ctb-container">
            <Dir className="cbt-dir"/>
            <Add className="cbt-add" onClick={(event) =>{
              console.log("Hicistes click")
              console.log(event)
              console.log(event.target)
            }}/>
        </div>
    )
}

export {CreateTodoButton};