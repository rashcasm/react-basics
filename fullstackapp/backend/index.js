const express = require('express');
const cors = require('cors');
const { createTodo, updateTodo } = require('./types');
const { todo } = require('./db');
const app = express();
app.use(express.json());
app.use(cors({
  origin: '*'
}));

app.post("/todo", async function(req, res){
    const createPayLoad = req.body;
    const parsePayLoad = createTodo.safeParse(createPayLoad);
    if(!parsePayLoad.success){
        res.status(400).json({error: "Invalid request payload"});
        return;
    }
    await todo.create({
        title: createPayLoad.title,
        description: createPayLoad.description,
        completed: false
    })
    res.json({msg: "Todo created"})
})

app.get("/todos", async function(req, res){
    const todos = await todo.find({})
    res.json({todos})
})

app.put("/completed", async function(req, res){
    const updatePayLoad = req.body;
    const parsePayLoad = updateTodo.safeParse(updatePayLoad);
    if(!parsePayLoad.success){
        res.status(400).json({error: "Invalid request payload"});
        return;
    }

    await todo.updateOne(
        {_id: req.body.id},
        {completed: true}
    )
    res.json({msg: "Todo updated"})
})



app.listen(3000, () => {
    console.log('Server is running on port 3000');
});