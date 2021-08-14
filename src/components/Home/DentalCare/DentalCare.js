import React from 'react';
import dental from '../../../images/Mask Group 3.png'

const DentalCare = () => {
    return (
        <div className="container">
            <div className="row mt-5">
                <div className="col-md-5">
                    <img style={{height:'500px'}} src={dental} className="img-fluid"  alt="" />
                </div>
                <div className="col-md-7 mt-5">
                    <h1 style={{color:'rgb(9, 9, 20'}}>Exceptional Dental <br/>Care,On Your Terms</h1>
                    <p className="text-secondary mt-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur dolorum laudantium est culpa eaque. Alias, distinctio possimus cumque laboriosam deserunt at perferendis nemo fugiat repellendus molestias aut! Mollitia quibusdam ex minus suscipit, atque hic eos? Earum nihil autem, non aliquam natus voluptate, odio id temporibus repellat tempore expedita dolor? Doloremque.</p>
                    <button className="btn btn-info mt-5">Get Appointment</button>
                </div>
            </div>
            
        </div>
    );
};

export default DentalCare;