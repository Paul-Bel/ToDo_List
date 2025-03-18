function TodoForm({addTodo}) {

    const handleForm = (event) => {
        event.preventDefault();

        const text = event.target.title.value.trim()
        if (text) {
            addTodo(text);
            event.target.reset();
            event.target.title.focus();
        }
    }

    return (
        <form onSubmit={(event) => handleForm(event)}>
            <label htmlFor="todoTitle">Todo</label>
            <input name="title" id="todoTitle" type="text"/>
            <button type="submit">Add Todo</button>
        </form>
    )
}

export default TodoForm;