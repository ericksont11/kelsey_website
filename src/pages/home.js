import React from 'react';
import Navbar from 'react-bootstrap/Navbar'
import Jumbotron from 'react-bootstrap/Jumbotron'
import Container from 'react-bootstrap/Container'


function About(props) {
    return (
        <div>
            <Navbar bg="dark" variant="dark">
                <Navbar.Brand href="#home">
                <img
                    alt=""
                    src="/logo.svg"
                    width="30"
                    height="30"
                    className="d-inline-block align-top"
                />{' '}
                Kelsey Goodman
                </Navbar.Brand>
            </Navbar>
            <Jumbotron fluid style={{padding:'0', height:'75vh', overflow:'hidden'}}>

                    <img
                        alt=""
                        src="https://images.unsplash.com/photo-1530026186672-2cd00ffc50fe"
                        width='100%'
                        style={{align:'bottom'}}
                    />
                    <h1>Fluid jumbotron</h1>
                    <p>
                    This is a modified jumbotron that occupies the entire horizontal space of
                    its parent.
                    </p>
            </Jumbotron>
        </div>
    );
}

export default About;