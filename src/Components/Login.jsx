import React, { use } from 'react';
import { Link, useNavigate } from 'react-router';
import { FcGoogle } from "react-icons/fc";
import { AuthContext } from './AuthContext';
import { auth, googleprovider } from '../firebase.init';
import { signInWithPopup } from 'firebase/auth';
import { toast } from 'react-toastify';
const Login = () => {
    const {user}=use(AuthContext)
     const navigate=useNavigate()
    //  if (!user) {
    //     return (
    //         <div className='flex items-center justify-center h-screen'>
    //             <span className="loading loading-infinity  loading-xl"></span>
    //         </div>
    //     )

    // }
   
    const nav=()=>{
        if(user)
        {navigate('/')}
    }
    const { userlogin, setuser } = use(AuthContext)
        const handlelogin = (e) => {
            e.preventDefault()
        userlogin(e.target.email.value, e.target.password.value)
                .then(res => {
                    console.log(res.user)
                    setuser(res.user)
                      toast("Login successful!")
                        navigate('/')
                }
                )
                .catch(error => 
                   { console.log(error.message)
                    toast('Do registration first')}
                )
        }
        const handle=()=>{
    signInWithPopup(auth,googleprovider)
      .then(res => {
                    console.log(res.user)
                    setuser(res.user)
                    if(user){
                        navigate('/')
                    }
                }
                )
                .catch(error => console.log(error.message))
    
        }
    return (

        <div className='bg-[#f4ebea] h-screen flex  justify-center pt-36  '>
            <form onSubmit={handlelogin}>
                <fieldset className="fieldset bg-base-200  border-base-300 shadow-md rounded-box w-xs border p-4  mx-auto ">
                    <legend className="fieldset-legend text-2xl ">Sign In</legend>

                    {/* <label className="label">Name</label>
                    <input type="text" name="name" className="input" placeholder="Name" />

                    <label className="label">PhotoURL</label>
                    <input type="" name="photourl" className="input" placeholder="PhotoURL" />
 */}

                    <label className="label">Email</label>
                    <input type="email" name="email" className="input" placeholder="Email" />

                    <label className="label">Password</label>
                    <input type="password" name="password" className="input" placeholder="Password" />

                    <button onClick={nav} className="btn btn-neutral mt-4">Sign In</button>
                    <Link className='text-center' to="/register">Doesn't have an account?<span className='text-indigo-700 text-center'> Sign Up</span></Link>
                    <button onClick={handle} className="border border-gray-400  p-2 rounded-md flex items-center gap-1 text-gray-600 text-[17px]  w-full justify-center hover:bg-gray-200 hover:border-gray-400 hover:text-gray-800 transition-all duration-200">
                        <FcGoogle size={18} />
                        Login with Google
                    </button>


                </fieldset>

            </form>
        </div>
    );
};

export default Login;