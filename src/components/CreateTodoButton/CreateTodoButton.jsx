import React from "react";
import "./CreateTodoButton.css"
import { MdOutlinePlaylistAddCircle as Add} from "react-icons/md";
import { GoArrowRight as Dir} from "react-icons/go";

function CreateTodoButton({setOpenModal}){
    return (
        <div className="ctb-container">
            <Dir className="cbt-dir"/>
            <Add className="cbt-add" 
            onClick={() =>{setOpenModal(state => !state)}}/>
        </div>
    )
}

export {CreateTodoButton};