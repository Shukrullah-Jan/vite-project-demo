import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Header from "./components/Header";
import BatteryStatus from "./components/BatteryStatus";
import FileApi from "./components/FileApi";
import NotificationApi from "./components/NotificationApi";
import VibrationApi from "./components/VibrationApi";
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header />
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
      <p className="read-the-docs">I would love to Update my site easily</p>

      <div className="container">
        <BatteryStatus />
        <VibrationApi />
        <NotificationApi />
        <FileApi />
      </div>
    </>
  );
}

export default App;
