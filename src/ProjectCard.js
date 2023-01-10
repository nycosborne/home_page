import React from 'react';
import Card from 'react-bootstrap/Card';

function ProjectCard({imageTag, link}) {

    return (
        <Card style={{width: '18rem'}}>
            <a href={link}><Card.Img variant="top" src={imageTag}/></a>
        </Card>)
}

export default ProjectCard;