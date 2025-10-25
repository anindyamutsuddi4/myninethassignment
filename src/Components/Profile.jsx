import React, { use, useState } from 'react';
import { FaCamera } from "react-icons/fa";
import { AuthContext } from './AuthContext';
import { FaUser } from "react-icons/fa6";
import { useNavigate } from 'react-router';
const Profile = () => {
    const [active, setactive] = useState(false)
    const { user } = use(AuthContext)
    const navigate=useNavigate()
   // console.log(user)
    if (!user) {
        return (
navigate('/login')
            // <div className='flex items-center justify-center h-screen'>
            //     <span className="loading loading-infinity  loading-xl"></span>
            // </div>
        )

    }
    const { updateuser, setuser } = use(AuthContext)
    const sub = (e) => {
        e.preventDefault()
        const name = e.target.name.value
        const photo = e.target.photo.value
        updateuser({//object set kore dicchi
            displayName: name,
            photoURL: photo
        }).then(() => {
            setuser(
                { ...user, displayName: name, photoURL: photo }
            )
            //console.log(user)
            e.target.reset()
        }
        ).catch(error => {
            console.log(error)
            setuser(user)
        })

    }

    const edit = () => {
        setactive(!active)

    }
    return (
        <div className='pt-20'>
            <div className=' flex gap-5 p-10 pl-100  mx-auto rounded-xl'>
                <div className="flex items-center gap-5 bg-lime-950 p-8 rounded-xl shadow-md w-[380px]">

                    <div className="relative w-24 h-24">

                        {/* <img
                            src={`${user ? user.photoURL : <FaUser />}?`
                            }
                            alt=""
                            className="w-full h-full rounded-full object-cover" />  */}
                        {user.photoURL ? (
                            <img
                                src={user.photoURL}
                                alt=""
                                className="w-full  h-full border-4 border-white rounded-full object-cover"
                            />
                        ) : (
                            <div className="w-full h-full   border-4 border-white rounded-full flex items-center justify-center">
                                <FaUser size={40} className="text-gray-500" />
                            </div>
                        )}

                        {/* <div className="absolute bottom-0 right-0 bg-white border border-gray-300 w-7 h-7 rounded-full flex items-center justify-center cursor-pointer">
                            <FaCamera size={14} />
                        </div> */}
                    </div>


                    <div>
                        <h2 className="text-xl text-white font-semibold">{`${user.displayName ? user.displayName : "unknown"}`}</h2>
                        <p className="text-white text-sm mb-3">{user ? user.email : ""}</p>
                        <button onClick={edit} className="bg-white hover:bg-green-700 text-black px-4 py-2 rounded-lg text-sm">
                            Edit Profile
                        </button>
                    </div>
                </div>
                <div>  {
                    active &&
                    <form onSubmit={sub}>
                        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
                            <label className="label">Name</label>
                            <input type="text" name="name" required className="input" placeholder="Name" />

                            <label className="label">Password</label>
                            <input type='url' name="photo" required className="input" placeholder="photoURL" />

                            <button className="btn btn-neutral mt-4">Save changes</button>
                        </fieldset></form>
                }
                </div>

            </div>

        </div>

    );
};

export default Profile;