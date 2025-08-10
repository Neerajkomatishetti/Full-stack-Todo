import { useState } from "react";
import './login.css'



export function Login(){

    const [userEmail, setUserEmail] = useState("");
    const [userPass, setUserPass] = useState("");

    return <div className="login-page-container">
        
        <form className="login-form">

            <h2>Login</h2>
            <input type="email" 
            placholder="email" 
            value={userEmail} 
            onChange={(e) =>{setUserEmail(e.target.value)}}
            />

            <input  type="password" 
            placeholder="password" 
            value={userPass} 
            onChange={(e) =>{setUserPass(e.target.value)}}
            />

            <button type="submit">submit</button>
            <a href="#">Forgot password?</a>
        </form>
    </div>
}