<<<<<<< HEAD
import {useRef, useState} from "react";
=======
import {useState, useRef} from "react";
import InputWithLabel from "../shared/InputWithLabel.jsx";
>>>>>>> 3cad0fa (added: title editior)

function AddTodoForm({onAddTodo}) {

    const [workingTodo, setWorkingTodo] = useState('')
    const inputRef = useRef('')

    const handleAddTodo = (event) => {
        event.preventDefault();
        onAddTodo(workingTodo);
        setWorkingTodo('')
        inputRef.current.focus();
    }

<<<<<<< HEAD
    const handleNewTodo = (event) => setWorkingTodo(event.currentTarget.value)

    return (
        <form onSubmit={handleAddTodo}>
            <label htmlFor="todoTitle">Todo</label>
            <input onChange={handleNewTodo}
                   value={workingTodo}
                   ref={inputRef}
                   id="todoTitle"
                   type="text"
            />
            <button
                type="submit"
                disabled={!workingTodo.trim()}
            >
=======
    const handleInputChange = (event) => setWorkingTodo(event.target.value);

    return (
        <form onSubmit={handleAddTodo}>
            <InputWithLabel
                lelementId={"todoTitle"}
                label={"Todo"}
                ref={inputRef}
                value={workingTodo}
                onChange={handleInputChange}
            />
            <button type="submit"
                    disabled={!workingTodo.trim()}>
>>>>>>> 3cad0fa (added: title editior)
                Add Todo
            </button>
        </form>
    )
}

export default AddTodoForm;