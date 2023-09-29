import React from 'react';
import { FaArrowRightLong } from 'react-icons/fa6';

const Footer = () => {
    return (
        <div className='bg-[#2F313C] py-14 mt-16 flex flex-col items-center'>
            <h1 className='text-3xl font-bold text-white'>LOGO</h1>

            <div className='text-white flex gap-x-5 mt-5'>
                <a href="">Home</a>
                <a href="">About</a>
                <a href="">Service</a>
                <a href="">News</a>
                <a href="">Contact</a>
            </div>

            <div className='flex items-center gap-x-5'>
                <h1 className='text-white font-bold'>Newsletter</h1>
                <div className='my-10 flex justify-center'>
                    <input type="text" placeholder="Type here" className="rounded-l-[20px] pl-4" />
                    <button type='submit' className="rounded-r-[20px] py-4 px-8 bg-[#2F313C] border border-white">
                        <FaArrowRightLong className='text-white'></FaArrowRightLong>
                    </button>
                </div>
            </div>

            <p className='text-white'>
                All Copyrights are reserved by RIDE EVEE
            </p>
        </div>
    );
};

export default Footer;