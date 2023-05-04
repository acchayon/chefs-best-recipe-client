import React from 'react';
import { useContext } from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../providers/AuthProvider';
import { FaUserCircle } from 'react-icons/fa';
import ActiveLink from '../../../Routes/ActiveLink';

const Header = () => {
    const { user, logOut } = useContext(AuthContext);
    const handleLogOut = () => {
        logOut()
        .then()
        .catch(error => console.log(error))
    }
    return (
        <Container>
            <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
                <Navbar.Brand href="#home"><h1 className='ps-2'>Best <span className='text-primary'>Recipe</span></h1></Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <ActiveLink className='text-success text-decoration-none ps-3' to="/">Home</ActiveLink>
                        <ActiveLink className='text-success text-decoration-none ps-3' to="/blog">Blog</ActiveLink>
                    </Nav>
                    <Nav>
                        {user &&
                            <FaUserCircle style={{ fontSize: '2rem' }}></FaUserCircle>}

                        {user ?
                            <Button onClick={handleLogOut} variant="primary">Log Out</Button> :
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