const todos = [];

class TodoRepository{

    insert(todoText){
        todos.push({
            id: todos.length + 1,
            name: todoText
        })
    }

    getAll(){
        return todos;
    }

    getOneTodo(id){
        const index = todos.findIndex((todo)=>todo.id === id)
        return todos[index];
    }

    updateTodo(id, todoText){
        const index = todos.findIndex((todo)=>todo.id === id)
        todos[index].name = todoText;
    }
}

module.exports = TodoRepository;