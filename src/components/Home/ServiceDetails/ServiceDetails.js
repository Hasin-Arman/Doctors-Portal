import React from 'react';

const ServiceDetails = (props) => {
    const {name,img}=props.service;
    return (
        <div className="col-md-4 mt-5">
            <img style={{height:'80px',marginLeft:'90px'}} className="justify-self-center" src={img} alt="" />
            <h5  style={{paddingLeft:'50px'}} className=" mt-2">{name}</h5>
            <small className="text-secondary">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolores suscipit eaque aut laboriosam eligendi temporibus hic maxime</small>
        </div>
    );
};

export default ServiceDetails;