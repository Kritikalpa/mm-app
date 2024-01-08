import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const [showMessage, setShowMessage] = useState(false);

  const moveElement = () => {
    var element = document.getElementById("movableEl");

    // Calculate new position (for example, move 100 pixels to the right and 50 pixels down)
    var newX = randomIntFromInterval(-200, 200);
    var newY = randomIntFromInterval(-200, 200);

    // Apply the new position using CSS transform to avoid affecting other elements
    element.style.transform = `translate(${newX}px, ${newY}px)`;
    setCount(count + 1);
  };

  const randomIntFromInterval = (min, max) => {
    // min and max included
    return Math.floor(Math.random() * (max - min + 1) + min);
  };

  return (
    <div className="main-container">
      {!showMessage ? (
        <>
          <div className="main-container-text">
            Will you love to be mine forever? Choose below
          </div>
          <img
            src="https://media2.giphy.com/media/xT0BKBvMYBEq0CcYmY/giphy.gif?cid=ecf05e47uxsyo9n15o511xy6eckhhfp53m4kl4aiwe0l477o&ep=v1_gifs_search&rid=giphy.gif&ct=g"
            width="480"
            height="395"
          />
          {count <= 5 && (
            <div className="main-container-sub-text">
              Try to catch me and I may give you the correct option 😋
            </div>
          )}
          <div style={{ display: "flex", gap: "10px" }}>
            {count > 5 && (
              <button
                className="button-yes"
                onClick={() => {
                  setShowMessage(true);
                }}
              >
                Yes
              </button>
            )}
            <button
              id="movableEl"
              className="button-maybe"
              onMouseEnter={() => {
                moveElement();
              }}
            >
              Maybe
            </button>
          </div>
        </>
      ) : (
        <div className="main-container-text">Yeeyyyy!!! Call Me Now. You have my heart. 💗</div>
      )}
    </div>
  );
}

export default App;
