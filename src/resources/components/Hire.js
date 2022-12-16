import React from "react";
import { Container } from "react-bootstrap";

import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Row, Col } from "react-bootstrap";
import "../css/Booking.css";
import booking from "../images/hireimg.jpg";
import { db } from "../../fire";
import emailjs from '@emailjs/browser';
import { useState } from "react";

const Hire = (props) => {
  const [name, setName] = useState("");

  const [email, setEmail] = useState("");

  const [mobile, setMobile] = useState("");

  const [comment, setComment] = useState("");

  const [triptype, setTriptype] = useState("RoundTrip");

  const [altmobile, setAltmobile] = useState("");

  const [pickuploc, setPickuploc] = useState("Erode");

  const [pickupdate, setPickupdate] = useState("");

  const [pickuptime, setPickuptime] = useState("");
const handleSubmit = (e) => {
  
  e.preventDefault();
  if(props.user)
  {
    // 
  db.collection('acting_drivers').doc(props.user.uid).collection('booking')
    .add({
      name: name,
      email: email,
      mobile: mobile,
      comment:comment,
      triptype:triptype,
      pickuploc:pickuploc,
      altmobile:altmobile,
      pickupdate:pickupdate,
      pickuptime:pickuptime,
      status:"Pending",
    })
    .then(
     
      () => {
        alert("Successs");
      }
    )
    .catch((error) => {
      alert(error.message);
    });
    const values = {
      nameid: name,
      reply:email,
      time:pickuptime,
  };
  
    
  setEmail("");
  setMobile("");
  setName("");
  setComment("");
  setTriptype("");
  setPickuploc("Erode");
  setAltmobile("");
  setPickuptime("");
  setPickupdate("");

  emailjs.send('service_2mkgwbc', 'template_hujy1ok', values, 'K8euowKjAEM6KEIrK')
    .then((result) => {
      console.log("email sent");
    }, (error) => {
        console.log("Check syntax"+error.text);
    });
  }
  else
  {
    alert("Session Out Please Login Again");
  }

};

  return (
    <>
      <main>
        <Container>
          <div className="book">
            <img src={booking} width="60%" alt="..."></img>
            <br />
          </div>

          <div className="booking">
            <form
              className="mb-3"
              controlId="formBasicEmail"
              onSubmit={handleSubmit}
            >
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
                  <Form.Select
                    placeholder="Triptype"
                    required
                    defaultValue={triptype}
                    onChange={(e) => {
                      setTriptype(e.target.value);
                    }}
                  >
                    <option value="RoundTrip">Hourly</option>
                    <option value="OneTrip">DayTrip</option>
                    <option value="Hourly Rental">Other</option>
                  </Form.Select>
                  <br />
                  <Form.Label>Pickup Time</Form.Label>
                  <Form.Control
                    type="time"
                    placeholder="Your pick Time"
                    value={pickuptime}
                    onChange={(e) => {
                      setPickuptime(e.target.value);
                    }}
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
                    value={altmobile}
                    onChange={(e) => {
                      setAltmobile(e.target.value);
                    }}
                  ></Form.Control>
                  <br />
                  <Form.Label>Pickup Date</Form.Label>
                  <Form.Control
                    type="date"
                    placeholder="Your pick Date"
                    required
                    value={pickupdate}
                    onChange={(e) => {
                      setPickupdate(e.target.value);
                    }}
                  ></Form.Control>
                  <br />
                  <Form.Label>Choose PickUp Location</Form.Label>
                  <Form.Select
                    required
                    defaultValue={pickuploc}
                    onChange={(e) => {
                      setPickuploc(e.target.value);
                    }}
                  >
                    <option value="Erode" selected>
                      Erode
                    </option>
                    <option value="Chennai">Chennai</option>
                    <option value="Coimbatore">Coimbatore</option>
                    <option value="Tirupur">Tirupur</option>
                    <option value="Madurai">Madurai</option>
                  </Form.Select>
                  <br />
                </Col>
              </Row>
              <Form.Label>Comments</Form.Label>
              <Form.Control
                as="textarea"
                placeholder="Your Message"
                rows={3}
                value={comment}
                onChange={(e) => {
                  setComment(e.target.value);
                }}
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

export default Hire;
