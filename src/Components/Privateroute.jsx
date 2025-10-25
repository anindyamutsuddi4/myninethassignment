import React, { use } from 'react';
import { AuthContext } from './AuthContext';
import { Navigate, useLocation } from 'react-router';

const Privateroute = ({children}) => {
    const location=useLocation()
    const {user}=use(AuthContext)
    if(user){
      return children  
    }
    return (
        <Navigate state={location?.pathname} to='/login'></Navigate>
    );
};

export default Privateroute;