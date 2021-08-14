import React from 'react';
import { faClock,faMapMarker,faPhone } from '@fortawesome/free-solid-svg-icons'
import InfoCard from '../InfoCard/InfoCard';

const BusinessInfo = () => {
    const Infos=[
        {
            title:'Opening Hours',
            description:'Lorem ipsum dolor sit amet consectetur ',
            icon:faClock,
            background:"primary"
        },
        {
            title: 'Visit Our Location',
            description: 'Brooklyn, NY 10003 USA',
            icon: faMapMarker,
            background: 'dark'
        },
        {
            title: 'Call us now',
            description: '+15697854124',
            icon: faPhone,
            background: 'primary'
        }
    ]
    return (
       <div className="d-flex justify-content-center">
            <div className="row w-75">
            {
                Infos.map(info =><InfoCard  info={info}></InfoCard>)
            }
        </div>
       </div>
    );
};

export default BusinessInfo;