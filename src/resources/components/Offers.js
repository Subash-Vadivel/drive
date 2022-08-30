import { Row,Col,Container } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import '../css/Offers.css';
import offers from '../images/offers.webp';
function Offers()
{
    return (<>
       <Container>
        <h2>Offers For You...</h2>
        <Row>
            <Col  md={4}>
            <Card classname="offer-cards">
                  <Card.Img variant="top" src={offers} />
                   <Card.Body>
                   <Card.Title>Coimbatore to Erode</Card.Title>
                  <Card.Text>
                  Make a trip from Coimbatore to Erode or from Erode to Coimbatore at an affordable rate.
                    </Card.Text>
                    <Card.Text>Drop Rs.1599/- only</Card.Text>
                  </Card.Body>
           </Card>
           </Col>
           <Col md={4}>
           <Card classname="offer-cards">
                  <Card.Img variant="top" src={offers} />
                   <Card.Body>
                   <Card.Title>Coimbatore to Erode</Card.Title>
                  <Card.Text>
                  Make a trip from Coimbatore to Erode or from Erode to Coimbatore at an affordable rate.
                    </Card.Text>
                    <Card.Text>Drop Rs.1599/- only</Card.Text>
                  </Card.Body>
           </Card>
           </Col>
           <Col md={4}>
           <Card classname="offer-cards" >
                  <Card.Img variant="top" src={offers} />
                   <Card.Body>
                   <Card.Title>Coimbatore to Erode</Card.Title>
                  <Card.Text>
                  Make a trip from Coimbatore to Erode or from Erode to Coimbatore at an affordable rate.
                    </Card.Text>
                    <Card.Text>Drop Rs.1599/- only</Card.Text>
                  </Card.Body>
           </Card>
           
            </Col>
        </Row>
       </Container>
    </>);
}
export default Offers;