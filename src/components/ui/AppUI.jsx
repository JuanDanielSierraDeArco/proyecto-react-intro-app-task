import { CreateTodoButton } from "../CreateTodoButton/CreateTodoButton";
import { TodoCounter } from "../TodoCounter/TodoCounter";
import { TodoItem } from "../TodoItem/TodoItem";
import { TodoList } from "../TodoList/TodoList";
import { TodoSearch } from "../TodoSearch/TodoSearch";
import "./AppUI.css";

function AppUI({
  completedtodos,
  completeTodo,
  totalTodos,
  searchValue,
  setSearchValue,
  searchedTodos,
  deleteTodo,
  loading,
  error,
}) {
  return (
    <div className="a-container">
      <TodoCounter completed={completedtodos} total={totalTodos} />
      <TodoSearch searchValue={searchValue} setSearchValue={setSearchValue} />
      <TodoList>
        {loading && !error && <p>Estamos cargando</p>}
        {!loading && error && <p>Error del servidor</p>}
        {(!loading && !error && totalTodos === 0) && <p>Crea tu primer todo</p>}
        {(!loading && !error && totalTodos !== 0) && searchedTodos.map(({ text, completed }) => {
          return (
            <TodoItem
              key={text}
              text={text}
              completed={completed}
              value={text}
              onCompleted={() => completeTodo(text)}
              onDelete={() => deleteTodo(text)}
            />
          );
        })}
      </TodoList>
      <CreateTodoButton />
    </div>
  );
}

export {AppUI}