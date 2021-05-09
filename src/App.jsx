import React from 'react';
import './App.css';
import Landing from './pages/landing.jsx';
import CityOne from './pages/cities/city-one.jsx';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";



function App() {
  return (
    <Router>
    <Switch>
    <Route path="/" exact component= {Landing}/>

     </Switch>
     
    </Router>
  );
}

export default App;