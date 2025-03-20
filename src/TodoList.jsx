import TodoListItem from "./TodoListItem.jsx";

function TodoList({todoList, onCompleteTodo}) {

    const filteredTodoList = todoList.filter(todo => !todo.isCompleted)

    return (
        todoList.length ?
            <ul>
                {filteredTodoList.map(todo =>
                    <TodoListItem
                        key={todo.id}
                        todo={todo}
                        onCompleteTodo={onCompleteTodo}
                    />)}
            </ul>
            :
            <p>Add Todo above to get started</p>
    )
}

export default TodoList