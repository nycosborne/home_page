import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';



function ProfileCard({text, info, imageTag}){

    return(
    <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={imageTag} />
        <Card.Body>
            <Card.Title>{text}</Card.Title>
            <Card.Text>
                {info}
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
        </Card.Body>

    </Card>)
}

export default ProfileCard;