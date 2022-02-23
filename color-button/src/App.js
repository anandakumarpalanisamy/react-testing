import { useState } from "react";
import "./App.css";

function App() {
  const [buttonColor, setButtonColor] = useState("red");
  const newButtonColor = buttonColor === "red" ? "blue" : "red";
  const [checked, setChecked] = useState(false);

  return (
    <div>
      <button
        style={{ backgroundColor: checked ? "gray" : buttonColor }}
        disabled={checked}
        onClick={() => setButtonColor(newButtonColor)}
      >
        Change to {newButtonColor}
      </button>
      <input
        type="checkbox"
        id="disable-button-checkbox"
        defaultChecked={checked}
        aria-checked={checked}
        onChange={() => setChecked(!checked)}
      />
      <label htmlFor="disable-button-checkbox">Disable button</label>
    </div>
  );
}

export default App;
