import React from 'react';
import driving from '../../../assets/driving.jpg'

const WhyCarRental = () => {
    return (
        <div className='max-w-7xl mx-auto my-5 p-4'>
            <div className='flex gap-x-10 border border-[#60A547] rounded-lg'>
                <div className='w-[320px] h-[250px] p-4'>
                    <img className='h-full w-[250px] rounded-lg' src={driving} alt="" />
                </div>
                <div className='w-[690px] p-4'>
                    <h1 className='text-3xl font-bold text-center text-[#60A547]'>Why choose Yatri Car Rental?</h1>
                </div>
            </div>
        </div>
    );
};

export default WhyCarRental;