import { createContext, useState } from 'react';

// Here we create the Context
export const AuthContext = createContext();

// Here we create the component wrapping our app, this means all the children components will have access to the context using the hook
export const AuthProvider = (props) => {

    // Using an object for the state here, this way we can add more properties to the state later on like user id
    const [auth, setAuth] = useState({
    
    // Here we initialize the context with the token from local storage, this way if the user refreshes the page we can still have the token in the local memory
        token: window.localStorage.getItem("token"),
        userId: Number(window.localStorage.getItem("userId")),
        username: window.localStorage.getItem("username"),
        email: window.localStorage.getItem("email"),
});

return (
    <AuthContext.Provider value={{ auth, setAuth }}>
        {props.children}
    </AuthContext.Provider>
);
}