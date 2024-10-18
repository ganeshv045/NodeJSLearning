class TodoService{

    constructor(todoRepository){
        this.todoRepository = todoRepository;
    }

    create(todoText){
        this.todoRepository.insert(todoText);
    }

    fetchOneTodo(id){
        this.todoRepository.getOneTodo(id);
    }

    updateTodo(id, todoText){
        this.todoRepository.updateTodo(id, todoText);
    }

    fetchAllTodos(){
        return this.todoRepository.getAll();
    }

}

module.exports = TodoService;