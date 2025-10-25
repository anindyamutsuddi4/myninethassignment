import React, { use } from 'react';
import { Link, useNavigate } from 'react-router';
import { FcGoogle } from "react-icons/fc";
import { AuthContext } from './AuthContext';
import { signInWithPopup } from 'firebase/auth';
import { auth, googleprovider } from '../firebase.init';
import DocumentMeta from 'react-document-meta';

const Register = () => {
    const meta={
    title:"Toyhouse-Register"
}
    const navigate=useNavigate()
    const { createuser, setuser, updateuser } = use(AuthContext)
    const handlesubmit = (e) => {
        const name = e.target.name.value
        const photo = e.target.photourl.value
        e.preventDefault()
        createuser(e.target.email.value, e.target.password.value)
            .then(res => {
                //console.log(res.user)
                updateuser({//object set kore dicchi
                    displayName: name,
                    photoURL: photo
                }).then(() => {
                    setuser(
                        { ...res.user, displayName: name, photoURL: photo }
                    )
                    //console.log(user)
                    navigate('/')
                }
                ).catch(error => {
                    console.log(error)
                    setuser(user)
                })

            }
            )
            .catch(error => console.log(error.message))
    }
    
    const { user } = use(AuthContext)
    const handle = () => {
        signInWithPopup(auth, googleprovider)
            .then(res => {
                //console.log(res.user)
                setuser(res.user)
                if (user) {
                    navigate('/')
                }
            }
            )
            .catch(error => console.log(error.message))

    }
    return (
        <DocumentMeta {...meta}>
        <div className='bg-[#f4ebea] h-screen flex  justify-center pt-36  '>
            <form onSubmit={handlesubmit}>
                <fieldset className="fieldset bg-base-200  border-base-300 shadow-md rounded-box w-xs border p-4  mx-auto ">
                    <legend className="fieldset-legend text-2xl ">Sign Up</legend>

                    <label className="label">Name</label>
                    <input type="text" name="name" className="input" placeholder="Name" />

                    <label className="label">PhotoURL</label>
                    <input type="url" name="photourl" className="input" placeholder="PhotoURL" />


                    <label className="label">Email</label>
                    <input type="email" name="email" className="input" placeholder="Email" />

                    <label className="label">Password</label>
                    <input type="password" name="password" className="input" placeholder="Password" />

                    <button className="btn btn-neutral mt-4">Sign Up</button>
                    <Link className='text-center' to="/login">Already have ab account?<span className='text-indigo-700 text-center'> Sign in</span></Link>
                    <button onClick={handle} className="border border-gray-400  p-2 rounded-md flex items-center gap-1 text-gray-600 text-[17px]  w-full justify-center hover:bg-gray-200 hover:border-gray-400 hover:text-gray-800 transition-all duration-200">
                        <FcGoogle size={18} />
                        Login with Google
                    </button>


                </fieldset>

            </form>
        </div>


</DocumentMeta>
    );
};

export default Register;