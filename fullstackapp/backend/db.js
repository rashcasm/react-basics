// to create the mongoDB connection and schemas
const mongoose = require('mongoose');

mongoose.connect("mongodb+srv://rashh:rashh@cluster0.pdhin.mongodb.net/todos")

const todoSchema = new mongoose.Schema({
    title: String,
    description: String,
    completed: Boolean
});

const todo = mongoose.model('todos', todoSchema);

module.exports = { todo };