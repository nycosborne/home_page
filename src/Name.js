import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Name() {

    return (
        <Container className={"name"} expand={'xxl'}>
            <Row className="justify-content-md-center">
                <Col md="auto">
                    <h1>Dan Osborne</h1>
                    <h1>{`Hello ${process.env.REACT_APP_NAME}`}</h1>
                    <h3 className="tag">$passion = Building Useful Things</h3>
                </Col>
            </Row>
        </Container>
    )
}

export default Name;