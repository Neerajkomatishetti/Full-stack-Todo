 import {useState} from 'react'
 
 
 export function CreateTodo({ fetchTodos }) {

    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    return <div className = "createTodo-container">
    <div className="createTodo">
        <input sttype="text" placeholder = "title"  onChange = {(e) => {setTitle(e.target.value);}}/>
        <input type="text" placeholder = "description" onChange={(e) => {setDescription(e.target.value);}} />
        <button onClick={function(){
                if (!title.trim() || !description.trim()) {
                    alert("Please fill in both title and description!");
                    return;
            }
            fetch("http://localhost:3000/todo", {
                method: "POST",
                body: JSON.stringify({
                    title:title,
                    description:description
                }),
                headers:{
                    "Content-type":"application/json"
                }
            }).then(async (res) => {
                await res.json();
                alert("Todo added!");
                fetchTodos();

            })
        }}>Create Todo</button>
    </div>
    </div>
 }