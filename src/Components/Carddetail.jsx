import React from 'react';
import { Link } from 'react-router';
//import { useLoaderData } from 'react-router';

const Carddetail = ({ x }) => {
    // const  data=useLoaderData()
   // console.log(x.toyId)
    return (

        <div className="card  ml-2 mr-2 mb-10 bg-white w-[320px] h-[410px] rounded-2xl shadow-md">
            <figure>
                <img
                    className='h-fit '
                    src={x.pictureURL}
                    alt="Shoes" />
            </figure>
            <div className="card-body">
                <h2 className="card-title ">
                    {x.toyName}
                </h2>
                {/* <p>A card component has a figure, a body part, and inside body there are title and actions parts</p> */}
                <div className='flex gap-2 '>  <div className=" pr-2 border-r-2"><span className='font-semibold lora '>Rating:</span>{x.rating}</div>
                    <div className="border-r-2 pr-2"><span className='font-semibold'>Quantity:</span>{x.availableQuantity}</div>
                    <div className=''><span className='font-semibold '>Price: </span>{x.price}</div>

                </div>

                <div className='flex  gap-20 items-end justify-end '>
                    <Link to={`/detailinfo/${x.toyId}`}>  <button className='px-3 py-[6px] btn bg-amber-800   text-white rounded-[9px]'>view more</button>
</Link>
                </div>
            </div>
        </div>
    );
};

export default Carddetail;