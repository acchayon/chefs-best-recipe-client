import React from 'react';
import { Container } from 'react-bootstrap';
import { FaFacebook, FaInstagram, FaYoutube } from 'react-icons/fa';


const Footer = () => {
    return (
        <Container style={{height: '30vh'}} className='bg-dark text-white text-center'>
            <h2  className=' pt-4'>Thanks for visiting to our Best Chefs & Recipis</h2>
            <p>Contacts Us</p>
            <div className='d-flex gap-4 fs-4 pb-2  justify-content-center'>
                <FaFacebook></FaFacebook>
                <FaYoutube></FaYoutube>
                <FaInstagram></FaInstagram>
            </div>
            <p>© 2023 All Rights Reserved. Designed by AC Chayon</p>
        </Container>
    );
};

export default Footer;