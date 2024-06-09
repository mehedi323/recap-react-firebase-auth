import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../../Firebase/firebase.config";
import PropTypes from 'prop-types'; 

 
export const AuthContext = createContext(null)

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);  

    const registerUser = (email, password)=>{
        return createUserWithEmailAndPassword(auth, email, password) 
    }
 
    const loginUser = (email, password)=>{
       return signInWithEmailAndPassword(auth, email, password) 
    }

    const logOut = () =>{
        return signOut(auth)
    }
 
 

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            console.log('yes tmi to dekhi genius', currentUser); 
            setUser(currentUser)
        })
        return () => {
            unSubscribe()
        }
    }, []);

    

    const authInfo = {
        user,
        setUser,
        registerUser,
        loginUser,
        logOut
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;

AuthProvider.propTypes ={
    children:PropTypes.node,
}