import './App.css'
import TodoList from "./TodoList.jsx";
import AddTodoForm from "./AddTodoForm.jsx";
import {useState} from "react";

function App() {

    const [todoList, setTodoList] = useState([])

    const handleAddTodo = (newTodo) => {
        const id = Date.now()
        setTodoList([...todoList, {id: id, title: newTodo}])
    }

    return (
        <div>
            <h1>My Todos</h1>
            <AddTodoForm onAddTodo={handleAddTodo}/>
            <TodoList todoList={todoList}/>
        </div>
    )
}

export default App
