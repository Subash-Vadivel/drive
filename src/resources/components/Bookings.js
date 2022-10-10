import React from "react";
import { Container } from "react-bootstrap";

import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Row, Col } from "react-bootstrap";
import "../css/Booking.css";
import booking from "../images/booking.jpg";
import { db } from "../../fire";

import { useState } from "react";





const Bookings = (props) => {

  
const [name, setName] = useState("");

const [email, setEmail] = useState("");

const [mobile, setMobile] = useState("");




const handleSubmit = (e) => {
  e.preventDefault();
  db.collection('users').doc(props.user.uid).collection(email)
    .add({
      name: name,
      email: email,
      mobile: mobile,
    })
    .then(() => {
      alert("Booking Successfull");
    })
    .catch((error) => {
      alert(error.message);
    });
  setEmail("");
  setMobile("");
  setName("");
};



  return (
    <>
      <main>
        <Container>
          <div className="book">
            <img src={booking} width="70%" alt="..."></img>
            <br />
          </div>

          <div className="booking">
            <form className="mb-3" controlId="formBasicEmail" onSubmit={handleSubmit}>
              <Row>
                <Col md={6}>
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Your Email"
                    required
                    value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                  ></Form.Control>
                  <br />
                  <Form.Label>Mobile Number</Form.Label>
                  <Form.Control
                    type="number"
                    placeholder="Your mobile Number"
                    required
                    value={mobile}
                    onChange={(e) => {
                      setMobile(e.target.value);
                    }}
                  ></Form.Control>
                  <br />
                  <Form.Label>Choose Trip Type</Form.Label>
                  <Form.Select placeholder="Triptype" required>
                    <option value="1" defaultValue></option>
                    <option value="2">RoundTrip</option>
                    <option value="3">OneTrip</option>
                    <option value="4">Hourly Rental</option>
                  </Form.Select>
                  <br />
                  <Form.Label>Pickup Time</Form.Label>
                  <Form.Control
                    type="time"
                    placeholder="Your pick Time"
                  ></Form.Control>
                </Col>
                <Col md={6}>
                  <Form.Label>Name</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Your Name"
                    required
                    value={name}
                  onChange={(e) => {
                    setName(e.target.value);
                  }}
                  ></Form.Control>
                  <br />
                  <Form.Label>Alternate Number</Form.Label>
                  <Form.Control
                    type="number"
                    placeholder="Your Alternate Number"
                  ></Form.Control>
                  <br />
                  <Form.Label>Pickup Date</Form.Label>
                  <Form.Control
                    type="date"
                    placeholder="Your pick Date"
                    required
                  ></Form.Control>
                  <br />
                  <Form.Label>Choose PickUp Location</Form.Label>
                  <Form.Select required>
                    <option value="1" selected>
                      Erode
                    </option>
                    <option value="2">Chennai</option>
                    <option value="3">Coimbatore</option>
                    <option value="4">Tirupur</option>
                    <option value="5">Madurai</option>
                  </Form.Select>
                  <br />
                </Col>
              </Row>
              <Form.Label>Comments</Form.Label>
              <Form.Control
                as="textarea"
                placeholder="Your Message"
                rows={3}
              ></Form.Control>
              <br />
              <div className="center">
                <Button variant="primary" type="submit" size="lg">
                  Submit
                </Button>
              </div>
            </form>
          </div>
        </Container>
      </main>
    </>
  );
};

export default Bookings;
