import '../css/header.css';
import logo from '../images/3.png';
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
      <div className="brandWrapper">Rido</div>
      </div>
      {(props.dis)?(<div className="profile-wrapper">
         
      <button onClick={props.handleLogout}>LogOut</button>
            <div className="profile-name">Hello, {uname[0]}</div>
            <div className="profile-pic"><img src={profile} alt="profile"/></div>
      </div>):(<div className='profile-wrapper'>
         <button onClick={props.handleLogout}>LogOut</button>
         <button></button>
         </div>
      )}
      
</nav>

    );
}
export default Header;