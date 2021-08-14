import React from 'react';
import { Nav } from 'react-bootstrap';
import './Header.css'
import chair from  '../../../images/Mask Group 1.png'
import './Header.css'

const Header = () => {
    return (
        <div>
            <Nav  className="justify-content-end" activeKey="/home">
                <Nav.Item>
                    <Nav.Link className="text-secondary " href="/home"><span  style={{fontWeight:'bold'}}>Home</span></Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link  className="text-secondary " eventKey="link-1"><span  style={{fontWeight:'bold'}}>Blogs</span></Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link  className="text-secondary " eventKey="link-2"><span  style={{fontWeight:'bold'}}>About</span></Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link  className="text-white " eventKey="link-2"><span  style={{fontWeight:'bold'}}>Dental Services</span></Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link  className="text-white " eventKey="link-2"><span  style={{fontWeight:'bold'}}>Reviews</span></Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link   className="text-white" eventKey="link-2"><span  style={{fontWeight:'bold'}}>Contact Us</span></Nav.Link>
                </Nav.Item>
            </Nav>
            <div className="row d-flex align-items-center">
                <div className="col-md-4 offset-md-1 smile">
                    <h1>Your New Smile<br/>Starts Here</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere dolorum suscipit, iure ad numquam laudantium veritatis quasi eius deserunt? Corrupti et incidunt voluptatibus ducimus eos quam magnam inventore eveniet accusantium.</p>
                    <button className="btn btn-info">Get Appointment</button>
                </div>
                <div className="col-md-6 ">
                    <img style={{height:'300px', margin:'100px'}} src={chair} className="img-fluid" alt="" />
                </div>
            </div>
        </div>
    );
};

export default Header;