import { Col, Row } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Header from './resources/components/Header';
function Login()
{
  return (<>{Header()}

    <div className='background'>
      <Container>
        
          <form>
            <label>username:</label><input type='text'></input><br />

            <label>password:</label><input type='text'></input><br />
          </form>
          
      </Container>
  </div>
    
    
  </>
       
    
  );
}
export default Login;