function AddTodoForm({onAddTodo}) {

    const handleAddTodo = (event) => {
        event.preventDefault();

        const text = event.target.title.value.trim()
        if (text) {
            onAddTodo(text)
            event.target.reset();
            event.target.title.focus();
        }
    }

    return (
        <form onSubmit={handleAddTodo}>
            <label htmlFor="todoTitle">Todo</label>
            <input name="title" id="todoTitle" type="text"/>
            <button type="submit">Add Todo</button>
        </form>
    )
}

export default AddTodoForm;