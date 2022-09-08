import { Container, Row,Col } from 'react-bootstrap';
import '../css/About.css';
import abt from '../images/aboutus.jpg'; 
function About()
{
    return (<>
    
    <Container>
        <Row>    
            <Col md={3} sm={3}></Col>
            <Col md={6} sm={6}>
            <img src={abt} className="imgsz" alt="..."></img>
            </Col>
            <Col md={3} sm={3}></Col>
        </Row>
        <Row>
            <Col>
            <h2 className='txtHead'>About Us</h2>
            </Col>
        </Row>
    </Container>
    </>);
}
export default About;