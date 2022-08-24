import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
function Header()
{
   return(<Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
   <Container>
     <Navbar.Brand href="#home">Rido</Navbar.Brand>
     <Navbar.Toggle aria-controls="responsive-navbar-nav" />
     <Navbar.Collapse id="responsive-navbar-nav">
       <Nav className="justify-content-end" style={{ width: "100%" }}>
       <Nav.Link href="/home">Login</Nav.Link>
       <Nav.Link eventKey="link-1">Signup</Nav.Link>
     </Nav>
     </Navbar.Collapse>
   </Container>
 </Navbar>);
}
export default Header;