async function fetchTodoList() {
    try {
        const response = await fetch('http://localhost:4001/todos');

        if (!response.ok) {
            throw new Error(`${response.status} ${response.statusText}`);
    }

        const todoList = await response.json();
        return todoList; 
    } catch (error) {
        throw new Error(`Can not fitch todo list: ${error.message}`);
    }
}

try {
    const todoList = await fetchTodoList();
    console.log(todoList);
} catch (error) {
    alert(error.message)
}