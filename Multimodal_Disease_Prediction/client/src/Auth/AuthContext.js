
import { createContext, useContext, useEffect, useState } from "react";
import { signInUser, signUpUser, checkAuthStatus, logoutUser } from "./HandleAPI";



const AuthContext = createContext();


const AuthProvider = ({ children }) => {

    const [user, setUser] = useState({});
    const [isLoggedIn, setIsLoggedIn] = useState(false);



    useEffect(() => {
        const checkStatus = async () => {
            const data = await checkAuthStatus();

            if (data) {
                setUser({email: data.user.email, name: data.user.name});
                setIsLoggedIn(true);
            }

        }
        checkStatus();
    }, []);



    const signin = async (email, password) => {
        const data = await signInUser(email, password);
        if (data) {
            setUser({ email: data.email, name: data.name });
            setIsLoggedIn(true);
        }
        return data;
    }



    const signup = async (name, lastname, username, email, password, gender, dob, address, contact) => {
        const data = await signUpUser(name, lastname, username, email, password, gender, dob, address, contact);
        if (data) {    
            console.log(data);       
            setUser({ email: data.email, name: data.name });
            setIsLoggedIn(true);
        }
    }

    
    const logout = async () => {
        const logout = await logoutUser();
        setIsLoggedIn(false);
        setUser(null);
        setTimeout(()=>{
            window.location.reload();
        },100);
        
    }


    const value = {
        user,
        isLoggedIn,
        signin,
        signup,
        logout
    }



    return <AuthContext.Provider value={value}>
        {children}
    </AuthContext.Provider>
}


const useAuth = () => useContext(AuthContext);

export { AuthProvider, useAuth }