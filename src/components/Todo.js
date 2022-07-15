import React from "react";
import TodoForm from "./TodoForm";

const Todo = ({ todos, completeTodo, removeHandler, updateTodo }) => {
    const [edit, setEdit] = React.useState({
        id: null,
        value: "",
    });

    const submitUpdate = (value) => {
        updateTodo(edit.id, value);
        setEdit({ id: null, value: "" });
    };
    if (edit.id) {
        return <TodoForm edit={edit} onSubmitHandler={submitUpdate} />;
    }
    return todos.map((todo, index) => (
        <div
            className={todo.isComplete ? "todo-row complete" : "todo-row"}
            key={index}
        >
              <div onClick={() => completeTodo(todo.id)}>{todo.text}</div>
            <div className='buttons'>
                <button onClick={() => removeHandler(todo.id)}>delete</button>
                <button
                    onClick={() => setEdit({ id: todo.id, value: todo.value })}
                >
                    edit
                </button>
            </div>
        </div>
    ));
};

export default Todo;
