import React from "react";

function TodoItem(props){
    return(
        <did className="todo-item">
            {props.item}
        </did>
    )
}

export default TodoItem