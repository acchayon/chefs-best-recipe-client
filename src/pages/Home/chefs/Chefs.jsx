import React, { useEffect, useState } from 'react';
import SingleChef from './SingleChef';
import { Container } from 'react-bootstrap';

const Chefs = () => {
    const [chefs, setChefs] = useState([]);

    useEffect(() => {
        fetch('https://chefs-best-recipe-server-acchayon.vercel.app/chefs')
            .then(res => res.json())
            .then(data => setChefs(data))
            .catch(error => console.log(error))
    }, [])
    return (
        <Container>
            <h2 className='text-center mb-4 mt-3'>Here is Our top bangladeshi chefs</h2>
            <div className='row row-cols-1 row-cols-md-2 g-4'>
                {
                    chefs.map(chef => <SingleChef
                        key={chef.id}
                        chef={chef}
                    ></SingleChef>)
                }
            </div>

        </Container>
    );
};

export default Chefs;

