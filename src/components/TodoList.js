import React from "react";
import Todo from "./Todo";
import TodoForm from "./TodoForm";

const TodoList = () => {
    const [todos, setTodos] = React.useState([]);


    // On SubmitHandler
    const onSubmitHandler = (todo) => {
        if (!todo.text || /^\*s$/.test(todo.text)) {
            return;
        }
        setTodos([todo, ...todos]);
    };

    // Update todo
    const updateTodo = (id, newValue) => {
        if (!newValue.text || /^\*s$/.test(newValue.text)) {
            return;
        }
        setTodos((prev) =>
            prev.map((item) => (item.id === id ? newValue : item))
        );
    };

    // --- CompleteTodo
    const completeTodo = (id) => {
        const updateTodo = todos.map((todo) => {
            if (todo.id === id) {
                todo.isComplete = !todo.isComplete;
            }
            console.log(todo);
            return todo;
        });
        setTodos(updateTodo);
    };


    // ---Remove Todo
    const removeTodo = (id) => {
        let removedTodo = todos.filter((todo) => todo.id !== id);
        setTodos(removedTodo);
    };
    return (
        <div>
            <TodoForm onSubmitHandler={onSubmitHandler} />
            <Todo
                todos={todos}
                completeTodo={completeTodo}
                removeHandler={removeTodo}
                updateTodo={updateTodo}
            />
        </div>
    );
};

export default TodoList;
