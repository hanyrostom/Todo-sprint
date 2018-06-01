import React from "react";

const ListEntry =(props)=> {

return (
    <div>{props.task.text} : {props.task.status}</div>
)

}

export default ListEntry;