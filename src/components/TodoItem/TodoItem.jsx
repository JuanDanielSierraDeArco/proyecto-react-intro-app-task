import React from "react";
import {CompleteIcon} from "../TodoIcon/CompleteIcon";
import {DeleteIcon} from "../TodoIcon/DeleteIcon";
import "./TodoItem.css"

function TodoItem(props){
    return (
        <li className="ti-todoitem">
          <CompleteIcon
            completed={props.completed}
            onCompleted={props.onCompleted}
          />
          <p className={`ti-todoitem-p ${props.completed && "ti-todoitem-p--completed"}`}>{props.text}</p>
          <DeleteIcon
          onDelete={props.onDelete}
          />
        </li>
    )
}

export {TodoItem};