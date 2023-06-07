import Todo from './Todo';
import './TodoList.css';

function TodoList({ todos, deleteTodo }) {
  return (
    <div className="todoListContainer">
      {todos.length === 0 && <h2>Todo list is empty</h2>}
      {todos.map((todo, index) => (
        <Todo todo={todo} key={index} deleteTodo={deleteTodo} index={index} />
      ))}
    </div>
  );
}

export default TodoList;
