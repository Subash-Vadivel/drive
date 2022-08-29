import '../css/Footer.css';
import { Row,Col,Container } from 'react-bootstrap';

function Footer()
{
    return(<>
    <Container>
        <Row>
            <Col xs={3}>About Rido</Col>
            <Col xs={3}>Info</Col>
            <Col xs={6}>Availability</Col>
        </Row>
    </Container>
    </>);
}
export default Footer;