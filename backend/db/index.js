const mongoose = require('mongoose');
const { boolean } = require('zod');
require('dotenv').config();

mongoose.connect(process.env.MONGODB_URL);

const TodoSchema = mongoose.Schema({
    title: String,
    description: String,
    completed:Boolean
});

const todo = mongoose.model('todo', TodoSchema);



module.exports = {
    todo: todo
}