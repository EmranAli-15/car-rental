import React from 'react';
import driving from '../../../assets/driving.jpg'
import { FaFlag } from 'react-icons/fa';
import { PiUsersThree } from "react-icons/pi";
import { RiRadioLine } from "react-icons/ri";
import { LuArrowUpRightFromCircle } from "react-icons/lu";

const WhyCarRental = () => {
    return (
        <div className='max-w-7xl mx-auto my-5 p-4'>
            <div className='flex items-center gap-x-10 border border-[#60A547] rounded-lg'>
                <div className='w-[320px] h-[250px] p-4'>
                    <img className='h-full w-[250px] rounded-lg' src={driving} alt="" />
                </div>
                <div className='w-[690px] p-4'>
                    <h1 className='text-3xl uppercase font-bold text-center text-[#60A547]'>Why choose Yatri Car Rental?</h1>
                    <div className='grid grid-cols-2 gap-4 mt-5'>
                        <div className='flex items-center gap-x-4'>
                            <div>
                                <FaFlag className='text-[#60A547]' size={45}></FaFlag>
                            </div>
                            <div>
                                <h1 className='text-xl text-[#60A547]'>FIRST RESPONSE TIME</h1>
                                <p>Avail Best Car Rental Service in Lucknow with driver for Local or Outstation within the moment of your call for best car hire experience.</p>
                            </div>
                        </div>

                        <div className='flex items-center gap-x-4'>
                            <div>
                                <PiUsersThree className='text-[#60A547] font-bold' size={55}></PiUsersThree>
                            </div>
                            <div>
                                <h1 className='text-xl text-[#60A547]'>VAST FLEET</h1>
                                <p>We have all kinds of Car on Rent available like Sedan, Suv, Muv, Premium Sedan, Tampo Traveller etc as per ur requirement</p>
                            </div>
                        </div>

                        <div className='flex items-center gap-x-4'>
                            <div>
                                <RiRadioLine className='text-[#60A547]' size={45}></RiRadioLine>
                            </div>
                            <div>
                                <h1 className='text-xl text-[#60A547]'>EASY TO ORDER</h1>
                                <p>Easily Book Cab Online with our website or call our customer support team</p>
                            </div>
                        </div>

                        <div className='flex items-center gap-x-4'>
                            <div>
                                <LuArrowUpRightFromCircle className='text-[#60A547]' size={45}></LuArrowUpRightFromCircle>
                            </div>
                            <div>
                                <h1 className='text-xl text-[#60A547]'>GREAT TARIFFS</h1>
                                <p>Rent A Car !Our car hire tariff are very low when compare to other operators in Lucknow. Book online cabs with best prices in Lucknow at Yatri Car Rental </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <div className='mt-10'>
                <h1 className='text-3xl uppercase font-bold text-center text-[#60A547]'>Why Choose Oneway Cab?</h1>
                <div className='flex mx-20 mt-5 justify-between items-center'>
                    <div>
                        <ul className='uppercase text-lg list-disc space-y-3'>
                            <li>Instant Booking & Confirmation</li>
                            <li>Confirmed Booking Immediately</li>
                            <li>No Return Fare for One-Way Trip</li>
                            <li>Clean & Professional Cab Services</li>
                            <li>No Night or Luggage Charges</li>
                        </ul>
                    </div>
                    <div>
                        <ul className='uppercase text-lg list-disc space-y-3 text-left'>
                            <li>Pick-up from your house</li>
                            <li>Dedicated Cab just for you</li>
                            <li>Drop to your desired destination</li>
                            <li>Completed more than 20,000+ One-Way Trips</li>
                            <li>Multiple Payment Option including Credit Card.</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WhyCarRental;