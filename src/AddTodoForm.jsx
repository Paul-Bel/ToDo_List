import {useRef, useState} from "react";

function AddTodoForm({onAddTodo}) {

    const [workingTodo, setWorkingTodo] = useState('')
    const inputRef = useRef('')

    const handleAddTodo = (event) => {
        event.preventDefault();
        onAddTodo(workingTodo);
        setWorkingTodo('')
        inputRef.current.focus();
    }

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
                Add Todo
            </button>
        </form>
    )
}

export default AddTodoForm;