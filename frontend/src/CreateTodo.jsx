import {useState} from 'react'
const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:3000';
 
 export function CreateTodo({ fetchTodos }) {

    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    return <div className = "createTodo-container">
    <div className="createTodo">
        <input type="text" placeholder = "title" value={title} onChange = {(e) => {setTitle(e.target.value);}}/>
        <input type="text" placeholder = "description" value={description} onChange={(e) => {setDescription(e.target.value);}} />
        <div className="button-container">
            <button onClick={function(){
                if (!title.trim() || !description.trim()) {
                    alert("Please fill in both title and description!");
                    return;
            }
            fetch(`${API_URL}/todo`, {
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
                setTitle("");
                setDescription("");
                fetchTodos();

            })
        }}>Create Todo</button>
        </div>
    </div>
    </div>
 }