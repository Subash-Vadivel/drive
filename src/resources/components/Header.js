import '../css/header.css';
import logo from '../images/3.png';
import profile from '../images/profile.webp';
function Header(props)
{
   return(
      <nav className="nav-bar">
      <div className="brand">   
      <div className="logo-wrapper">
             <img src={logo} alt="logo"/>
      </div>
      <div className="brandWrapper">Rido</div>
      </div>
      <div className="profile-wrapper">
            <div className="profile-name">Hello, {props.user}</div>
            <div className="profile-pic"><img src={profile} alt="profile"/></div>
      </div>
</nav>

    );
}
export default Header;