import React from "react";
import { Container } from "react-bootstrap";
import partner from "../images/Partner.png";
import "../css/Partner.css";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Row, Col } from "react-bootstrap";
const Partner = () => {
  return (
    <div>
      <Container>
        <div className="part">
          <img src={partner} width="50%" alt="..."></img>
        </div>
        <br />
        <div className="main">
          <h1>Join Us</h1>
          <p>
            Being a part of our esteemed concern, we expect our business
            partners to follow the standards of the company in order to satisfy
            our customers. We expect you to give a professional driving
            experience also by maintaining your cabs in excellent condition. It
            is mandatory to follow the rules and regulations of the concern in
            terms of customer hospitality, behaviour, dressing and grooming
            culture as per standards.
          </p>
          <br />
          <form className="mb-3" controlId="formBasicEmail">
            <Row>
              <Col xs={4} sm={4} md={2}>
                <Form.Label>Name</Form.Label>
                <br />
                <br />
                <Form.Label>Email</Form.Label>
                <br />
                <br />
                <Form.Label>Phone Number</Form.Label>
                <br />
                <br />
                <Form.Label>City</Form.Label>
                <br />
                <br />
                <Form.Label>No of Cabs</Form.Label>
              </Col>

              <Col xs={8} sm={8} md={8}>
                <Form.Control
                  type="name"
                  placeholder="Your Name"
                  required
                ></Form.Control>
                <br />
                <Form.Control
                  type="email"
                  placeholder="Your Email"
                  required
                ></Form.Control>
                <br />
                <Form.Control
                  type="number"
                  placeholder="Your Mobile Number"
                  required
                ></Form.Control>
                <br />
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
                <Form.Control
                  type="number"
                  placeholder="Number of cabs"
                  required
                ></Form.Control>
                <br />{" "}
                <div className="center">
                  <Button variant="outline-info" type="submit" size="lg">
                    Submit
                  </Button>
                </div>
              </Col>
            </Row>
          </form>
        </div>
      </Container>
    </div>
  );
};

export default Partner;
