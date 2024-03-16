import { useContext } from "react";

import { AuthContext } from "../components/AuthProvider.js";

export const useAuth = () => {
    // We pass in the context and create a custom hook returning the context auth and setAuth
    return useContext(AuthContext);
};