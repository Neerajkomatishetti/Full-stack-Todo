const express = require('express');
const app = express();
const { createTodo } = require('./types');
const { updateTodo } = require('./types');
const { todo } = require('./db');
const cors = require('cors');



app.use(express.json());
app.use(cors());


app.post('/todo', async function(req, res) {
    const createPayload = req.body;
    const parsedPayload = createTodo.safeParse(createPayload);

    if(!parsedPayload.success){
        res.status(411).json({
            msg: "Wrong Inputs"
        })
        return;
    }else {
        await todo.create({
            title: parsedPayload.data.title,
            description: parsedPayload.data.description
        })

        res.json({
            msg:"success"
        })
    }
});

app.get('/todos', async function(req, res){
    const Todos = await todo.find({});
    res.json({ Todos });
});

app.put('/completed', async function(req, res) {
    const updatePayload = req.body;
    const parsedPayload = updateTodo.safeParse(updatePayload);

    if(!parsedPayload.success){
        res.status(411).json({
            msg: "Wrong Inputs"
        })
        return;
    }else{
        const id = parsedPayload.data.id;
        const isCompleted = parsedPayload.data.isCompleted;
        await todo.updateOne({ _id: id }, {
            "$set":{
                completed:isCompleted
            }
        });
        res.json({
            msg:"updated successfully!"
        })
    }

});



app.listen(3000, () => {
    console.log("listening on port 3000!");
});