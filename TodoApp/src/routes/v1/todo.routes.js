const express = require('express');
const { getTodos, createTodo, updateTodo } = require('../../controllers/todos.controller');
const { createTodoValidator, updateTodoValidator } = require('../../validators/todo.validator');
const todoRouter = express.Router();

todoRouter.get('/', getTodos);

todoRouter.post('/', createTodoValidator, createTodo);

todoRouter.put('/:todoId', updateTodoValidator, updateTodo);

module.exports = todoRouter;