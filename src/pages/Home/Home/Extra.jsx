import React from 'react';
import { Container } from 'react-bootstrap';
import ProgressBar from 'react-bootstrap/ProgressBar';


const Extra = () => {
    const now = 43;

    return (
        <Container>
            <h2 className='text-center mt-5'>Overall Foodie or Food Lover people in Bangladesh</h2>
            <hr />
            <h2 className='text-center mt-2 p-2'>Bangladesh ranked 43rd in the global list of best cuisines in the world for the year 2022</h2>

            <ProgressBar className='mb-5 mt-3' now={now} label={`${now}%`} />
        </Container>
    );
};

export default Extra;