const zod = require('zod');

const CreateTodo = zod.object({
    title: zod.string(),
    description: zod.string()
})

const updateTodo = zod.object({
    _id:zod.string(),
    completed: zod.boolean()
});

const deleteTodo = zod.object({
    _id:zod.string()
})

module.exports = {
    createTodo: CreateTodo,
    updateTodo: updateTodo,
    deleteTodo: deleteTodo
}