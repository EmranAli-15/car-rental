import React from 'react';
import { BsFillCarFrontFill } from "react-icons/bs";
import { FaCarSide } from 'react-icons/fa';
import { FaCarOn } from 'react-icons/fa6';
import { PiUsersThreeDuotone } from 'react-icons/pi';
import { BiRadio } from "react-icons/bi";

const Discovering = () => {
    return (
        <div className='max-w-7xl mx-auto'>
            <div className='bg-[#2f313c]'>
                <h1 className='text-3xl uppercase font-bold text-center text-[#60A547] py-5'>
                    Discovering India's diverse landscapes, one scenic road trip at a time
                </h1>
                <ul className='px-20 list-disc text-white space-y-4 pb-5'>
                    <li>
                        Experience the thrill of road travel with our reliable car rental and taxi service as we explore the diverse landscapes of India together.We're passionate about making car hire accessible and enjoyable for everyone.
                    </li>
                    <li>
                        Instead of worrying about the road, relax in our chauffeur - driven cabs on your next vacation.With a presence in over 2000 cities across India, we're here to take you wherever your heart desires with our car rental services.
                    </li>
                    <li>
                        We cherish the freedom to stop, breathe in the fresh air, immerse in local cultures, and Savor regional cuisines along the way.These moments of discovery enrich your travels and create lasting memories through our rent a car service.
                    </li>
                    <li>
                        No destination is too far or too close; we encourage you to explore the beauty around you with our car hire options.Pack your bags, set out on weekend adventures, and uncover the gems in your vicinity with our taxi service.
                    </li>
                    <li>
                        Planning your trip is a breeze with our user - friendly website, or you can chat with our travel experts at 8960170877 for personalized guidance on car rental.Our cab booking app simplifies the process, ensuring a hassle - free experience when you rent a car.
                    </li>
                    <li>
                        Our experienced drivers are your companions on the road, guiding you through India's best experiences with our car rental and taxi service. From booking to your safe return home, we're dedicated to ensuring you have an exceptional road trip.
                    </li>
                </ul>
            </div >

            <div className='bg-[#60A547] flex justify-between pb-5'>
                <div className='w-full'>
                    <div className='flex items-center justify-center gap-x-4 h-[50px] border-r border-b border-white'>
                        <BsFillCarFrontFill></BsFillCarFrontFill>
                        <h1 className='font-bold'>
                            Cab Type
                        </h1>
                    </div>
                    <div className='h-full border-r border-white'>
                        <h1 className='text-center text-white'>
                            AC Sedans <br /> AC Hatchbacks <br /> AC SUV
                        </h1>
                    </div>
                </div>

                <div className='w-full'>
                    <div className='flex items-center justify-center gap-x-4 h-[50px] border-r border-b border-white'>
                        <FaCarSide></FaCarSide>
                        <h1 className='font-bold'>
                            Models Include
                        </h1>
                    </div>
                    <div className='h-full border-r border-white'>
                        <h1 className='text-center text-white'>
                            Etios, Amaze, Dzire etc. <br /> Wagon R, Celerio, Micra etc. <br /> Ertiga, Xylo etc.
                        </h1>
                    </div>
                </div>

                <div className='w-full'>
                    <div className='flex items-center justify-center gap-x-4 h-[50px] border-r border-b border-white'>
                        <PiUsersThreeDuotone></PiUsersThreeDuotone>
                        <h1 className='font-bold'>
                            Passengers
                        </h1>
                    </div>
                    <div className='h-full border-r border-white'>
                        <h1 className='text-center text-white'>
                            4 Pax <br /> 4 Pax <br /> 6-7 Pax
                        </h1>
                    </div>
                </div>

                <div className='w-full'>
                    <div className='flex items-center justify-center gap-x-4 h-[50px] border-r border-b border-white'>
                        <FaCarOn></FaCarOn>
                        <h1 className='font-bold'>
                            Ideal For
                        </h1>
                    </div>
                    <div className='h-full border-r border-white'>
                        <h1 className='text-center text-white'>
                            Comfortable trips with small families <br /> Budget trips over short distances <br /> Premium trips with large families
                        </h1>
                    </div>
                </div>

                <div className='w-full'>
                    <div className='flex items-center justify-center gap-x-4 h-[50px] border-r border-b border-white'>
                        <BiRadio></BiRadio>
                        <h1 className='font-bold'>
                            Fare
                        </h1>
                    </div>
                    <div className='h-full border-r border-white'>
                        <h1 className='text-center text-white'>
                            Rs.11/KM <br /> Rs.11/KM <br /> Rs.13/KM
                        </h1>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Discovering;