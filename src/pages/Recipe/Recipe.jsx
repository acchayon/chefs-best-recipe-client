import React, { useState } from 'react';
import { Button, Card, Container } from 'react-bootstrap';
import { FaArrowLeft, FaHeart } from 'react-icons/fa';
import { Link, useLoaderData } from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast';

const Recipe = () => {
    const recipe = useLoaderData();

    const hotToast = () => {
        toast('wow, added to my favorite list')
    }

    const { chef_name, chef_picture, name, ingredients, image_url, description, number_of_recipes, years_of_experience } = recipe;
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

            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top"  src={image_url} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>
                       {ingredients}
                    </Card.Text>
                    <FaHeart onClick={hotToast} className='text-danger' fontSize={{height: '2rem'}}></FaHeart>
                </Card.Body>
            </Card>
            <Toaster />
        </Container>
    );
};

export default Recipe;