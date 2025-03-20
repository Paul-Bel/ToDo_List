import TodoListItem from "./TodoListItem.jsx";

function TodoList({todoList, onCompleteTodo, onUpdateTodo}) {

    const filteredTodoList = todoList.filter(todo => !todo.isCompleted)

    return (
        todoList.length ?
            <ul>
<<<<<<< HEAD
                {filteredTodoList.map(todo =>
                    <TodoListItem
                        key={todo.id}
                        todo={todo}
                        onCompleteTodo={onCompleteTodo}
                    />)}
=======
                {todoList.map(todo =>
                    <TodoListItem
                    key={todo.id}
                    todo={todo}
                    onCompleteTodo={onCompleteTodo}
                    onUpdateTodo={onUpdateTodo}/>)}
>>>>>>> 3cad0fa (added: title editior)
            </ul>
            :
            <p>Add Todo above to get started</p>
    )
}

export default TodoList