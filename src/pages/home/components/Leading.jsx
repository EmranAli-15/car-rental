import React from 'react';
import carImg from '../../../assets/car.png'
import { FaCarAlt } from 'react-icons/fa';
import { FaCarOn } from "react-icons/fa6";

const Leading = () => {
    return (
        <div className='max-w-7xl mx-auto my-10'>
            <h1 className='text-center text-[43px] font-bold text-[#60A547]'>India's Leading One-Way Inter-City Cab Service Provider</h1>

            <div className='flex items-start justify-between mt-3'>
                <div className='w-[400px]'>
                    <img className='w-[300px]' src={carImg} alt="" />
                </div>
                <div className='w-[400px]'>
                    <div className='flex justify-center text-[#60A547]'>
                        <FaCarAlt size={30}></FaCarAlt>
                    </div>
                    <h1 className='text-center text-xl font-bold text-[#60A547]'>Return Fare, Not Fair!</h1>
                    <p className='text-center'>
                        Why Pay for Return Journey when you are travelling one-way? Now get discounted AC Taxi at just half of the round trip cost for your one-way travel.
                    </p>
                </div>
                <div className='w-[400px]'>
                    <div className='flex justify-center text-[#60A547]'>
                        <FaCarOn size={30}></FaCarOn>
                    </div>
                    <h1 className='text-center text-xl font-bold text-[#60A547]'>Now available routes are!</h1>
                    <p className='text-center'>
                        Lucknow | Gorakhpur | Varanasi | Allahabad | Bareilly
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Leading;