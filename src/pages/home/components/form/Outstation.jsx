import React from 'react';
import { TfiLocationPin } from "react-icons/tfi";
import { FaRegClock } from "react-icons/fa";


import './Form.css'

const Outstation = () => {
    return (
        <div>
            <div className='pt-10 px-[80px] flex items-center justify-center gap-x-5'>
                <div className='flex items-center'>
                    <div>
                        <p className='font-bold text-[15px]'>From</p>
                        <input
                            className='w-[220px] text-[14px] border-b-2 outline-0'
                            type="text"
                            id=""
                            placeholder='start typing city'
                        />
                    </div>
                    <div className='-ml-5 mt-4'>
                        <TfiLocationPin size={20}></TfiLocationPin>
                    </div>
                </div>

                <div className='flex items-center'>
                    <div>
                        <p className='font-bold text-[15px]'>To</p>
                        <input
                            className='w-[220px] text-[14px] border-b-2 outline-0'
                            type="text"
                            id=""
                            placeholder='start typing city'
                        />
                    </div>
                    <div className='-ml-5 mt-4'>
                        <TfiLocationPin size={20}></TfiLocationPin>
                    </div>
                </div>

                <div className='flex items-center'>
                    <div className='custom-date-input'>
                        <p className='font-bold text-[14px]'>Pick Up Date</p>
                        <input
                            className='w-[220px] text-[14px] border-b-2 outline-0'
                            type="date"
                            id="dateInput"
                            placeholder='start typing date'
                        />
                    </div>
                </div>

                <div className='flex items-center -mt-1'>
                    <div>
                        <p className='font-bold text-[15px]'>Pick Up At</p>
                        <input
                            className='w-[220px] text-[14px] border-b-2 outline-0'
                            type="text"
                            id=""
                            placeholder='start typing time'
                        />
                    </div>
                    <div className='-ml-5 mt-4'>
                        <FaRegClock size={20}></FaRegClock>
                    </div>
                </div>
            </div>
            <div className='text-center mt-5'>
                <button className="h-[29px] w-[126px] bg-[#38B000] text-white shadow-md rounded-[5px]">
                    Explore Cabs
                </button>
            </div>
        </div>
    );
};

export default Outstation;