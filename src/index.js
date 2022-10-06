import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Login from './Login';
import Home from './Home';
import About from './resources/components/About';
import Bookings from './resources/components/Bookings';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Support from './resources/components/Support';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <Routes>
    <Route path='/' element={<Home/>}></Route>
    <Route path='/login' element={<Login/>}></Route>
    <Route path='/about' element={<About/>}></Route>
    <Route path='/support' element={<Support/>}></Route>
    <Route path='/bookings' element={<Bookings/>}></Route>

  </Routes>
  </BrowserRouter>
);
reportWebVitals();
