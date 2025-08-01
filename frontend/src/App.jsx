import { useState , useEffect } from 'react'
import './App.css'
import {CreateTodo} from './CreateTodo.jsx'
import {Todo} from './Todo.jsx'

function App() {
  const [todos, setTodos] = useState([]);

  const fetchTodos = () => {
    fetch("http://localhost:3000/todos")
      .then(async (res) => {
        const response = await res.json();
        setTodos(response.Todos);
      });
  };

  useEffect(() => {
    fetchTodos();
  }, []);

  return (
    <div className='app-container'>
      <CreateTodo fetchTodos={fetchTodos} />
      <Todo todos = {todos} fetchTodos={fetchTodos}/>
    </div>
  )
}

export default App
