import React, { useState } from "react";

const Water = () => {
  const [temperature, setTemperature] = useState(0);

  const getTemperatureStatus = (temperature) => {
    if (temperature <= 0) return { state: "Solid", color: "green" };
    else if (temperature >= 100) return { state: "Gas", color: "red" };
    else return { state: "Liquid", color: "aqua" };
  };
  let stateOfWater = getTemperatureStatus(temperature);

  const handleToggle = (e) => {
    setTemperature(e.target.value);
    stateOfWater = getTemperatureStatus(temperature);
  };
  const { state, color } = stateOfWater;
  return (
    <div className="water-comp">
      <input
        value={temperature}
        max="100"
        type="range"
        onChange={handleToggle}
      />
      <h2 style={{ color: "#fff" }}>
        At {temperature} degree C, water exist as{" "}
        <span style={{ color }}> {state}</span>
      </h2>
    </div>
  );
};

export default Water;
