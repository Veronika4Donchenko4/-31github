import { RiDeleteBin2Line, RiRefreshLine } from 'react-icons/ri';
import Button from '../UI/Button';

const TodosActions = ({
  resetTodos,
  deleteCompletedTodos,
  comletedTodosExist,
}) => {
  return (
    <>
      <Button title="Reset Todos" onClick={resetTodos}>
        <RiRefreshLine />
      </Button>
      <Button
        title="You can clear Completed Todos"
        onClick={deleteCompletedTodos}
        disabled={!comletedTodosExist}
      >
        <RiDeleteBin2Line />
      </Button>
    </>
  );
};

export default TodosActions;
