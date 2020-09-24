import React, {Component} from 'react';
import './App.css';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Login from './components/Login';
import NavBar from './components/Navbar';
import Register from './components/Register';
import Profile from './components/Profile';
import HomePage from './components/HomePage';
import DogSalon from './components/DogSalon';




class App extends Component {
  render(){
  return (
    <Router>
      <div className="App">
        <NavBar></NavBar>
        <Route exact path="/" component={HomePage} />
      <div className="container">
      <Route exact path="/register" component={Register} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/profile" component={Profile} />
      <Route exact path="/dogsalon" component={DogSalon} />
      </div>
      </div>
    </Router>

  );
}
}

export default App;
