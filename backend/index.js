const express = require('express');
const app = express();
const { createTodo } = require('./types');
const { updateTodo } = require('./types');
const { todo } = require('./db');



app.use(express.json());


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
    console.log(Todos);
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
        await todo.updateOne({ _id: id }, {
            "$set":{
                description:"Nothing!!!1"
            }
        });
        res.json({
            msg:"Updated successfully!"
        })
    }

});



app.listen(3000, () => {
    console.log("listening on port 3000!");
});