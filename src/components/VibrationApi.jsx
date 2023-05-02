import React, { useEffect } from "react";

import "./styles.scss";
const VibrationApi = () => {
  useEffect(() => {
    if ("vibrate" in window.navigator) {
      // ! user needs to interact with the page only then vibrate works
      //   window.navigator.vibrate(100);
      //  ? we can use the following syntax too for vibrating the device
      // window.navigator.vibrate([100])
      // window.navigator.vibrate([300, 200, 300])
    } else {
      console.log("vibrate is not supported by this device");
    }
  });
  return (
    <div className="vibration-div">
      <h2>Vibration</h2>
      <button
        onClick={() => {
          window.navigator.vibrate(300);
        }}
      >
        Click for short vibration
      </button>
      <button
        onClick={() => {
          window.navigator.vibrate([300, 200, 300]);
        }}
      >
        Click for long vibration
      </button>
    </div>
  );
};

export default VibrationApi;
