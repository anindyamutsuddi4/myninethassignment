import React, { use, useState } from 'react';
import { FaCamera } from "react-icons/fa";
import { AuthContext } from './AuthContext';
import { FaUser } from "react-icons/fa6";
import { useNavigate } from 'react-router';
import DocumentMeta from "react-document-meta";
const meta={
    title:"Toyhouse-profile"
}
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
         <DocumentMeta {...meta}>
<div className="bg-[#f4ebea]   pt-20 px-4 md:px-8 lg:px-16 pb-75">
  <div className="flex flex-col lg:flex-row gap-6 md:gap-8 bg-lime-950/10 p-5 md:p-8 rounded-xl max-w-[320px] md:max-w-[400px] lg:max-w-[690px] mx-auto">

    <div className="flex items-center gap-5 bg-lime-950 p-6 md:p-8 rounded-xl shadow-md w-full lg:w-[380px]">
      <div className=" w-20 h-20 md:w-24 md:h-24 ">
        {user?.photoURL ? (
          <img
            src={user.photoURL}
            alt=""
            className="w-full h-full border-4 border-white rounded-full object-cover"
          />
        ) : (
          <div className="w-full h-full border-4 border-white rounded-full flex items-center justify-center">
            <FaUser size={32} className="text-gray-300 md:text-gray-400" />
          </div>
        )}
      </div>

      <div className="text-white">
        <h2 className="text-lg md:text-xl font-semibold">
          {user?.displayName || "Unknown"}
        </h2>
        <p className="text-xs md:text-sm mb-3">{user?.email || ""}</p>

        <button
          onClick={edit}
          className="bg-white text-black px-3 py-2 rounded-lg text-xs md:text-sm hover:bg-green-700 hover:text-white transition"
        >
          Edit Profile
        </button>
      </div>
    </div>

    {/* Edit Form */}
    {active && (
      <form onSubmit={sub} className="w-full">
        <fieldset className="fieldset bg-base-200  rounded-box  p-4 md:p-6">
          <label className="label text-sm md:text-base">Name</label>
          <input
            type="text"
            name="name"
            required
            className="input input-bordered w-full"
            placeholder="Name"
          />

          <label className="label text-sm md:text-base">Photo URL</label>
          <input
            type="url"
            name="photo"
            required
            className="input input-bordered w-full"
            placeholder="Photo URL"
          />

          <button className="btn btn-neutral mt-4 w-full md:w-auto">
            Save changes
          </button>
        </fieldset>
      </form>
    )}

  </div>
</div>
</DocumentMeta>
    );
    
};

export default Profile;