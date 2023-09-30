import React, { useState } from 'react';
import Outstation from './Outstation';
import Local from './Local'
import Airport from './Airport'

const Form = () => {

    const [isActive, setIsActive] = useState(1);
    const [subActive, setSubActive] = useState(1)
    
    const handleActive = (id) => {
        setIsActive(id);
    }
    const handleSubActive = (subId) => {
        setSubActive(subId)
    }

    return (
        <div className='w-[1190px] h-[250px] mx-auto relative top-[50px] bg-white rounded-2xl'>

            {/* selection action section */}
            <div>
                <div className='flex justify-center gap-x-20 pt-[20px]'>
                    <button onClick={() => handleActive(1)} className={`${isActive === 1 ? 'bg-[#38B000] text-white' : 'bg-white'} h-[29px] w-[126px] shadow-md rounded-[5px]`}>
                        Outstation
                    </button>
                    <button onClick={() => handleActive(2)} className={`${isActive === 2 ? 'bg-[#38B000] text-white' : 'bg-white'} h-[29px] w-[126px] shadow-md rounded-[5px]`}>
                        Local
                    </button>
                    <button onClick={() => handleActive(3)} className={`${isActive === 3 ? 'bg-[#38B000] text-white' : 'bg-white'} h-[29px] w-[126px] shadow-md rounded-[5px]`}>
                        Airport
                    </button>
                </div>
                <div className='flex justify-center gap-x-20 pt-5'>
                    <button onClick={() => handleSubActive(1)} className={`${subActive === 1 ? 'bg-[#38B000] text-white' : 'bg-white'} h-[25px] w-[115px] shadow-md rounded-[5px]`}>
                        One Way
                    </button>
                    <button onClick={() => handleSubActive(2)} className={`${subActive === 2 ? 'bg-[#38B000] text-white' : 'bg-white'} h-[25px] w-[115px] shadow-md border border-[#38B000] rounded-[5px]`}>
                        Round Trip
                    </button>
                </div>
            </div>


            {/* selected form section */}
            <div>
                <div className={`${isActive === 1 ? 'block' : 'hidden'}`}>
                    <Outstation></Outstation>
                </div>

                <div className={`${isActive === 2 ? 'block' : 'hidden'}`}>
                    <Local></Local>
                </div>

                <div className={`${isActive === 3 ? 'block' : 'hidden'}`}>
                    <Airport></Airport>
                </div>
            </div>
        </div>
    );
};

export default Form;