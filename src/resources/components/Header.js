import '../css/header.css';
import logo from '../images/newlogo5.png';
import Nav from 'react-bootstrap/Nav';

import NavDropdown from 'react-bootstrap/NavDropdown';
import { Navbar,Container } from 'react-bootstrap';
function Header(props)
{
   return(
      <>
      <Navbar className="color-nav" collapseOnSelect fixed='top' expand='md'>
            <Container>
                  <Navbar.Brand>
                              <div className="logo-wrapper">
                              < img src={logo} alt="logo"/>
                              </div>
                  </Navbar.Brand>

                  <Navbar.Toggle aria-controls='responsive-navbar-nav'/>
                  <Navbar.Collapse id='responsive-navbar-nav'>
                        <Nav className='ms-auto'>
                              <Nav.Link className='nav-link' href='/'>Home</Nav.Link>
                              <NavDropdown  title="Services"  id="navbarScrollingDropdown">
                                    <NavDropdown.Item className='nav-drop-down'>Booking</NavDropdown.Item>
                                    <NavDropdown.Item className='nav-drop-down' >Hire Drivers</NavDropdown.Item>
                                    <NavDropdown.Item className='nav-drop-down'>Road Side Assistance</NavDropdown.Item>
                              </NavDropdown>
                              <Nav.Link className='nav-link' href='/'>Your Rides</Nav.Link>
                              <Nav.Link className='nav-link' href='/' >About us</Nav.Link>
                              <Nav.Link className='nav-link' href='/'>Support</Nav.Link>
                              <Nav.Link className='nav-linkop' onClick={props.handleLogout}>Log Out</Nav.Link>                              
                        </Nav>
                  </Navbar.Collapse>
            </Container>
      </Navbar>
      {/* <Switch>
            <Route exact path='/' component={Home}/>
            <Route exact path='/services' component={Services}/>
            
      </Switch> */}
    
</>
    );
}
export default Header;