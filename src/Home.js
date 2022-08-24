import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import './resources/css/App.css';
import Services from './resources/components/Services';
import Header from './resources/components/Header';
import Slider from './resources/components/Slider';
import Community from './resources/components/Community';
function Home() {
  return (<>
    <Header/>
    <Slider/>
    <Services/>
    <Community/>
  </>
  );
}
export default Home;