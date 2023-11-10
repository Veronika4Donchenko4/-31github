import { useState } from 'react';
import styles from './TodoForm.module.css';

const TodoForm = ({ addTodo }) => {
  const [text, setText] = useState('');
  const onSubmitHandler = (event) => {
    event.preventDefault();
    addTodo(text);
    setText('');
  };
  return (
    <div>
    <form onSubmit={onSubmitHandler}>
      <h1 className={styles.toDo}>Todo App</h1>
      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Enter new todo"
        className={styles.input}
      />
      <button type="submit" className={styles.myBtn}>
        Submit
      </button>
    </form>
    </div>
  );
};

export default TodoForm;
