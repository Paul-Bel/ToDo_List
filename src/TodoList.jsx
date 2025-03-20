import TodoListItem from "./TodoListItem.jsx";

function TodoList({todoList, onCompleteTodo}) {

    return (
        todoList.length ?
            <ul>
                {todoList.map(todo => <TodoListItem key={todo.id} todo={todo} onCompleteTodo={onCompleteTodo}/>)}
            </ul>
            :
            <p>Add Todo above to get started</p>
    )
}

export default TodoList