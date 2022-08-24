import 'bootstrap/dist/css/bootstrap.min.css';
import { Col, Row } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import ca from './images/vcar.gif';
import service from './images/service.jpg'


import React, { Component } from 'react';
import bus from './images/cardriver.jpg'
import lorry from './images/bus.jpg'
import repair from './images/repair.jpg'
import './App.css'
function car()//************Banner with image */
{
  return (<><div className='Link'>
    <Container>
      <h1> Book Your Driver</h1>
      <button variant="outline-primary">Book</button>
      <h3>WhatEver the condition our Driver's will ride safely</h3>
    </Container>
  </div>
    
  </>);
}




function Lis()/********Driver */
{
  return (<div className='ride'>
    <br /><br />
    <Container>
      
      <h1>Our Driver Services</h1>
        <Row>
          <Col md={6}>
            <img className="img-fluid" src={bus} width="100%"></img>
        </Col>
        
        <Col md={6}>
          <h2>Car drivers</h2>
          <p>The most affordable services of driver are available at your beck and call with complete transparency in pricing and prompt delivery of service.
            If you need driver for Chauffeur, city driving, office drops and pick-up for regular service, outstation trips, driver service at night to pick up clients from a late night party or
            late evening and drop them at their home safely. The driver service can also be availed for valet parking in commercial So next time a driver is required without hesitation you just make the booking and avail trained services of driver at your place.
            </p>
          </Col>
      </Row>
      <br />
      <br />
      <Row>
        <Col md={6}><h2>Heavy Vehicle drivers</h2>
        <p>Here We Provied all Heavy vehicle drivers with all safely</p>
        </Col>
        
        <Col md={6}>
          <img className="img-fluid" src={lorry} width="100%"></img>
</Col>
      </Row>
        <br />
    </Container></div>);
}





function other()
{
  return (<div className='other'>
    <Container>
      <h1>Our Other Services</h1>
      <Row>
        <Col md={6}>
          <img className="img-fluid" src={repair} width="100%"></img>
          
        </Col>
        <Col md={6}><p>Have any problem Don't Worry our nearest Service man will reach Soon.</p>
        <p>Any other Help.</p></Col>
      </Row>
    </Container>
    
  </div>
  );
}




function Join()
{
    return (<div className="second">
      <Container>
        <br />
        <h1>Join with our Community</h1>
            <Row>
                <Col md={6}>
                    <img className="img-fluid" src={ca} width="100%"></img>
          </Col>
          <Col md={5}>
          
            <p>Join our Community and work together and reach customers fast and qucikly.

            </p>
            <button>Join</button>
          </Col>
        </Row>
        <br />
        <br />
        <Row>
          <Col md={6}><img className="img-fluid" src={service} width="100%"></img></Col>
          <Col md={6}><p>Make your Service to people in emerceny situvation near You.</p>
                    <button>Join</button>
</Col>
        </Row>
    </Container>
    </div >);
}
/*Nav bar*/


function Menu()
{
return(<><Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home">Ridos</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="justify-content-end" style={{ width: "100%" }}>
          <Nav.Link href="/home">Lo</Nav.Link>
          <Nav.Link eventKey="link-1">Signup</Nav.Link>
        </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar></>)
}


function Home() {
  return (<>
    {Menu()}
    {car()}
    {Lis()}
    {other()}
    {Join()}
  </>
  );
}
export default Home;