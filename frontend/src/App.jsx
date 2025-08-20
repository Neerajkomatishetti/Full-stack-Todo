import { useState , useEffect } from 'react'
import './App.css'
import {CreateTodo} from './CreateTodo.jsx'
import {Todo} from './Todo.jsx'
import {Login} from './components/login/login.jsx'
const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:3000';
import { SpinnerCircular } from 'spinners-react';

function App() {
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchTodos = () => {
    fetch(`${API_URL}/todos`)
      .then(async (res) => {
        const response = await res.json();
        setTodos(response.Todos);
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchTodos();
    console.log(API_URL)
  }, []);

  return (
    <div className='app-container'>
      <CreateTodo fetchTodos={fetchTodos} />
      {loading?(
  <div style={{ display: 'flex', justifyContent: 'center' }}>
    <SpinnerCircular /></div>) : (<Todo todos = {todos} fetchTodos={fetchTodos}/>)}
    </div>
  )
}

export default App
