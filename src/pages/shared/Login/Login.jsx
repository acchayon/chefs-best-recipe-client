import React, { useContext, useState } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../providers/AuthProvider';

const Login = () => {
    const {signIN} = useContext(AuthContext);
    const [error, setError] = useState('');
    const location = useLocation();
    console.log('login page ' ,location)
    const from = location.state?.from?.pathname || '/' ;

    const navigate = useNavigate();

    const handleLogin = event => {
        setError('')

        event.preventDefault();

        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password)

        signIN(email, password)
        .then(result => {
            const loggedUser = result.user;
            console.log(loggedUser)
            navigate(from, { replace: true})
        })
        .catch(error => {
            console.log(error.message)
            setError(error.message)
        })
    }

    return (
        <Container>
            <Form onSubmit={handleLogin} className='w-50 mx-auto'>
                <h2 className='text-center '>Please Login !!!</h2>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name='email' placeholder="Enter email" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name='password' placeholder="Password" required />
                </Form.Group>
                <Form.Text className="text-muted">
                    {error}
                </Form.Text>
                <br />
                <Button variant="primary" type="submit">
                    Login
                </Button>
                <p>New to Best Chefs? Go to <Link to='/register'>Register</Link> </p>
            </Form>
        </Container>
    );
};

export default Login;