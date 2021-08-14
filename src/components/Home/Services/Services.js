import React from 'react';
import fluoride from '../../../images/001-dental.png';
import cavity from '../../../images/tooth.png';
import whitening from '../../../images/tooth (1).png'
import ServiceDetails from '../ServiceDetails/ServiceDetails';

const Services = () => {
    const services = [
        {
            name: 'Fluoride Treatment',
            img: fluoride
        },
        {
            name: 'Cavity Filling',
            img: cavity
        },
        {
            name: 'Teeth Whitening',
            img: whitening
        }
    ]
    return (
        <div>
            <h3 className="text-center mt-5 text-info">Our Services</h3>
            <h1 className="text-center text-secondary">Services We Provide</h1>
            <div className="d-flex justify-content-center">
                <div className="row w-75">
                    {
                        services.map(service => <ServiceDetails service={service}></ServiceDetails>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Services;