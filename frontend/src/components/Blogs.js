import React, {useEffect, useState} from "react";
import Navbar from "./Navbar";
import Rectangle from "../assets/images/ContactRectangle.png";
import {Link} from "react-router-dom";
import Footer from "./Footer";

const Blogs = () => {
    const [blogs, setBlogs] = useState([]);
    useEffect(() => {
        fetch("https://mazingira-blogs-json-server-vercel.vercel.app/blogs")
            .then((response) => response.json())
            .then((data) => {
                setBlogs(data)
                console.log('Fetched data:', data);
            });
    }, []);

    return (
        <>
            <Navbar/>
            <div className="container mx-auto bg-white md:p-0 p-6">
                <div className="grid md:grid-cols-1">
                    <h3 className="font-baloo font-extrabold text-[48px] text-[#121212] text-center">
                        Blogs n More
                    </h3>

                    <p className="font-baloo font-medium text-[18px] text-[#717171] md:mt-2 text-center">
                        More on Climate and it’s amusements!
                    </p>

                    <img src={Rectangle} alt="Rectangle" className="mx-auto mt-[1rem] md:mt-[1rem]"/>

                    <h5 className="font-baloo font-semibold text-[24px] mt-3 mb-3">All blog posts</h5>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                    {blogs.map(blog => (
                        <div key={blog.id}
                             className="flex flex-col bg-white border border-gray-200 shadow rounded-xl hover:shadow-lg lg:h-[470px]">
                            <img className="w-full h-1/2 rounded-t-xl" src={blog.imageUrl} alt="Image Description"/>
                            <div className="p-4 md:p-5">
                                <h3 className="font-baloo text-lg font-bold text-[#000000]">
                                    {blog.title}
                                </h3>
                                <p className="font-baloo mt-1 text-gray-500">
                                    {blog.shortDescription}
                                </p>
                                <div className="mt-2 flex justify-between items-center">
                                    <span
                                        className="inline-flex items-center gap-x-1.5 py-1.5 px-3 rounded-full text-xs font-medium bg-[#00BB1E] text-white">{blog.date}</span>

                                    <div className="text-center">
                                        <Link
                                            to={`/blogs/${blog.id}`}
                                            className="font-baloo font-bold text-[20px] text-[#955A02] inline-flex items-center gap-x-1"
                                        >
                                            <small>Read More</small>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20"
                                                 viewBox="0 0 1024 1024">
                                                <path fill="#955a02"
                                                      d="M754.752 480H160a32 32 0 1 0 0 64h594.752L521.344 777.344a32 32 0 0 0 45.312 45.312l288-288a32 32 0 0 0 0-45.312l-288-288a32 32 0 1 0-45.312 45.312z"/>
                                            </svg>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <Footer/>
        </>
    )
}


export default Blogs;
