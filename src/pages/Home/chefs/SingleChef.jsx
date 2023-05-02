import React from 'react';
import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import { FaArrowRight, FaThumbsUp } from 'react-icons/fa';

const SingleChef = ({ chef }) => {
    const { id, chef_picture, chef_name, years_of_experience, number_of_recipes, likes } = chef;
    return (
        <Col>
            <Card className='h-100' style={{ width: '28rem' }}>
                <Card.Img variant="top" src={chef_picture} />
                <Card.Body>
                    <Card.Title>{chef_name}</Card.Title>
                    <Card.Title>Experience: {years_of_experience} years +</Card.Title>
                    <Card.Title>Recipes: {number_of_recipes} +</Card.Title>
                    <Card.Text>
                        Some quick example text to build on the card title and make up the
                        bulk of the card's content.
                    </Card.Text>
                    <p className=''>Likes: {likes} <FaThumbsUp></FaThumbsUp> </p>
                    <Button variant="primary">View Recipe <FaArrowRight></FaArrowRight> </Button>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default SingleChef;


{/* <Card>
                <Card.Img variant="top" src={chef_picture} />
                <Card.Body>
                    <Card.Title>{chef_name}</Card.Title>
                    <Card.Title>Experience: {years_of_experience} years +</Card.Title>
                    <Card.Title>Recipes: {number_of_recipes} +</Card.Title>
                    <Card.Text>
                        This is a longer card with supporting text below as a natural
                        lead-in to additional content. This content is a little bit
                        longer.
                    </Card.Text>
                    <p>Likes: {likes} <FaThumbsUp></FaThumbsUp> </p>
                    <Button variant="primary">View Recipe <FaArrowRight></FaArrowRight> </Button>
                </Card.Body>
            </Card> */}