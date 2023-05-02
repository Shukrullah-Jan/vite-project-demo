import React, { useEffect, useState } from "react";

import "./styles.scss";
const BatteryStatus = () => {
  const [batteryLevel, setBatteryLevel] = useState(0);
  const [isCharging, setIsCharging] = useState(false);
  const [timeUntilEmpty, setTimeUntilEmpty] = useState(0);
  const [timeUntilFullyCharged, setTimeUntilFullyCharged] = useState(0);


  useEffect(() => {
    window.navigator.getBattery().then((battery) => {
      //! initial checks
      setBatteryLevel((battery.level * 100).toFixed());
      if (battery.charging) setIsCharging(true);

      // get time left until battery is fully charged
      setTimeUntilFullyCharged(battery.chargingTime);

      // get time left until battery is empty
      setTimeUntilEmpty(battery.discharginTime);

      //! events
      // determines whether battery is charging or not
      battery.addEventListener("chargingchange", () => {
        // console.log(battery.charging);
        // check if charging
        if (battery.charging) setIsCharging(true);
        else setIsCharging(false);
      });

      // fired when level of battery changes
      battery.addEventListener("levelchange", () => {
        // console.log((battery.level * 100).toFixed());
        setBatteryLevel((battery.level * 100).toFixed());
      });

      battery.addEventListener("chargingtimechange", () => {
        // console.log(battery.chargingTime);
        // get time left until battery is fully charged
        setTimeUntilFullyCharged(battery.chargingTime);
      });

      battery.addEventListener("dischargintimechange", () => {
        // console.log(battery.dischargingTime);
        // get time left until battery is empty
        setTimeUntilEmpty(battery.discharginTime);
      });
    });

  });

  return (
    <div className="battery-div">
      <h2>Battery status</h2>
      <div className="battery-status">
        <h4>Battery Level is {batteryLevel}%</h4>
        {isCharging ? (
          <h4>Battery is charging</h4>
        ) : (
          <h4>Battery is discharging</h4>
        )}

        <h4>Battery will drain in {timeUntilEmpty} seconds</h4>
        <h4>
          Battery will get fully charged in
          {timeUntilFullyCharged == Infinity
            ? " unknown "
            : timeUntilFullyCharged}{" "}
          seconds
        </h4>
      </div>

      <div className="battery-events"></div>
    </div>
  );
};

export default BatteryStatus;
