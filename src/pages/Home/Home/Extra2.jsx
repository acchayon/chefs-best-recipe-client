import React from 'react';
import { useState } from 'react';
import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { FaSmile } from 'react-icons/fa';

const Extra2 = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <Container className='text-center mb-3'>
            <Button variant="primary" onClick={handleShow}>
                See About Us <FaSmile></FaSmile>
            </Button>

            <Offcanvas show={show} onHide={handleClose}>
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title>Best Recipe</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    This is a website which is created by AC Chayon about some Bangladeshi top chefs and their famous recipes. Everbody loves food and this chefs are like to create authentic foods for food lovers. Here is some top chefs details with their recipes. Hope you are enjoying it and thank you very much
                </Offcanvas.Body>
            </Offcanvas>

        </Container>
    );
};

export default Extra2;