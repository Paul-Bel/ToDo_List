import {useState} from "react";
import './App.css'

import TodoList from "./TodoList.jsx";
import AddTodoForm from "./AddTodoForm.jsx";

function App() {

    const [todoList, setTodoList] = useState([])

    const handleAddTodo = (newTodo) => {

        const id = Date.now()

        setTodoList([...todoList, {id: id, title: newTodo, isCompleted: false}])
    }

    const onCompleteTodo = (id) => {

        const newComplete = todoList.map(todo =>
            todo.id === id ? {...todo, isCompleted: !todo.isCompleted} : todo)

        setTodoList(newComplete)
    }

    return (
        <div>
            <h1>My Todos</h1>
            <AddTodoForm onAddTodo={handleAddTodo}/>
            <TodoList todoList={todoList} onCompleteTodo={onCompleteTodo}/>
        </div>
    )
}

export default App
