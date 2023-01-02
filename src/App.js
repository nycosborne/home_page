import React from 'react';
import ProfileCard from '../src/ProfileCard';
import BasicExample from '../src/NavBar';
import NavBar from "../src/NavBar"
import Name from "../src/Name"
import './index.css';

import AlexaImg from './images/alexa.png'
import CortanaImg from './images/cortana.png'
import SiriImg from './images/siri.png'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Navbar from "react-bootstrap/Navbar";
import Col from "react-bootstrap/Col";

function App() {
  return (
      <Container fluid>
          <BasicExample/>
          <Row>
              <Name/>
          </Row>
          <Row>
              <ProfileCard text="Hello" info='unknown' imageTag={AlexaImg}/>
              <ProfileCard text="Sir" info='unknown' imageTag={CortanaImg}/>
              <ProfileCard text="Google thing" info='known' imageTag={SiriImg}/>
          </Row>
      </Container>
  );
}

// const message = 'Hello Big Boy';
// export {message};


export default App;