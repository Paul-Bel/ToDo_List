import {useState, useRef} from "react";
import InputWithLabel from "../shared/InputWithLabel.jsx";

function AddTodoForm({onAddTodo, isSaving}) {

    const [workingTodo, setWorkingTodo] = useState('')
    const inputRef = useRef('')

    const handleAddTodo = (event) => {
        event.preventDefault();
        onAddTodo(workingTodo);
        setWorkingTodo('')
        inputRef.current.focus();
    }

    const handleInputChange = (event) => setWorkingTodo(event.target.value);

    return (
        <form onSubmit={handleAddTodo}>
            <InputWithLabel
                elementId={"todoTitle"}
                label={"Todo"}
                ref={inputRef}
                value={workingTodo}
                onChange={handleInputChange}
            />
            <button
                type="submit"
                disabled={!workingTodo.trim()}
            >
                {isSaving ? "Saving..." : "Add Todo"}
            </button>
        </form>
    )
}

export default AddTodoForm;