
import { HashRouter as Router, Route } from 'react-router-dom';


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
    <Router>
      <div className="App">
        <Title />
        <Route exact path="/" component={POPOSList}/>
        <Route path="/about" component={About} />
        <Route path="/details/:id" component={POPOSDetails} />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
