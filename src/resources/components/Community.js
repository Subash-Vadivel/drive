import { Col, Row } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';

import service from '../images/service.jpg';
import ca from '../images/vcar.gif';
function Community()
{
    return(<div className="second">
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
  </Container>
  </div >);
}
export default Community;