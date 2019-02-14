// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
// import React from 'react';
// import Todo from  './Todo';

// const TodoList = props => {
//     return (
//         <div>
//             {props.dos.map(todo => (
//             <Todo key={todo.id} todo={todo}/>
//         ))};
//     </div> 
//   );   
// };

// export default TodoList;

import React from 'react';

import Todo from './Todo';

const TodoList = props => {
  return (
    <div>
      {props.dos.map(x => (
        <Todo
          key={x.id}
          element={x}
        />
      ))}
    </div>
  );
};

export default TodoList;