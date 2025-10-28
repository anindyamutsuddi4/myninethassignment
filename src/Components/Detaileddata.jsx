import React from 'react';
import { toast } from 'react-toastify';
import DocumentMeta from 'react-document-meta';

const Detaileddata = ({ toy }) => {
     const meta={
    title:"ToyTopia-Details"
}
    return (
<DocumentMeta {...meta}>
        <div className='bg-[#f4ebea] min-h-screen p-4 pt-20 lg:pt-20'>
            <div className="max-w-md mx-auto bg-black rounded-2xl shadow-xl overflow-hidden border-gray-700
             border-2    hover:border-white">


                <div className="p-4">
                    <div className="h-75 w-full overflow-hidden hover:rounded-2xl rounded-2xl">
                        <img
                            src={toy.pictureURL}
                            alt={toy.toyName}
                            className="w-full rounded-2xl h-full object-cover hover:scale-105 transition-transform duration-300 hover:rounded-2xl"
                        />
                    </div>
                </div>

                <div className="px-6 pb-5 text-white">

                    <h2 className="text-2xl font-bold mb-2">{toy.toyName}</h2>

                    <div className="text-sm mb-4">
                        <p>Seller: <span className="font-medium">{toy.sellerName}</span></p>
                        <p>Email: <span className="font-medium">{toy.sellerEmail}</span></p>
                    </div>

                    <div className="flex justify-between items-center mb-4">
                        <div className="font-semibold">Rating: {toy.rating}</div>
                        <div className="font-semibold">Price: ${toy.price}</div>
                        <div className="font-semibold">Quantity: {toy.availableQuantity}</div>
                    </div>


                    <div className="mb-1">
                        <span className="font-medium text-gray-400">Category: </span>
                        <span>{toy.subCategory}</span>
                    </div>


                    <p className="text-gray-300 mb-4">{toy.description}</p>


                    <div className="flex justify-between">
                        <button className="px-4 py-2 bg-yellow-300 text-black rounded-lg  transition hover:scale-90">
                            Add to Cart
                        </button>
                        {/* <button className="px-4 py-2 border border-amber-600 text-amber-400 rounded-lg hover:bg-amber-800 hover:text-white transition">
                View Details
            </button> */}
                    </div>
                </div>
            </div>
            <div className='lora mx-auto flex justify-center mt-15 font-bold hover:text-amber-400 lg:text-4xl'>Try premium toys for your child..</div>
            <form onSubmit={(e) =>{ 
                e.preventDefault()
                toast("Your form is submitted")
                e.target.reset()
                } }>
                <fieldset className="fieldset bg-base-200 border-base-300 rounded-box mt-5 w-xs border justify-center mx-auto p-7">
                    {/* <legend className="fieldset-legend">Try premium toys</legend> */}

                    <label className="label">Name</label>
                    <input required type="name" name="name" className="input" placeholder="Name" />

                    <label className="label">Email</label>
                    <input required type="email" className="input" placeholder="Email" />

                    <button className="btn btn-neutral mt-4">Try now</button>
                </fieldset>
            </form>

            
        </div>

</DocumentMeta>
    );
};

export default Detaileddata;