import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Name(){

    return(
        <Container className={"name"}  expand={'xxl'}>
            <Row className="justify-content-md-center">
                <Col md="auto">
                    <h1>Dan Osborne</h1>
                </Col>
            </Row>
            <Row className="justify-content-md-center">
                <Col md="auto">
                    <h3>Love building useful things</h3>
                </Col>
            </Row>
        </Container>
        )
}

export default Name;