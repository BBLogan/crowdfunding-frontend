import { useState } from 'react';
import { useNavigate } from "react-router-dom";

import postLogin from "../api/post-login.js";
import useAuth from "../hooks/use-auth.js";

function LoginForm() {
    const navigate = useNavigate();

    const {auth, setAuth} = useAuth();

    const [credentials, setCredentials] = useState({ 
        username: "", 
        password: "" });
    
    const handleChange = (event) => {
        const { id, value } = event.target;
        setCredentials((prevCredentials) => ({
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
                setAuth({
                    token: response.token,
                    username: response.username,
                    userId: response.user_id,
                })
                navigate("/profile");
            });
        }
    };

    return (
        <form>
            <div>
                <label htmlFor="username">Username</label>
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
            <button type="submit" onClick={handleSubmit}>Login
            </button>
        </form>
    );
}

export default LoginForm;