import React from 'react';
import { Button, Card, Container } from 'react-bootstrap';
import { FaArrowLeft } from 'react-icons/fa';
import { Link, useLoaderData } from 'react-router-dom';

const Recipe = () => {
    const recipe = useLoaderData();
    const { chef_name, chef_picture, name, recipe_1,image_url, description, number_of_recipes, years_of_experience } = recipe;
    return (
        <Container>
            <h2 className='text-center mt-5'>Our honorable Bangladeshi chef: <span className='text-primary'>{chef_name}</span> </h2>
            <Card className='w-75 mx-auto mt-3 p-4 border-0 shadow-lg p-3 mb-5 bg-body-tertiary rounded'>
                <Card.Img className='rounded' variant="top" src={chef_picture} />
                <Card.Title className='mt-3'>Recipes: {number_of_recipes} +</Card.Title>
                <Card.Title className='mt-3'>Experience: {years_of_experience} year+</Card.Title>
                <Card.Body>
                    <Card.Text>
                        {description}
                    </Card.Text>
                    <Link to='/'><Button variant="primary"><FaArrowLeft></FaArrowLeft> Go back</Button></Link>
                </Card.Body>
            </Card>

            <hr />

            {/* <Card style={{ width: '18rem' }}>
                <Card.Img variant="top"  src={image_url} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>
                        Some quick example text to build on the card title and make up the
                        bulk of the card's content.
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
            </Card> */}
        </Container>
    );
};

export default Recipe;