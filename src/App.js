import React from 'react';
import ProfileCard from '../src/ProfileCard';
import NavBar from '../src/NavBar';
import Name from "../src/Name"
import './index.css';

import AlexaImg from './images/alexa.png'
import CortanaImg from './images/cortana.png'
import SiriImg from './images/siri.png'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from "react-bootstrap/Col";


function App() {
    return (
        <Container fluid>
            <NavBar/>
            <Row>
                <Name/>
            </Row>
            <Row>
                <Col>
                    <ProfileCard text="Hello" info='unknown' imageTag={AlexaImg}/>
                </Col>
                <Col>
                    <ProfileCard text="Sir" info='unknown' imageTag={CortanaImg}/>
                </Col>
                <Col>
                    <ProfileCard text="Google thing" info='known' imageTag={SiriImg}/>
                </Col>
            </Row>
        </Container>
    );
}


export default App;