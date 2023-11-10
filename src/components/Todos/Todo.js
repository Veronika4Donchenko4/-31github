import { RiDeleteBin2Line, RiTodoFill } from 'react-icons/ri';
import { FaCheck } from 'react-icons/fa'
import styles from './Todo.module.css';

const Todo = ({ todo, deleteTodo, toggleTodo }) => {
  return (

    <div className={styles.todo} >
      <h2>gvjhbvm</h2>
      <div>jhbjb</div>
      <h2>gfjsdcnkjn</h2>
      <div>hbfkjdcnladsm</div>
      <RiTodoFill className={styles.todoIcon} />
      <div className={styles.todoText}>{todo.text}</div>
      <RiDeleteBin2Line className={styles.deleteIcon} onClick={() => deleteTodo(todo.id)}/>
      <FaCheck className={styles.checkIcon} onClick={() => toggleTodo(todo.id)}/>
    </div>
  );
};

export default Todo;
