import React from 'react';
import { Col, Container, Image, Row } from 'react-bootstrap';
import Banner from '../Banner/Banner';
import Chefs from '../chefs/Chefs';
import Extra from './Extra';
import Extra2 from './Extra2';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Chefs></Chefs>
            <Extra></Extra>
            <Extra2></Extra2>
        </div>
    );
};

export default Home;