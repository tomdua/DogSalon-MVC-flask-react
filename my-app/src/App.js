import React, {Component} from 'react';
import './App.css';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Login from './components/User/Login';
import NavBar from './components/Navbar/Navbar';
import Register from './components/User/Register';
import Profile from './components/User/Profile';
import HomePage from './components/HomePage';
import DogSalon from './components/DogSalon/DogSalon';
import CustomerList from './components/DogSalon/CustomerList';
import dogBakground from './assets/images/background.jpg'


class App extends Component {
  render(){
  return (
    <div  styles={{backgroundImage:`url(${dogBakground})`}}>
    <Router>
      <div className="App">
        <NavBar></NavBar>
        <Route exact path="/" component={HomePage} />
      <div className="container">
      <Route exact path="/register" component={Register} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/profile" component={Profile} />
      <Route exact path="/dogsalon" component={DogSalon} />
      <Route exact path="/customerlist" component={CustomerList} />
      </div>
      </div>
    </Router>
    </div>

  );
}
}

export default App;
