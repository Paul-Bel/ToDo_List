import {useState} from "react";
import './App.css'
import TodoList from "./features/TodoList/TodoList.jsx";
import AddTodoForm from "./features/AddTodoForm.jsx";

function App() {

    const [todoList, setTodoList] = useState([])

    const handleAddTodo = (newTodo) => {
        const id = Date.now()
        setTodoList([...todoList, {id: id, title: newTodo, isCompleted: false}])
    }

    const updateTodo = (id, editedTodo) => {
        const updatedTodo = todoList.map(todo =>
            todo.id === id ? {...todo, title: editedTodo} : todo)
        setTodoList(updatedTodo)
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
            <TodoList
                todoList={todoList}
                onCompleteTodo={onCompleteTodo}
                onUpdateTodo={updateTodo}/>
        </div>
    )
}

export default App
