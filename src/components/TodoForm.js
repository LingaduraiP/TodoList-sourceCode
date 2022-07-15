import React from "react";

const TodoForm = (props) => {
    const [input, setInput] = React.useState(
        props.edit ? props.edit.value : ""
    );

    const inputRef = React.useRef(null);
    React.useEffect(() => {
        inputRef.current.focus();
    });

    const changeHandler = (e) => {
        setInput(e.target.value);
    };

    const submitHandler = (e) => {
        e.preventDefault();
        props.onSubmitHandler({
            id: Math.floor(Math.random() * 1000),
            text: input,
        });
        setInput("");
    };
    return props.edit ? (
        <form onSubmit={submitHandler} className='updatetodo_form'>
            <input
                className='todo-row'
                type='text'
                value={input}
                placeholder='update Todo'
                onChange={changeHandler}
                ref={inputRef}
            />
            <button>update</button>
        </form>
    ) : (
        <form onSubmit={submitHandler}>
            <input
                type='text'
                value={input}
                placeholder='Enter Todo'
                onChange={changeHandler}
                ref={inputRef}
            />
            <button>submit</button>
        </form>
    );
};

export default TodoForm;
