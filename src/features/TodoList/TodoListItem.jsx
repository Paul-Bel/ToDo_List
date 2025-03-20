import {useState} from "react";
import InputWithLabel from "../../shared/InputWithLabel.jsx";

function TodoListItem({todo, onCompleteTodo, onUpdateTodo}) {

    const [isEditing, setIsEditing] = useState(false);
    const [workingTitle, setWorkingTitle] = useState(todo.title);

    const handleCancel = () => {
        setIsEditing(false)
        setWorkingTitle(todo.title)};

    const handleEdit = (event) => setWorkingTitle(event.target.value);

    const handleUpdate = (event) => {
        if (!isEditing) {
            return
        }
        event.preventDefault();
        setIsEditing(false);
        onUpdateTodo(todo.id, workingTitle)
    }

    return (
        <li>
            <form>
<<<<<<< HEAD
                <input
                    type="checkbox"
                    checked={todo.isCompleted}
                    onChange={() => onCompleteTodo(todo.id)}/>
                {todo.title}
=======
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
>>>>>>> 3cad0fa (added: title editior)
            </form>
        </li>
    )
}

export default TodoListItem