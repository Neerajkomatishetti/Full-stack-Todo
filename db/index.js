const mongoose = require('mongoose');
require('dotenv').config();

mongoose.connect(process.env.MONGODB_URL);

const TodoSchema = mongoose.Schema({
    title: String,
    description: String
});

const todo = mongoose.model('todo', TodoSchema);



module.exports = {
    todo: todo
}