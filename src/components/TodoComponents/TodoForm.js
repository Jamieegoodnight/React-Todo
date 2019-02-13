import React from 'react';

const TodoForm = props => {
    return (
        <form onSubmit={props.addTodo}>
            <input 
            type="text" 
            placeholder="todo"
            value={props.task}
            name="task"
            onChange={props.handleChanges}
            >
            </input>
            <button onClick={props.addTodo}>Add Todo</button>
            <button>Clear Completed Todos</button>
        </form>
    );
}

export default TodoForm;