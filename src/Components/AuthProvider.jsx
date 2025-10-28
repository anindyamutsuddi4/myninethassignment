import React, { useEffect, useState } from 'react';
import { AuthContext } from './AuthContext';
import { createUserWithEmailAndPassword, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signOut, updateProfile } from 'firebase/auth';
import { auth } from '../firebase.init';
import { MdLocalDining } from 'react-icons/md';


const AuthProvider = ({ children }) => {
    const [user, setuser] = useState(undefined)
    const createuser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const userlogin = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }
    const updateuser = (object) => {
        return updateProfile(auth.currentUser, object)
    }
    const resetpass = (email) => {
        return sendPasswordResetEmail(auth, email)
    }
    const logout = () => {
        return signOut(auth)
    }
    const[loading,setloading]=useState(true)
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentuser) => {
            setuser(currentuser)
            setloading(false)
        })
        return () => unsubscribe()
    }, [])
    const Authinfo = {
        createuser,
        user,
        setuser,
        userlogin,
        updateuser,
        logout,
        resetpass,
loading
    }
    return (
        <AuthContext value={Authinfo}>
            {children}
        </AuthContext>
    );
};

export default AuthProvider;