import React from "react";
import { Link } from "react-router-dom";
function Landing() {
  document.getElementById("demo").innerHTML = "Hello";
  return (
    <div className="container">
      <p id="demo"></p>
      <Link to="/city-one">City One</Link>
      <Link to="/city-two">City Two</Link>
    </div>
  );
}

export default Landing;
