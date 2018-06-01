import React from "react";
import ListEntry from "./ListEntry.jsx"


const List =(props)=> {
return (
    <div>
        {props.tasks.map((task,i)=>
            <ListEntry key={i} task={task} />
        )}
        
    </div>
)

}

export default List;