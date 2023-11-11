import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import TodoForm from './components/Todos/TodoForm';
import TodoList from './components/Todos/TodoList';
import './App.css';
import './index.css';

function App() {
  const [todos, setTodos] = useState([]);

  const addTodoHandler = (text) => {
    const newTodo = {
      text,
      isCompleted: false,
      id: uuidv4(),
    };
    
    console.log(newTodo)
    setTodos([...todos, newTodo ]);
  };

  const deleteTodoHandler = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const toggleTodoHandler = (id) => {
    setTodos(todos.map((todo) => {
      return todo.id === id 
      ? {...todo, isCompleted: !todo.isCompleted}
    : {...todo}
    }))
  }

  const comletedTodosCount = todos.filter((todo) => todo.isComleted)

  return (
    <div className="App">
      <TodoForm addTodo={addTodoHandler} />
      <TodoList todos={todos} deleteTodo={deleteTodoHandler} toggleToDo={toggleTodoHandler}/>
    {comletedTodosCount > 0 && <h2>{`You have completed ${comletedTodosCount} todos`}</h2>}
    </div>
  )
}

export default App;
