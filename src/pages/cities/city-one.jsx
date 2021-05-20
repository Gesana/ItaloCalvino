import React from "react";
import $ from "jquery";

function CityOne() {
  const pos = { x: 0, y: 0 };

  const saveCursorPosition = function (x, y) {
    pos.x = (x / window.innerWidth).toFixed(2);
    pos.y = (y / window.innerHeight).toFixed(2);
    document.documentElement.style.setProperty("--x", pos.x);
    document.documentElement.style.setProperty("--y", pos.y);
  };

  document.addEventListener("mousemove", (e) => {
    saveCursorPosition(e.clientX, e.clientY);
  });
  return (
    <div className="city-one" id="ship">
      <img src={"../../public/images/DespinaShip.png"} alt="moving image" />
    </div>
  );
}

export default CityOne;
