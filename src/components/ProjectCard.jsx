import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

function ProjectCard(props) {
    return (
        <div className='col-md-6'>
            <Card className='h-100 shadow'>
                <Card.Img variant='top' src={props.projectImage} />
                <Card.Body className='p-5'>
                    <Card.Title className='fw-bold text-uppercase mb-4 fs-3'>{props.projectName}</Card.Title>
                    <Card.Text>{props.projectDesc}</Card.Text>
                    <Button className='shadow text-capitalize' variant='outline-primary'>View project</Button>
                </Card.Body>
            </Card>
        </div>
    )
}

export default ProjectCard;