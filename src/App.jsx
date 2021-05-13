import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Landing from "./pages/landing.jsx";
import CityOne from "./pages/cities/city-one.jsx";
import CityTwo from "./pages/cities/city-two.jsx";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Landing} />
        <Route path="/city-one" exact component={CityOne} />
        <Route path="/city-two" exact component={CityTwo} />
      </Switch>
    </Router>
  );
}

export default App;
