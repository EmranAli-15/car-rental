import React from 'react';
import Banner from './components/Banner';
import Leading from './components/Leading';
import WhyChoose from './components/WhyChoose';
import WhyCarRental from './components/WhyCarRental';
import Discovering from './components/Discovering';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Leading></Leading>
            <WhyChoose></WhyChoose>
            <WhyCarRental></WhyCarRental>
            <Discovering></Discovering>
        </div>
    );
};

export default Home;