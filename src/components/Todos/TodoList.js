import Todo from './Todo';
import './TodoList.css';

function TodoList({ todos, deleteTodo }) {
  return (
    <div className="todoListContainer">
      {!todos.length && <h2>Todo list is empty</h2>}
      {todos.map((todo) => (
        <Todo todo={todo} key={todo.id} deleteTodo={deleteTodo} />
      ))}
    </div>
  );
}

export default TodoList;
