import React from 'react';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Jumbotron from 'react-bootstrap/Jumbotron'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

function About(props) {
    return (
        <div>
            <Navbar bg="dark" variant="dark">
                <Navbar.Brand href="#home">Navbar</Navbar.Brand>
                <Nav className="mr-auto">
                <Nav.Link href="/">Home</Nav.Link>
                </Nav>
            </Navbar>
            <Jumbotron fluid style={{padding:'0', height:'75vh', overflow:'hidden'}}>

                    <img
                        alt=""
                        src="https://images.unsplash.com/photo-1530026186672-2cd00ffc50fe"
                        width='100%'
                        style={{align:'bottom'}}
                    />
                    <div style={{position:'absolute', top:'14rem', left:'10%'}}>
                        <h1 style={{color:'white', left:'10%', fontFamily: 'Montserrat', fontSize:'7vw'}}>KELSEY GOODMAN</h1>
                        <h1 style={{color:'white', left:'10%', fontFamily: 'Montserrat', fontSize:'3vw'}}>CLINICAL RESEARCH EXPERT</h1>
                    </div>
            </Jumbotron>
            <Container style={{padding:'0', marginLeft:'10%', marginRight:'10%'}}>
                <Row>
                    <Col sm={4} style={{height:'40vh', width:'100%', backgroundColor:'green'}}>
                    </Col>
                    <Col sm={8}>
                        I have a vast experience managing all of the projects big and small and medium, yellow, red, and blue, left, right, and center. ALL OF THEM. ALL. OF. THEM.
                    </Col>
                </Row>
                <Row>
                    <Col sm={4} style={{height:'40vh', width:'100%', backgroundColor:'white'}}>
                    </Col>
                    <Col sm={8}>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default About;