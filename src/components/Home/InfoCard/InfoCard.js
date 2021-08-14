import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './Infocard.css'

const InfoCard = (props) => {
    const { title, description, icon, background } = props.info;
    return (
        <div className="col-md-4 text-white info-style">
            <div className={`d-flex align-items-center justify-content-center info-container info-${background}`}>
                <div>
                    <FontAwesomeIcon style={{ fontSize: '40px',margin:'0px 20px' }} icon={icon}  />
                </div>
                <div className="details">
                    <p style={{fontWeight:'bold'}}>{title}</p>
                    <small>{description}</small>
                </div>

            </div>
        </div>
    );
};

export default InfoCard;