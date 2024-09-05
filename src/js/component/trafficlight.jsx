import React, { useState } from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
function TrafficLight() {
  
	const [color, setColor] = useState("red");
  
	
	const clickOnColor = (selectedColor) => {
	  setColor(selectedColor);
	};
  
	return (
	  <div className="traffic-light">
		<div
		  className={`light red ${color === "red" ? "selected" : ""}`}
		  onClick={() => clickOnColor("red")}
		></div>
		<div
		  className={`light yellow ${color === "yellow" ? "selected" : ""}`}
		  onClick={() => clickOnColor("yellow")}
		></div>
		<div
		  className={`light green ${color === "green" ? "selected" : ""}`}
		  onClick={() => clickOnColor("green")}
		></div>
	  </div>
	);
  }
  

export default TrafficLight;
