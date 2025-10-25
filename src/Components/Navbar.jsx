import React, { use } from 'react';
import {  NavLink, useNavigate } from 'react-router';
import { AuthContext } from './AuthContext';
// import { signOut } from 'firebase/auth';
// import { auth } from '../firebase.init';


const Navbar = () => {
  const {user,logout}=use(AuthContext)
  const navigate=useNavigate()
// const handleLogout = () => {
//   signOut(auth)
//     .then(() => {
//       // Sign-out successful.
//       console.log("User logged out");
//       // Optionally, reset your user state in context
//       setuser(null);
//     })
//     .catch((error) => {
//       console.error("Error logging out:", error);
//     });
// };
   const handlelogout=()=>{
        logout().then(()=>{
          navigate('/')
        })
        .catch(error=>console.log(error))
    }
     if (user===undefined) {
        return (
            <div className='flex items-center justify-center h-screen'>
                <span className="loading loading-infinity  loading-xl"></span>
            </div>
        )

    }
   const list= <>
  <li ><NavLink  to="/">Home</NavLink></li>
   <li ><NavLink  to="/register">Register</NavLink></li>
    {/* <li ><NavLink  to="/login">Login</NavLink></li> */}
    {
  user
    ? <li><button onClick={handlelogout}>Logout</button></li>
    : <li><NavLink to="/login">Login</NavLink></li>
}

{
  user&& <li ><NavLink  to="/profile">Profile</NavLink></li>
}

    </>
    return (

<div className="navbar  fixed z-50 bg-white/32 shadow-sm px-6 backdrop-blur-xl">
  <div className="navbar-start ">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex="-1"
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
        {
            list
        }
      </ul>
    </div>
    <a className="btn btn-ghost text-xl">Toyhouse</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1 items-center font-semibold text-md">
      {/* <li><a>Home</a></li> */}
     {
        list
     }
    </ul>
  </div>
  <div className="navbar-end">
   <div className="flex-none">
    <div className="dropdown dropdown-end flex items-center gap-2">
      <div className='font-semibold'>{user?.displayName||"unknown"}</div>
      
      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
          <img
            alt="Tailwind CSS Navbar component"
            // src=""
            src={`${user?.photoURL||"https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"}`}
             />
        </div>
      </div>
      <ul
        tabIndex="-1"
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
        <li>
          <a className="justify-between">
            Anindya Mutsuddi    
          </a>
        </li>
    
      </ul>
    </div>
  </div>
  </div>
</div>
  
    );
};

export default Navbar;