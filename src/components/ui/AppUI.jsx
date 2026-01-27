import React from "react";
import { CreateTodoButton } from "../CreateTodoButton/CreateTodoButton";
import { TodoCounter } from "../TodoCounter/TodoCounter";
import { TodoItem } from "../TodoItem/TodoItem";
import { TodoList } from "../TodoList/TodoList";
import { TodoSearch } from "../TodoSearch/TodoSearch";
import { TodoLoading } from "./TodoLoading";
import { TodoError } from "./TodoError";
import { TodoEmpty } from "./TodoEmpty";
import { TodoContext } from "../../context/TodoContext";
import "./AppUI.css";

function AppUI() {
  const {
    completeTodo,
    totalTodos,
    searchedTodos,
    deleteTodo,
    loading,
    error,} = React.useContext(TodoContext);
  return (
    <div className="a-container">
      <TodoCounter />
      <TodoSearch />
          <TodoList>
            {loading && !error && (
              <>
                <TodoLoading />
                <TodoLoading />
                <TodoLoading />
                <TodoLoading />
              </>
            )}
            {!loading && error && (
              <>
                <TodoError />
                <TodoError />
                <TodoError />
                <TodoError />
              </>
            )}
            {!loading && !error && totalTodos === 0 && <TodoEmpty />}
            {!loading &&
              !error &&
              totalTodos !== 0 &&
              searchedTodos.map(({ text, completed }) => {
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

export { AppUI };
