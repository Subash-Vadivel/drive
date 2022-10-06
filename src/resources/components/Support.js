import support from "../images/support.jpg";
import { Container } from "react-bootstrap";
import "../css/Support.css";
import Header from "./Header";
import Footer from "./Footer";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Row, Col } from "react-bootstrap";
function Support() {
  return (
    <>
      <header>
        <Header />
      </header>
      <main>
        <Container>
          <h2>Support</h2>
          <img src={support} className="imgsz" alt="..."></img>
          <br />
          <br />
          <br />
          <h3>Send us your Query</h3>

          <form className="mb-3" controlId="formBasicEmail">
            <Row>
              <Col>
                <Form.Control type="email" placeholder="Email"></Form.Control>
                <br />
              </Col>
              <Col>
                <Form.Control type="text" placeholder="Name"></Form.Control>
                <br />
              </Col>
            </Row>
            <Form.Select>
              <option value="1">Complients</option>
              <option value="2">Feedback</option>
              <option value="3" selected>
                Suggestions
              </option>
              <option value="4">Enquiry</option>
              <option value="5">others</option>
            </Form.Select>
            <br />
            <Form.Control
              as="textarea"
              placeholder="Your Message"
              rows={3}
            ></Form.Control>
            <br />
            <div className="center">
              <Button variant="secondary" size="lg">
                Submit
              </Button>
            </div>
          </form>
        </Container>
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}
export default Support;
