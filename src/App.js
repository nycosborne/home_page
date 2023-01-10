import React from 'react';
import ProjectCard from '../src/ProjectCard';
import NavBar from '../src/NavBar';
import Name from "../src/Name"
import './index.css';

import GitHubImg from './images/github.png'
import LinkedInImg from './images/linkedin.png'
import CVImg from './images/cv.png'
import CV from './cv/DanOsborne_CV.docx'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from "react-bootstrap/Col";



function App() {
    let gitHubLink = 'https://github.com/nycosborne';
    let linkedinLink = 'https://www.linkedin.com/in/dan-osborne/';

    return (
        <Container fluid>
            <Row>
                <NavBar/>
                <Name/>
            </Row>
            <Row className={'linkRow'}>
                <Col>
                    <ProjectCard link={gitHubLink} imageTag={GitHubImg}/>
                </Col>
                <Col>
                    <ProjectCard link={linkedinLink} imageTag={LinkedInImg}/>
                </Col>
                <Col>
                    <ProjectCard link={CV} imageTag={CVImg}/>
                </Col>
            </Row>
        </Container>
    );
}


export default App;