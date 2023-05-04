import React, { useContext } from 'react';
import { Button, Col, Container, Image, Row } from 'react-bootstrap';
import { FaGithub, FaGoogle } from 'react-icons/fa';
import { AuthContext } from '../../../providers/AuthProvider';


const Banner = () => {
    const { signGoogle, signGithub } = useContext(AuthContext);

    const handleGoogle = () => {
        signGoogle()
            .then(result => {
                const user = result.user;
                console.log(user)
            })
            .catch(error => {
                console.log(error)
            })
    }

    const handleGithub = () => {
        signGithub()
        .then(result => {
            const user = result.user;
            console.log(user)
        })
        .catch((error => {
            console.log(error)
        }))
    }

    return (
        <Container className='bg-light'>
            <Row>
                <Col sm={4}>
                    <h1 className='fs-1 mt-5 text-center'>Let's check <br /> your <span className='text-warning'>best chef</span> <br /> with <span className='text-primary'>best Recipe</span></h1>
                    <p className='text-center mt-5'>"Here is some details of top chefs of <span className='text-danger'>Bangladesh</span>. They make some special recipe for food lovers. All foods are authentic and very beautiful. Hopefully you enjoying this and test this food must..."</p>
                    <div className='d-flex gap-2'>
                        <Button onClick={handleGoogle} variant="outline-primary"><FaGoogle></FaGoogle> Google</Button>
                        <Button onClick={handleGithub} variant="outline-primary"><FaGithub></FaGithub> Github</Button>
                    </div>
                </Col>
                <Col sm={8}>
                    <Image src="https://i.ibb.co/7zNff7N/food4.jpg" fluid />
                </Col>
            </Row>
        </Container>
    );
};

export default Banner;