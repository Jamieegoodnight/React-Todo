import React from 'react';


const Todo = props => {
    return (
        <div className={`${props.element.completed ? 'complete' : null }`} onClick={() => props.toggleCompleted(props.element.id)}>
            <p>{props.element.task}</p>
        </div>
    )  
}

export default Todo;