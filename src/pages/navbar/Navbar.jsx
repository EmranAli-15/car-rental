import React from 'react';
import contact from '../../assets/contact.png'
import logo from '../../assets/logo.png'
import { FaRegTimesCircle } from 'react-icons/fa';

const Navbar = () => {
    return (
        <div>
            <div className="navbar h-[25px] max-w-[1400px] mx-auto">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            <li><a>Item 1</a></li>
                            <li>
                                <a>Parent</a>
                                <ul className="p-2">
                                    <li><a>Submenu 1</a></li>
                                    <li><a>Submenu 2</a></li>
                                </ul>
                            </li>
                            <li><a>Item 3</a></li>
                        </ul>
                    </div>
                    <img className='h-9' src={logo} alt="" />
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <img className='relative h-[60px] mt-2' src={contact} alt="" />
                    </ul>
                </div>
                <div className="navbar-end">
                    <div className='flex items-center gap-x-5'>
                        <button className='tracking-tighter text-xs'>
                            Customer Sign In
                        </button>
                        <button className='tracking-tighter text-xs px-2 py-1 text-white rounded-md bg-[#60A547]'>
                            Vendor Sign In
                        </button>
                    </div>
                    <div className='ml-10'>
                        <FaRegTimesCircle size={20} className='bg-[#60A547] rounded-full text-white'></FaRegTimesCircle>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;