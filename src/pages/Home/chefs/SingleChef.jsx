import React from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import { FaThumbsUp } from 'react-icons/fa';

const SingleChef = ({ chef }) => {
    const { id, chef_picture, chef_name, years_of_experience, number_of_recipes, likes } = chef;
    return (
        <Container>
            <Row  xs={1} md={2} lg={2}>
                <Col>
                    <Card>
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
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
};

export default SingleChef;