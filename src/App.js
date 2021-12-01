
import {Outlet} from 'react-router-dom';


import logo from './logo.svg';
import POPOSList from './POPOSList';
import Title from './Title';
import Footer from './Footer';
import './App.css';
import React from 'react'
import About from './About';
import POPOSDetails from './POPOSDetails'


function App() {
  return (
      <div className="App">
        <Title />
        <Outlet/>
        <Footer />
      </div>
  );
}

export default App;
