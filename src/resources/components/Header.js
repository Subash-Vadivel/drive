import '../css/header.css';
import logo from '../images/newlogo5.png';
import Nav from 'react-bootstrap/Nav';
// import NavDropdown from 'react-bootstrap/NavDropdown';
import { Navbar,Container } from 'react-bootstrap';
import Login from '../../Login';
import Home from '../../Home';
import { Routes,BrowserRouter, Link, Route} from 'react-router-dom';
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
                              <Nav.Link className='nav-link' href='/'><Link to='/' className='routeBtn'>Home</Link></Nav.Link>
                              {/* <NavDropdown  title="Services"  id="navbarScrollingDropdown">
                                    <NavDropdown.Item className='nav-drop-down'>Booking</NavDropdown.Item>
                                    <NavDropdown.Item className='nav-drop-down' >Hire Drivers</NavDropdown.Item>
                                    <NavDropdown.Item className='nav-drop-down'>Road Side Assistance</NavDropdown.Item>
                              </NavDropdown> */}
                              <Nav.Link className='nav-link' href='/'><Link to='/bookings' className='routeBtn'>Booking</Link></Nav.Link>
                              <Nav.Link className='nav-link' href='/'><Link to='/rides' className='routeBtn'>Your Rides</Link></Nav.Link>
                              <Nav.Link className='nav-link' href='/' ><Link to='/about' className='routeBtn'>About us</Link></Nav.Link>
                              <Nav.Link className='nav-link' href='/'><Link to='/support' className='routeBtn'>Support</Link></Nav.Link>
                              {  props.user?(<Nav.Link className='nav-linkop' onClick={props.handleLogout}>Log Out</Nav.Link>):(<Nav.Link className='nav-linkop' ><Link to='/login' className='loginBtn'>Log In</Link></Nav.Link>)
                              
                                 }                              
                        </Nav>
                  </Navbar.Collapse>
            </Container>
      </Navbar>
    
</>
    );
}
export default Header;