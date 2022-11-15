import React from "react";
import {testimonialItems} from "./testimonialItems";

export const Testimonials = () => {
    return (
        <div className="bg-white md:px-4">
            <div className="lg:px-40 md:px-6 bg-[#F2f2f2] px-4 py-4  py-12">
                <div className=" flex flex-col items-center justify-center">
                    <h1 className="lg:text-4xl text-3xl font-bold text-center text-gray-800">Hear from our community members</h1>
                    <p className="text-base leading-6 mt-4 text-center text-gray-600 2xl:w-2/5 ">
                        Here's what our community wants to say about our events...</p>
                </div>
                <div className="w-full lg:flex items-center gap-6 mt-10">
                    {
                        testimonialItems.map(({name, quote, image}, idx) => (
                            <div className="lg:w-1/2 lg:mt-0 mt-16">
                                <div className="bg-white border rounded-md border-gray-200 relative sm:p-10 p-6">
                                    <div>
                                        <img src="https://tuk-cdn.s3.amazonaws.com/can-uploader/testimonials-4-svg1.svg"
                                             alt="commas"/>
                                    </div>
                                    <p className="leading-6 text-gray-800 mt-4">{quote}</p>
                                </div>
                                <div className="flex items-center mt-7">
                                    <div
                                        className="w-12 h-12 border border-indigo-700 rounded-full flex items-center justify-center">
                                        <img src={image}
                                             className="w-10 h-10 rounded-full" alt="profile"/>
                                    </div>
                                    <div className="flex flex-col items-start ml-4">
                                        <p className="text-base font-semibold leading-4 text-black">{name}</p>
                                        <p className="text-base leading-4 mt-2 text-center text-gray-600">Community
                                            Member</p>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>

    );
}
