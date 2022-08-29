import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import './resources/css/App.css';
import Services from './resources/components/Services';
import Header from './resources/components/Header';
import Slider from './resources/components/Slider';
import Community from './resources/components/Community';
import Footer from './resources/components/Footer';
function Home(props) {
  return (<>
  <header>
     <Header  handleLogout={props.handleLogout}/>
  </header>
  <main>
    <Slider/>
    <Services/>
    <Community/>
  </main>
  <footer>
    <Footer/>
  </footer>
  </>
  );
}
export default Home;