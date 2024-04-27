import { createContext, useState } from "react";
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import app from "../firebase/firebas.config";
import { signInWithEmailAndPassword } from "firebase/auth/cordova";
const auth = getAuth(app);
export const AuthContext = createContext();
const AuthProvider = ({ children }) => {
    const [user,setUser] = useState(null);
    const [loading , setLoading] = useState(true);

    const createUser = (email , password) =>
    {
        setLoading(true);
        return createUserWithEmailAndPassword(auth , email , password);
    }

    const signIn = (email , password) =>
    {
        setLoading(true);
        return signInWithEmailAndPassword(auth , email , password)
    }

    const userInfo = {
        user,loading,createUser,signIn
    }
    return (
        <AuthContext.Provider value={userInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;