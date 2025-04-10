import {useEffect, useState} from "react";
import InputWithLabel from "../../shared/InputWithLabel.jsx";

function TodoListItem({todo, onCompleteTodo, onUpdateTodo}) {

    const [isEditing, setIsEditing] = useState(false);
    const [workingTitle, setWorkingTitle] = useState(todo.title);

    useEffect(() => { setWorkingTitle(todo.title)}, [todo, isEditing])

    const handleCancel = () => {
        setIsEditing(false)
        setWorkingTitle(todo.title)
    };

    const handleUpdate = (event) => {
        event.preventDefault();

        if (!isEditing) return

        setIsEditing(false);
        onUpdateTodo(todo.id, workingTitle)
    }

    const handleEdit = (event) => setWorkingTitle(event.target.value);

    return (
        <li>
            <form onSubmit={handleUpdate}>
                {isEditing ?
                    <>
                        <InputWithLabel
                            value={workingTitle}
                            onChange={handleEdit}
                        />
                        <button type="button" onClick={handleCancel}>Cancel</button>
                        <button type="button" onClick={handleUpdate}>Update</button>
                    </> :
                    <label>
                        <input
                            type="checkbox"
                            checked={todo.isCompleted}
                            onChange={() => onCompleteTodo(todo.id)}/>
                        <span onClick={() => setIsEditing(true)}>{todo.title}</span>
                    </label>}
            </form>
        </li>
    )
}

export default TodoListItem