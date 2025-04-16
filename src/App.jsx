import {useState, useEffect} from "react";
import './App.css'

import TodoList from "./features/TodoList/TodoList.jsx";
import AddTodoForm from "./features/AddTodoForm.jsx";

function App() {

    const [isLoading, setIsLoading] = useState(false)
    const [isSaving, setIsSaving] = useState(false)
    const [errorMessage, setErrorMessage] = useState('')

    const [todoList, setTodoList] = useState([])

    const url = `https://api.airtable.com/v0/${import.meta.env.VITE_BASE_ID}/${import.meta.env.VITE_TABLE_NAME}`;
    const token = `Bearer ${import.meta.env.VITE_PAT}`;

    const options = (method, content, payload) => ({
        method,
        headers: {
            Authorization: token,
            ...(content && {'Content-Type': 'application/json'}),
        },
        ...(payload && {body: JSON.stringify(payload)}),

    })
    const payload = (id, editedTodo, isCompleted) => {
        const taskComplete = isCompleted ?? false
        return ({
            records: [
                {
                    ...(id && {id}),
                    fields: {
                        ...(editedTodo && {title: editedTodo}),
                        isCompleted: taskComplete.toString(),
                    },
                },
            ],
        })
    }

    useEffect(() => {

        const fetchTodos = async () => {
            setIsLoading(true)

            try {
                const response = await fetch(url, options('GET',));
                if (!response.ok) {
                    throw new Error(response?.message)
                } else {
                    const data = await response.json();

                    const fetchTodo = data.records?.map(todo =>
                        ({
                            id: todo?.id,
                            title: todo.fields?.title,
                            isCompleted: todo.fields?.isCompleted === "true"
                        }))

                    setTodoList(fetchTodo)
                }
            } catch (error) {
                setErrorMessage(error?.message)
                console.log(error)
            } finally {
                setIsLoading(false)
            }
        };
        fetchTodos()
    }, [])

    const handleAddTodo = async (newTodo) => {
        try {
            setIsSaving(true)
            const resp = await fetch(url, options('POST', true, payload(false, newTodo, 'false')));
            if (!resp.ok) {
                throw new Error(resp?.message)
            } else {
                const {records} = await resp.json();
                const newTodo = records?.map(todo =>
                    ({
                        id: todo?.id,
                        title: todo.fields?.title,
                        isCompleted: todo.fields?.isCompleted === "true"
                    }))

                setTodoList([...todoList, ...newTodo])
            }
        } catch (error) {
            setErrorMessage(error?.message)
            console.log(error)
        } finally {
            setIsSaving(false)
        }
    }

    const updateTodo = async (id, editedTodo) => {

        const originalTodo = todoList.filter(todo => todo.id === id)

        try {
            setIsSaving(true)
            const resp = await fetch(url, options("PATCH", true, payload(id, editedTodo, originalTodo[0].isCompleted)));
            if (!resp.ok) {
                throw new Error(resp?.message);
            } else {
                const {records} = await resp.json();
                const updatedTodo = records?.map(todo =>
                    ({
                        id: todo?.id,
                        title: todo.fields?.title,
                        isCompleted: todo.fields?.isCompleted === "true"
                    }))
                const updatedTodos = todoList.map(todo =>
                    todo.id === id ? {...updatedTodo[0]} : todo)
                setTodoList(updatedTodos)
            }
        } catch (error) {
            setErrorMessage(`${error.message}. Reverting todo...`)

            const revertedTodos = todoList.map(todo =>
                todo.id === id ? originalTodo[0] : todo)
            setTodoList(revertedTodos)

        } finally {
            setIsSaving(false)
        }
    }

    const onCompleteTodo = async (id) => {

        const newComplete = todoList.map(todo =>
            todo.id === id ? {...todo, isCompleted: !todo.isCompleted} : todo)
        const updateComplete = newComplete.filter(todo => todo.id === id)[0].isCompleted

        setTodoList(newComplete)

        try {
            const resp = await fetch(url, options('PATCH', true, payload(id, false, updateComplete)));
            if (!resp.ok) {
                throw new Error(resp?.message);
            }
        } catch (error) {
            setErrorMessage(`${error.message}. Reverting todo...`)

            const oldComplete = todoList.map(todo =>
                todo.id === id ? {...todo, isCompleted: !todo.isCompleted} : todo)
            setTodoList(oldComplete)
        }
    }

    return (
        <div>
            <h1>My Todos</h1>
            <AddTodoForm onAddTodo={handleAddTodo} isSaving={isSaving}/>
            <TodoList
                todoList={todoList}
                onCompleteTodo={onCompleteTodo}
                onUpdateTodo={updateTodo}
                isLoading={isLoading}
                errorMessage={errorMessage}
                setErrorMessage={setErrorMessage}/>
        </div>
    )
}

export default App
