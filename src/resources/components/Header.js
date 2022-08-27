import '../css/header.css';
import logo from '../images/newlogo2.png';
import profile from '../images/profile.webp';
function Header(props)
{
   const uname=props.email.split('@');
   return(
      <nav className="nav-bar">
      <div className="brand">   
          <div className="logo-wrapper">
             <img src={logo} alt="logo"/>
         </div>
      </div>
      <div className="profile-wrapper">
           <div className="brandWrapper">
                <a href="#Home">Home</a>
            </div>
           <div className="brandWrapper">
                <a href="#Services">Services</a>
           </div>
           <div className="brandWrapper">
                <a href="#Services">Join us</a>
           </div>
            
            <button onClick={props.handleLogout}>LogOut</button>
            <div className="profile-name">Hello, {uname[0]}</div>
            <div className="profile-pic"><img src={profile} alt="profile"/>
            <div class="dropdown-content">
            <a href="#1">Link 1</a>
            <a href="#2">Link 2</a>
            <a href="#3">Link 3</a>
            </div>
            </div>
      </div>
      
</nav>

    );
}
export default Header;