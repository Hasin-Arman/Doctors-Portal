import React from 'react';
import DentalCare from '../DentalCare/DentalCare';
import LandingPage from '../LandingPage/LandingPage';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div>
            <LandingPage></LandingPage>
            <Services></Services>
            <DentalCare></DentalCare>
        </div>
    );
};

export default Home;