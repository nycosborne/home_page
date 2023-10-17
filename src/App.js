import React from 'react';
import ProjectCard from '../src/ProjectCard';
import NavBar from '../src/NavBar';
import Name from "../src/Name"
import './index.css';

import GitHubImg from './images/github.png'
import LinkedInImg from './images/linkedin.png'
import CVImg from './images/cv.png'
import CV from './cv/DanOsborne_CV.docx'
import CV_markdown from './cv/cv.md'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from "react-bootstrap/Col";
import Markdown from 'react-markdown'
import Frame from 'react-frame-component';


function App() {

    // Links out to account profiles.
    const gitHubLink = 'https://github.com/nycosborne';
    const linkedinLink = 'https://www.linkedin.com/in/dan-osborne/';
    const markdown = 'https://gist.githubusercontent.com/nycosborne/23fe8bb544f74169e98f29fc2cc35be2/raw/595ab0e7bb9f856ea33cfea2cbc4ea159145648f/cv.md';
    const markdown2 = '# Hi, *Pluto*!'
    return (
        <Container fluid="md">
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
                    {/*<ProjectCard link={CV} imageTag={CVImg}/>*/}
                </Col>
            </Row>
            <Row fluid="md">
                <Frame
                    style={{ width: '100%', height: '100%' }}
                    initialContent={`<!DOCTYPE html><html><head></head><body><script src="https://gist.github.com/nycosborne/23fe8bb544f74169e98f29fc2cc35be2.js"></script></body></html>`}
                />
                <Markdown>{markdown2}</Markdown>
            </Row>
        </Container>
    );
}


export default App;