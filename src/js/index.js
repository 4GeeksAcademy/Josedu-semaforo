
import React, { useState } from "react";
import ReactDOM from "react-dom";
import "../styles/index.css";

function TrafficLight() {
  // Declaramos el estado para almacenar el color actual que debe brillar
  const [color, setColor] = useState("red");

  // Función para manejar el clic en una luz
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

// Renderizamos el componente en el DOM
ReactDOM.render(<TrafficLight />, document.querySelector("#app"));


