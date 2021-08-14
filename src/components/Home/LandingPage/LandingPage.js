import React from 'react';
import BusinessInfo from '../BusinessInfo/BusinessInfo';
import Header from '../Header/Header';
import './LandingPage.css'

const LandingPage = () => {
    return (
        <div className="header-container">
           <Header></Header>
           <BusinessInfo></BusinessInfo>
        </div>
    );
};

export default LandingPage;