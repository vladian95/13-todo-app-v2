import { RiDeleteBin2Line, RiTodoFill } from 'react-icons/ri';
import { FaCheck } from 'react-icons/fa';

import './Todo.css';

function Todo({ todo, deleteTodo }) {
  return (
    <div className="todo">
      <RiTodoFill className="todoIcon" />
      <div className="todoText">{todo.text}</div>
      <RiDeleteBin2Line
        className="deleteIcon"
        onClick={() => deleteTodo(todo.id)}
      />
      <FaCheck className="checkIcon" />
    </div>
  );
}

export default Todo;
