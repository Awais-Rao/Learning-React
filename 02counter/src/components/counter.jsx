import { useState } from "react";
import "../App.css";

function Counter() {
  let showToast = (text, bg) => {
    Toastify({
      text: text,
      duration: 3000,
      destination: "https://awaisrao.pk",
      newWindow: true,
      close: true,
      gravity: "bottom", // `top` or `bottom`
      position: "right", // `left`, `center` or `right`
      stopOnFocus: true, // Prevents dismissing of toast on hover
      style: {
        background: bg,
      },
    }).showToast();
  };


  // Hook to handel the value of variable count and update it in DOM
  let [count, setCount] = useState(0);

  // Function to conditionaly increase the value of count
  let increaseValue = () => {
    count < 5 ? setCount((count) => count + 1) : showToast("You have reached the max value.", "linear-gradient(to right, #00b09b, #96c93d)" );
  };

  // Function to conditionaly Decrease the value of count
  let decreaseValue = () => {
    count > 0 ? setCount((count) => count - 1) : showToast("You have reached the min value.", "linear-gradient(to right, #ff5f6d, #ffc371)");
  };

  return (
    <>
      <h1>Counter App</h1>
      <h2>Total counts are: {count}</h2>

      <button onClick={increaseValue}>Add Value</button>
      <button onClick={decreaseValue} style={{ marginLeft: "10px" }}>
        Remove Value
      </button>
    </>
  );
}

export default Counter;


