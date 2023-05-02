import React from 'react';
import { Col, Container, Image, Row } from 'react-bootstrap';
import Banner from '../Banner/Banner';
import Chefs from '../chefs/Chefs';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Chefs></Chefs>
        </div>
    );
};

export default Home;