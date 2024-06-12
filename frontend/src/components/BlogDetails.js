import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import Navbar from "./Navbar";
import parse from 'html-react-parser';
import Footer from "./Footer";

const BlogDetails = () => {
    const [blogdetails, setBlogDetails] = useState([]);
    let {blogId} = useParams();
    console.log(blogId);

    useEffect(() => {
        fetch(`https://mazingira-blogs-json-server-vercel.vercel.app/blogs/${blogId}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        })
            .then(response => response.json())
            .then(data => setBlogDetails(data))
    },[blogId])

    return (
        <>
            <Navbar />
            <div
                className="relative grid md:grid-cols-1 mt-[2rem] bg-cover bg-center"
                style={{ backgroundImage: `url(${blogdetails.imageUrl})`, height: '500px' }}
            >
                <div className="flex flex-col justify-center items-center text-center h-full">
                    <h1 className="text-white text-[22px] md:text-[32px] lg:text-[60px] font-baloo font-bold p-4">
                        {blogdetails.title}
                    </h1>
                    <div className="flex items-center text-white mt-2">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 256 256" className="mr-2">
                            <path fill="white"
                                  d="M128 24a104 104 0 1 0 104 104A104.11 104.11 0 0 0 128 24m0 192a88 88 0 1 1 88-88a88.1 88.1 0 0 1-88 88m64-88a8 8 0 0 1-8 8h-56a8 8 0 0 1-8-8V72a8 8 0 0 1 16 0v48h48a8 8 0 0 1 8 8"/>
                        </svg>
                        <p className="font-baloo font-bold text-center">
                            {blogdetails.date}
                        </p>
                    </div>
                </div>
            </div>

            <div className="container mx-auto mt-[3rem] p-8 md:p-5 lg:p-0">
                <p className="font-baloo">
                    {parse(`${blogdetails.actualDescription}`)}
                </p>
            </div>
            <Footer/>
        </>
    )
}

export default BlogDetails;
