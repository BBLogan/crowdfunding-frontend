import { useState } from 'react';

function LoginForm() {
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
            <button type="submit">Log in</button>
        </form>
    );
}

export default LoginForm;