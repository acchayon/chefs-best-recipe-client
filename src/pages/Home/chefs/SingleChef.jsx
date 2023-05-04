import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';
import { FaArrowRight, FaHeart, FaThumbsUp } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const SingleChef = ({ chef }) => {
    const { id, chef_picture, chef_name, description, years_of_experience, number_of_recipes, likes } = chef;
    
    return (
        <Col>
            <Card className='h-100 border-0 shadow-lg p-3 mb-5 bg-body-tertiary rounded' style={{ width: '28rem' }}>
                <Card.Img style={{ height: '350px' }} variant="top" src={chef_picture} />
                <Card.Body>
                    <Card.Title>{chef_name}</Card.Title>
                    <Card.Title>Experience: {years_of_experience} years +</Card.Title>
                    <Card.Title>Recipes: {number_of_recipes} +</Card.Title>
                    <Card.Text>
                        {description.length < 200 ? <>{description}</> : <>{description.slice(0, 200)}...<Link to={`/recipe/${id}`}>Read More</Link> </>}
                    </Card.Text>
                    <div className='justify-content-between d-flex'>
                        <p className=''>Likes: {likes} <FaThumbsUp className='ps-2' style={{ fontSize: '1.5rem' }} ></FaThumbsUp> </p>
                        <FaHeart className='text-danger' style={{ fontSize: '1.5rem' }}></FaHeart>
                    </div>
                    <Link to={`/recipe/${id}`}>
                        <Button variant="primary">View Recipe <FaArrowRight></FaArrowRight> </Button></Link>
                </Card.Body>
            </Card>

            {/* <Card>
                <Card.Img variant="top" src={chef_picture} />
                <Card.Body>
                    <Card.Title>{chef_name}</Card.Title>
                    <Card.Text>
                        {ingredients}
                    </Card.Text>
                    <p>Likes: {likes} <FaThumbsUp></FaThumbsUp> </p>
                    <Button variant="primary">View Recipe <FaArrowRight></FaArrowRight> </Button>
                </Card.Body>
            </Card> */}
            
        </Col>
    );
};

export default SingleChef;


