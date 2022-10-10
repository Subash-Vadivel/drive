
import React, { useState } from 'react';

import './index.css';
import Login from './Login';

import Header from "./resources/components/Header";
import Home from './Home';
import About from './resources/components/About';
import Footer from "./resources/components/Footer";
import Bookings from './resources/components/Bookings';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Support from './resources/components/Support';

import fire from './fire';


function App(){
   

  const [userstatus,setUserStatus]=useState('');
  const handleLogout = (event) => {
  
    setUserStatus('');
    fire.auth().signOut();
    };
  return (


   <>
   
   <BrowserRouter>
  <header>
  {/* handleLogout={props.handleLogout} user={props.user} */}
  {console.log(userstatus)}
        <Header  handleLogout={handleLogout} setUserStatus={setUserStatus} user={userstatus}/>
      </header>
  <Routes>
  
    <Route path='/' element={<Home/>}></Route>
    <Route  path='/login' element={<Login setUserStatus={setUserStatus} user={userstatus}/>}></Route>
    <Route exact path='/about' element={<About/>}></Route>
    <Route exact path='/support' element={<Support/>}></Route>
    <Route  path='/bookings' element={<Bookings/>}></Route>

  </Routes>
  
  <footer>
        <Footer />
      </footer>
  </BrowserRouter>
   
   </>
  )
}
export default App;