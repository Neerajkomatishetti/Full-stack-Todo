export function Todo({todos, fetchTodos}){
        
    return(<div className="todos-container">
        {todos.map((todo) => {
            const handleCheckboxChange = async (e) => {
            const completed = e.target.checked;

            try {
                await fetch("http://localhost:3000/completed", {
                    method: "PUT",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        _id: todo._id,      // Note: Using _id as per MongoDB
                        completed: completed,
                    }),
                });
                fetchTodos();

            } catch (error) {
                console.error("Failed to update completion status", error);
                }   
            };
            return <div className="todo-container" key={todo._id}>
                    <h1>{todo.title}</h1>
                    <h2>{todo.description}</h2>
                    <div className="todo-button-checkbox-container">
                    <label>
                        <input
                            type="checkbox"
                            checked={todo.completed}
                            onChange={handleCheckboxChange}
                            style={{ display: "none", fontSize: "medium", fontWeight:"bold" }}
                        />
                        {todo.completed ? " ✅ Completed" : " ❗ Incomplete"}
                    </label>

                    <button  onClick={async function(){
                        if(confirm("Are you sure?")){
                        const Response = await fetch('http://localhost:3000/deleteTodo', {
                            method:"DELETE",
                            headers:{
                                "Content-type":"application/json",
                            },
                            body: JSON.stringify({
                                _id:todo._id
                            })

                        })
                        const result = await Response.json();
                        alert("deletion sucessful!")
                        fetchTodos();
                    }else{
                        alert("deletion cancelled!");
                    }

                    }}>Remove</button>
                    </div>
            </div>
        })}
    </div>
    );
}

