import { useState , useEffect } from 'react'
import './App.css'
import {CreateTodo} from './CreateTodo.jsx'
import {Todo} from './Todo.jsx'
import {Login} from './components/login/login.jsx'
const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:3000';

function App() {
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(true);

  // const fetchTodos = () => {
  //   fetch(`${API_URL}/todos`)
  //     .then(async (res) => {
  //       const response = await res.json();
  //       setTodos(response.Todos);
  //     });
  // };

  useEffect(() => {
    const fetchTodos = async () => {
      try {
        const res = await fetch(`${API_URL}/todos`);
        const response = await res.json();
        setLoading(false);
        setTodos(response.Todos);
      } catch (error) {
        console.error("Failed to fetch todos:", error);
      }
};
    fetchTodos();
    console.log(API_URL)
  }, []);

  return (
    <div className='app-container'>
      <CreateTodo fetchTodos={fetchTodos} />
      {loading? <div>loading...</div> : <Todo todos = {todos} fetchTodos={fetchTodos}/>}
      {/* <Login/> */}
    </div>
  )
}

export default App
