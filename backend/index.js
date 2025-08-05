const express = require('express');
const app = express();
const { createTodo } = require('./types');
const { updateTodo, deleteTodo } = require('./types');
const { todo } = require('./db');
const cors = require('cors');
const PORT = process.env.PORT || 3000;
const origin = process.env.ORIGIN;


app.use(express.json());
app.use(cors({
  origin: origin, // Replace with actual URL
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: false
}));



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
        const id = parsedPayload.data._id;
        const completed = parsedPayload.data.completed;
        await todo.updateOne({ _id: id }, {
            "$set":{
                completed:completed
            }
        });
        res.json({
            msg:"updated successfully!"
        })
    }

});

app.delete('/deleteTodo', async function(req, res) {
    const deletePayload = req.body;
    const parsedDeletePayload = deleteTodo.safeParse(deletePayload);
    if(!parsedDeletePayload.success){
        res.status(411).json({
            msg: "Wrong Id"
        })
        return;
    }else{
        const id = parsedDeletePayload.data._id;
        await todo.deleteOne({
            _id:id
        });

        res.json({
            msg:"deleted successfully"
        })
    }

});


app.listen(PORT, () => {
  console.log("listening on port", PORT);
});
