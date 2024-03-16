import { useState } from 'react';
import { useNavigate } from "react-router-dom";

import postLogin from "../api/post-login.js";

function LoginForm() {
    const navigate = useNavigatge();

    const [credentials, setCredentials] = useState({ 
        username: "", 
        password: "" });
    
    const handleChange = (event) => {
        const { id, value } = event.target;
        setCredentails((prevCredentials) => ({
            ...prevCredentials,
            [id]: value,
        }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        if (credentials.username && credentials.password) {
            postLogin(
                credentials.username,
                credentials.password
            ).then((response) => {
                window.localStorage.setItem("token", response.token);
                navigate("/");
            });
        }
    };
    
    return (
        <form>
            <div>
                <label htmlFpr="username">Username</label>
                <input 
                    type="text" 
                    id="username" 
                    placeholder="Enter username"
                    onChange={handleChange} />
            </div>
            <div>
                <label htmlFor="password">Password</label>
                <input 
                type="password" 
                id="password" 
                placeholder="Enter password" 
                onChange={handleChange}
                />                
            </div>
            <button type="submit" onCLick={handleSubmit}>Login
            </button>
        </form>
    );
}

export default LoginForm;