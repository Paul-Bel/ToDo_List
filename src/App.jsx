import './App.css'
import TodoList from "./TodoList.jsx";
import AddTodoForm from "./AddTodoForm.jsx";
import {useState} from "react";

function App() {


    const [newTodo, setNewTodo] = useState("")

    const addTodo = (newTodo) => setNewTodo((prev) => {
        return [...prev, {id: prev.length + 1, title: newTodo}] //when deletion will work, I'll change the principle of assigning the id, for now just added for work.
    })

    return (
        <div>
            <h1>My Todos</h1>
            <AddTodoForm onAddTodo={setNewTodo}/>
            <p>{newTodo}</p>
            <TodoList/>
        </div>
    )
}

export default App
