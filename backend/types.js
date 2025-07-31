const zod = require('zod');

const CreateTodo = zod.object({
    title: zod.string(),
    description: zod.string()
})

const updateTodo = zod.object({
    id:zod.string(),
    completed: zod.boolean()
});

module.exports = {
    createTodo: CreateTodo,
    updateTodo: updateTodo
}