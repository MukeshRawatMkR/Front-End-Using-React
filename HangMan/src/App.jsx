import "./App.css";
import Button from "./components/Button/Button";
// import React from "react";

function App() {
  return (
    <div>
      <Button text="Click Me 1"  onClickHandler={() => console.log("Clicked 1!")} styleType="primary" />
      <Button text="Click Me 2" onClickHandler={() => console.log("Clicked 2!")} />
      <Button text="Click Me 3" onClickHandler={() => console.log("Clicked 3!")} styleType="success" />
    </div>
  );
}

export default App;
