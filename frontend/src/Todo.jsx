export function Todo({todos}){
        
    return(<div className="todos-container">
        {todos.map((todo) => {
            return <div className="todo-container" key={todo._id}>
                    <h1>{todo.title}</h1>
                    <h2>{todo.description}</h2>
                    <input type="checkbox"/>
            </div>
        })}
    </div>
    );
}

