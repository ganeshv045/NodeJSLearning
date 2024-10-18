function createTodoValidator(req, res, next){
    if(!req.body.todoText){
        return res.json({
            msg: "Invalid request"
        });
    }

    next();
}

function updateTodoValidator(req, res, next){
    if(!req.body.todoText || !req.params.todoId){
        return res.json({
            msg: "Invalid request"
        });
    }

    next();
}

module.exports = {
    createTodoValidator,
    updateTodoValidator
}