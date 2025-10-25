import React, { useEffect, useState } from 'react';
import Carddetail from './Carddetail';
import { NavLink } from 'react-router';
import Cards from './Cards';
//import pic1 from '../../public/Benefits-of-Wooden-Toys-for-children.webp'

const Home = () => {
    const [data, setdata] = useState([])
    useEffect(() => {
        fetch('/data.json').then(res => res.json())
            .then(setdata)
    }, [])

    const handlebutton = () => {
        document.getElementById("cards").scrollIntoView()
    }
    return (

        //         <div className="bg-[#f8e7e4] flex px-9 lg:px-30">
        //             <section className="max-w-6xl mx-auto px-6 py-30">

        //   <p className="text-sm tracking-widest text-yellow-600 font-semibold">
        //     FUN • SAFE • TOYS
        //   </p>

        //   <h1 className="text-5xl md:text-6xl font-bold leading-tight mt-4">
        //     Bringing{" "}
        //     <span className="text-amber-800">
        //       Joy
        //     </span>{" "}
        //     to Every Playtime
        //   </h1>


        //   <p className="mt-6 text-gray-600 text-lg max-w-2xl">
        //     Explore our collection of high-quality toys designed to inspire creativity,
        //     spark imagination, and make learning fun for children of all ages.
        //   </p>


        //   <div className="mt-8 flex flex-wrap gap-4">
        //     <button className="bg-amber-800 text-white px-6 py-3 rounded-md font-medium hover:bg-amber-900 transition">
        //       Explore Collection
        //     </button>

        //     <button className="border border-gray-300 px-6 py-3 rounded-md font-medium hover:bg-gray-100 transition">
        //       Why Choose Us?
        //     </button>
        //   </div>


        //   <div className="mt-16 flex flex-wrap gap-12">
        //     <div>
        //       <p className="text-3xl font-semibold text-gray-800">10+</p>
        //       <p className="text-gray-500 text-sm mt-1">Years in Toy Retail</p>
        //     </div>
        //     <div>
        //       <p className="text-3xl font-semibold text-gray-800">20,000+</p>
        //       <p className="text-gray-500 text-sm mt-1">Toys Sold</p>
        //     </div>
        //     <div>
        //       <p className="text-3xl font-semibold text-gray-800">15,000+</p>
        //       <p className="text-gray-500 text-sm mt-1">Happy Kids</p>
        //     </div>
        //   </div>
        // </section>

        //   <div className='pt-40 pr-5'> 
        //      <div className="carousel w-[300px] md:w-[500px] lg:w-[520px] md:h-[300px] h-[200px] lg:h-[380px] flex  items-center pt-5 lg:pt-10 mx-auto ">
        //   <div id="item1" className="carousel-item h-full w-full ">
        //     <img
        //       src="/Benefits-of-Wooden-Toys-for-children.webp"
        //       className="w-full h-full rounded-md lg:rounded-2xl" />
        //   </div>
        //   <div id="item2" className="carousel-item w-full">
        //     <img
        //       src="/cute-plush-toys-arrangement_23-2150312316.jpg"
        //       className="w-full h-full rounded-md  lg:rounded-2xl" />
        //   </div>
        //   <div id="item3" className="carousel-item w-full">
        //     <img
        //       src="/outdoor-toys-for-toddlers-children-on-a-bike.jpg"
        //       className="w-full h-full rounded-md lg:rounded-2xl" />
        //   </div>

        // </div>
        // <div className="flex w-full justify-center gap-2 pt-2">
        //   <a href="#item1" className="btn btn-xs">1</a>
        //   <a href="#item2" className="btn btn-xs">2</a>
        //   <a href="#item3" className="btn btn-xs">3</a>

        // </div></div>



        //         </div>
        <div className="bg-[#f4ebea]  px-12 md:px-12 lg:px-20 py-12 lg:py-36">
            <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-9 lg:pb-15 md:gap-12">

                <section className="w-full lg:w-1/2">
                    <p className="text-sm tracking-widest text-yellow-600 font-semibold">
                        FUN • SAFE • TOYS
                    </p>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mt-4">
                        Bringing{" "}
                        <span className="text-amber-800">
                            Joy
                        </span>{" "}
                        to Every Playtime
                    </h1>

                    <p className="mt-2 md:mt-6 text-gray-700 text-base md:text-lg max-w-xl">
                        Explore our collection of high-quality toys designed to inspire creativity,
                        spark imagination, and make learning fun for children of all ages.
                    </p>

                    <div className=" mt-4 md:mt-8 flex flex-wrap gap-4">

                        <NavLink > <button onClick={handlebutton} className="bg-amber-800 text-white px-6 py-3 rounded-md font-medium hover:bg-amber-900 transition">
                            Explore Collection
                        </button></NavLink>
                        <button className="border border-gray-300 px-6 py-3 rounded-md font-medium hover:bg-gray-100 transition">
                            Why Choose Us?
                        </button>
                    </div>

                    <div className="mt-8 md:mt-12 flex flex-wrap gap-10 items-center">
                        <div>
                            <p className="text-3xl font-semibold text-gray-800">10+</p>
                            <p className="text-gray-500 text-sm mt-1">Years in Toy Retail</p>
                        </div>
                        <div>
                            <p className="text-3xl font-semibold text-gray-800">20,000+</p>
                            <p className="text-gray-500 text-sm mt-1">Toys Sold</p>
                        </div>
                        <div>
                            <p className="text-3xl font-semibold text-gray-800">15,000+</p>
                            <p className="text-gray-500 text-sm mt-1">Happy Kids</p>
                        </div>
                    </div>
                </section>
                <div className="w-full lg:w-1/2 flex flex-col items-center">
                    <div className="carousel w-full max-w-[350px] sm:max-w-[420px] md:max-w-[500px] lg:max-w-[520px] 
                      h-[220px] sm:h-[260px] md:h-[320px] lg:h-[380px] rounded-xl overflow-hidden">

                        <div id="item1" className="carousel-item overflow-hidden scroll-mt-16 w-full">
                            <img
                                src="/Benefits-of-Wooden-Toys-for-children.webp"
                                className="w-full h-full object-cover"
                            />
                        </div>

                        <div id="item2" className="carousel-item overflow-hidden scroll-mt-16 w-full">
                            <img
                                src="/cute-plush-toys-arrangement_23-2150312316.jpg"
                                className="w-full h-full object-cover"
                            />
                        </div>

                        <div id="item3" className="carousel-item overflow-hidden scroll-mt-16 w-full">
                            <img
                                src="/outdoor-toys-for-toddlers-children-on-a-bike.jpg"
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>

                    <div className="flex scroll-smooth justify-center gap-2 pt-3">
                        <a href="#item1" className="btn btn-xs sm:btn-sm">1</a>
                        <a href="#item2" className="btn btn-xs sm:btn-sm">2</a>
                        <a href="#item3" className="btn btn-xs sm:btn-sm">3</a>
                    </div>
                </div>

            </div>
            <p className="text-sm text-center tracking-widest text-yellow-500 font-medium mb-3">
                PREMIUM TOY COLLECTION
            </p>
            <h2 className="text-4xl mx-auto text-center md:text-5xl font-serif font-semibold text-gray-900 mb-3">
                Playtime, Perfected
            </h2>
            <p className="max-w-3xl text-center mx-auto text-lg text-gray-600">
                Discover toys crafted to spark imagination, joy, and unforgettable childhood moments.
            </p>

            {/* <p className='lora mt-5 lg:text-[50px] font-bold text-center'>The Toy Journey</p> */}
            <div className='pt-10' id="cards"><Cards data={data}></Cards></div>

        </div>

    );
};

export default Home;