import '../css/Footer.css';
import { Row,Col,Container } from 'react-bootstrap';
import logofoot from '../images/newlogo2.png';

function Footer()
{
    return(<>
    <Container className='footer-top'>
        <span className='footer-top-item'><img src={logofoot} alt="..."/></span>
    </Container>
    <Container fluid className='footer-main'>
        <Row className='foot-row'>
            <Col sm={3} xs={6}><ul type="none" className='foot-li'>
                <li>About Rido</li>
                <li>Home</li>
                <li>Contact Us</li>
                <li>Offers</li>
                <li>Support</li>
                <li>Careers</li>
                <li>Blog</li>
                </ul></Col>
            <Col sm={3} xs={6}>
                <ul type="none" className='foot-li'>
                    <li>Info</li>
                    <li>Fares</li>
                    <li>Business Partner</li>
                    <li>Become a Driver</li>
                    <li>Privacy Policy</li>
                    <li>Terms & Conditions</li>
                    {/* &#38; */}
                </ul>
            </Col>
            <Col sm={6}>
            <ul type="none" className='foot-li'>
                <li>Availability</li>
                <li>We are in</li>
                </ul>
                </Col>
        </Row>
    </Container>
    <Container fluid className='footer-end'>
        <p className='footer-end-txt'>© 2022 Team Alpha. All rights reserved.</p>
    </Container>
    </>);
}
export default Footer;