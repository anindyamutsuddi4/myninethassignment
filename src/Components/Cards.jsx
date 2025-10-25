import React, { Suspense } from 'react';
import Carddetail from './Carddetail';
//import { useLoaderData } from 'react-router';

const Cards = ({ data }) => {
    //const data=useLoaderData()
   // console.log(data)
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3   mx-auto items-center justify-items-center '>
            {
                <Suspense fallback="data is loading">
                    {
                        data.map(x => <Carddetail key={x.toyId} x={x}></Carddetail>
                        )
                    }
                </Suspense>
            }
        </div>
    );
};

export default Cards;