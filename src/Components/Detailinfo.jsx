import React, { Suspense, useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router';
import Detaileddata from './Detaileddata';

const Detailinfo = () => {
    const [val,setval]=useState([])
    const data=useLoaderData()
    const {id}=useParams()
    console.log(data,id)
  
    useEffect(()=>{
          if (data && Array.isArray(data)) {
  const data2=data.filter(x=>x.toyId==id)
  setval(data2)}
    },[data,id])
   // console.log(val)
    return (
        <div>
   
                {
                    val.map(toy=><Detaileddata key={toy.toyId} toy={toy}></Detaileddata>)
                }
        
        </div>
    );
};

export default Detailinfo;