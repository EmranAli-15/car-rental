import React from 'react';
import '../Home.css'
import Form from './form/Form';

const Banner = () => {
    return (
        <div className='home-banner-bg'>
            <div className='max-w-7xl mx-auto'>
                <Form></Form>
            </div>
        </div>
    );
};

export default Banner;