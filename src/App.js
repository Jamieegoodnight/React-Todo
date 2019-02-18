import React from 'react';
import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm';


class App extends React.Component {
  constructor(){
    super();
    this.state = {
      dos: [ {
        task: "",
        id: Date.now(),
        completed: false
        }
      ]
    };
  }


  toggleCompleted = itemId => {
    this.setState({
      dos: this.state.dos.map(item => {
        if (itemId === item.id){
          return {...item, completed: !item.completed}
        }
        return item;
      })
    })
 }

  addTodo = event => {
    event.preventDefault();
    const newDos = {
      task: this.state.task,
      id: Date.now(),
      completed: false
    };
    this.setState({
      dos: [...this.state.dos, newDos],
      task:"",
    })
  }

  clearCompleted = e => {
    this.setState({
      dos: this.state.dos.filter(item => !item.completed)
    });
  }


 handleChanges = event => {
   this.setState({
     [event.target.name]: event.target.value
   });
 }

  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  render() {
    return (
      <div className="todo-app">
        <h2>Don't you have stuff TO DO?</h2>
        <h3>Are you a freaky, obsessive organizer who needs to make lists and shit?</h3>
        <h4>Well, BOY. Here you go:</h4>
        <TodoList 
        dos={this.state.dos}
        toggleCompleted={this.toggleCompleted}
        />
        <TodoForm 
        task={this.state.task}
        handleChanges={this.handleChanges}
        addTodo={this.addTodo}
        clearCompleted={this.clearCompleted}
        />
      </div>
    );
  }
}

export default App;
