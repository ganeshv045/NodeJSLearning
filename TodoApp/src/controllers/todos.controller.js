const TodoService = require('../services/todo.service');
const TodoRepository = require('../repositories/todo.repository');
const TodoMySQLRepository = require('../repositories/todoMysql.repository');

const todoService = new TodoService(new TodoRepository()); 

function getTodos(req, res){
    const response = todoService.fetchAllTodos();
    return res.json({
        data: response
    })
}

function createTodo(req, res){
    todoService.create(req.body.todoText);
    return res.json({
        data: "New todo created successfully"
    })
}

function updateTodo(req, res){
    console.log("req.body",req.params);
    
    todoService.updateTodo(parseInt(req.params.todoId), req.body.todoText);
    return res.json({
        data: "Todo updated successfully"
    })
}

module.exports = {
    getTodos,
    createTodo,
    updateTodo
};