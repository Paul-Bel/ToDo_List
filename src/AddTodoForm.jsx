import {useState} from "react";

function AddTodoForm({onAddTodo}) {

    const [workingTodo, setWorkingTodo] = useState('')

    const handleAddTodo = (event) => {
        event.preventDefault();
        onAddTodo(workingTodo);
        setWorkingTodo('')
        event.target.title.focus();
    }

    return (
        <form onSubmit={handleAddTodo}>
            <label htmlFor="todoTitle">Todo</label>
            <input onChange={(e) => setWorkingTodo(e.currentTarget.value)}
                   value={workingTodo}
                   name="title"
                   id="todoTitle"
                   type="text"/>
            <button type="submit"
                    disabled={!workingTodo.trim()}>
                Add Todo
            </button>
        </form>
    )
}

export default AddTodoForm;