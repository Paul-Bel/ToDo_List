import TodoListItem from "./TodoListItem.jsx";

function TodoList({
                      todoList,
                      onCompleteTodo,
                      onUpdateTodo,
                      isLoading,
                      errorMessage,
                      setErrorMessage,
                  }) {

    const filteredTodoList = todoList.filter(todo => !todo.isCompleted)

    return (
        <>
        {isLoading ? <p>Todo list loading...</p> :
            todoList.length ?
                <ul>
                    {filteredTodoList.map(todo =>
                        <TodoListItem
                            key={todo?.id}
                            todo={todo}
                            onCompleteTodo={onCompleteTodo}
                            onUpdateTodo={onUpdateTodo}/>)}
                </ul>
                :
                <p>Add Todo above to get started</p>}
            {errorMessage && <div>
                <hr/>
                {errorMessage}
                <br/><button onClick={() => setErrorMessage('')}>Dismiss Error Message</button>
            </div>}
        </>
    )
}

export default TodoList