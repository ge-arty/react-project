import "./App.css";
import "./reset.css";
import RateWindow from "./RateWindow";
import Thanks from "./ThanksWindow";
import { useState } from "react";

function App() {
  const [clicked, setClicked] = useState(false);
  const [rate, setRate] = useState(null);
  function click(element) {
    setRate(element);
  }
  function changeWindow() {
    if (rate != null) {
      setClicked(true);
    } else {
      alert("Please put your rate!");
    }
  }

  return (
    <div className="container">
      <div className="window">
        {clicked ? (
          <Thanks rate={rate} />
        ) : (
          <RateWindow rate={rate} click={click} change={() => changeWindow()} />
        )}
      </div>
    </div>
  );
}

export default App;
