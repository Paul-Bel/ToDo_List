import TodoListItem from "./TodoListItem.jsx";
import TodosViewForm from "../TodosViewForm.jsx";

function TodoList({
                      todoList,
                      onCompleteTodo,
                      onUpdateTodo,
                      isLoading,
                      errorMessage,
                      setErrorMessage,
                      sortField,
                      setSortField,
                      sortDirection,
                      setSortDirection,
                      queryString,
                      setQueryString,
                  }) {

    const filteredTodoList = todoList.filter(todo => !todo.isCompleted)

    return (
        <>
            {isLoading ? <p>Todo list loading...</p> :
                todoList.length ?
                    <ul>
                        {todoList.map(todo =>
                            <TodoListItem
                                key={todo?.id}
                                todo={todo}
                                onCompleteTodo={onCompleteTodo}
                                onUpdateTodo={onUpdateTodo}/>)}
                    </ul>
                    :
                    <p>Add Todo above to get started</p>}
            <hr/>
            <TodosViewForm
                sortFieldsortField={sortField}
                setSortField={setSortField}
                sortDirection={sortDirection}
                setSortDirection={setSortDirection}
                queryString={queryString}
                setQueryString={setQueryString}
            />
            {errorMessage && <div>
                {errorMessage}
                <br/>
                <button onClick={() => setErrorMessage('')}>Dismiss Error Message</button>
            </div>}
        </>
    )
}

export default TodoList