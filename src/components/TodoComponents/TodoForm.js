import React from 'react';

const TodoForm = props => {
    return (
        <form className="form" onSubmit={props.addTodo}>
            <input 
            type="text" 
            placeholder="todo"
            value={props.task}
            name="task"
            onChange={props.handleChanges}
            >
            </input>
            <button onClick={props.addTodo}>Add Todo</button>
            <button onClick={props.clearCompleted}>Clear Completed Todos</button>
        </form>
    );
}

export default TodoForm;