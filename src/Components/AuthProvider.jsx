import React, { useEffect, useState } from 'react';
import { AuthContext } from './AuthContext';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from 'firebase/auth';
import { auth } from '../firebase.init';


const AuthProvider = ({ children }) => {
    const [user, setuser] = useState(undefined)
    const createuser = (email, password ) => {
       return createUserWithEmailAndPassword(auth, email, password)
    }
const userlogin=(email,password)=>{
    return signInWithEmailAndPassword(auth,email,password)
}
const updateuser=(object)=>{
return updateProfile(auth.currentUser,object)
}
const logout = () => {
        return signOut(auth)
    }
useEffect(()=>{
const unsubscribe=onAuthStateChanged(auth,(currentuser)=>{
    setuser(currentuser)
})
return()=>unsubscribe()
},[])
    const Authinfo = {
        createuser,
        user,
        setuser,
userlogin,
updateuser,
logout
    }
    return (
        <AuthContext value={Authinfo}>
            {children}
        </AuthContext>
    );
};

export default AuthProvider;