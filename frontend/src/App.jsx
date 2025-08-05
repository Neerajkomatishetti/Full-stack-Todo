import { useState , useEffect } from 'react'
import './App.css'
import {CreateTodo} from './CreateTodo.jsx'
import {Todo} from './Todo.jsx'
const API_URL = process.env.REACT_APP_API_URL;

function App() {
  const [todos, setTodos] = useState([]);

  const fetchTodos = () => {
    fetch(`${API_URL}/todos`)
      .then(async (res) => {
        const response = await res.json();
        setTodos(response.Todos);
      });
  };

  useEffect(() => {
    fetchTodos();
    console.log(API_URL)
  }, []);

  return (
    <div className='app-container'>
      <CreateTodo fetchTodos={fetchTodos} />
      <Todo todos = {todos} fetchTodos={fetchTodos}/>
    </div>
  )
}

export default App
