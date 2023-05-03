import React from 'react';
import { useContext } from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../providers/AuthProvider';
import { FaUserCircle } from 'react-icons/fa';

const Header = () => {
    const { user } = useContext(AuthContext);
    return (
        <Container>
            <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
                <Navbar.Brand href="#home"><h1 className='ps-2'>Best <span className='text-primary'>Recipe</span></h1></Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Link className='text-success text-decoration-none px-3' to="/">Home</Link>
                        <Link className='text-success text-decoration-none' to="/blog">Blog</Link>
                    </Nav>
                    <Nav>
                        {user &&
                            <FaUserCircle style={{ fontSize: '2rem' }}></FaUserCircle>}

                        {user ?
                            <Button variant="primary">Log Out</Button> :
                            <Link to='/login'>
                                <Button variant="primary">Login</Button>
                            </Link>}
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </Container>
    );
};

export default Header;