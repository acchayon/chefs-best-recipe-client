import React, { createContext, useEffect, useState } from 'react';
import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from '../firebase/firebase.config';


export const AuthContext = createContext(null);
const auth = getAuth(app);



const AuthProvider = ({ children }) => {

    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();

    const [user, setUser] = useState(null);

    const [loading, setLoading] = useState(true);
    
    const signGoogle =() => {
        return signInWithPopup(auth, googleProvider);
    }

    const signGithub = () => {
        return signInWithPopup(auth, githubProvider);
    }

    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth,email,password);
    }

    const signIN = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const logOut =() => {
        setLoading(true)
        return signOut(auth)
    }

    useEffect(() => {
        const unsubscribe =  onAuthStateChanged(auth, loggedUser => {
            console.log('observer', loggedUser)
            setUser(loggedUser)
            setLoading(false)
        })
        return () => {
            unsubscribe();
        }
    },[])

    const authInfo = {
        user,
        loading,
        createUser,
        signIN,
        logOut,
        signGoogle,
        signGithub
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;