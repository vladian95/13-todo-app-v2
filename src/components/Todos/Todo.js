import { RiTodoFill } from 'react-icons/ri';

import './Todo.css';

function Todo({ todo, index, deleteTodo }) {
  return (
    <div className="todo" onDoubleClick={() => deleteTodo(index)}>
      <RiTodoFill className="todoIcon" />
      <div className="todoText">{todo}</div>
    </div>
  );
}

export default Todo;
