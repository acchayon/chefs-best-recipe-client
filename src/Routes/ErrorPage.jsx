import React from 'react';
import { Button, Container, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
    return (
        <Container>
            <div className=' text-center mt-5'>
                <Image className='w-50' src="https://i.ibb.co/m0vrrJd/404-page-cover.jpg" rounded /> 
                <br />
                <Link to={-1}><Button variant="primary">Go Back</Button></Link>
            </div>
        </Container>
    );
};

export default ErrorPage;