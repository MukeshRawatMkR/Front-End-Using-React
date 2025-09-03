import React from "react";
import Button from "./components/Button/Button";
import { TextInput } from "./components/TextInput/TextInput";
function App() {
 return (
    <div>
       <Button text="Log in" styleType= "error" onClickHandler={() => console.log("Log in clicked")} />
       <Button text="Sign in" styleType="primary" onClickHandler={() => console.log("Sign in clicked")} />
       <Button text="Sign up" styleType="success" onClickHandler={() => console.log("Sign up clicked")} />
       <Button text="Add to cart" styleType="warning" onClickHandler={() => console.log("Add to cart clicked")} />

        <TextInput
          label="Enter some text"
          placeholder="Enter some text here"
          value={""}
          onChangeHandler={(e) => {console.log(e.target.value)}}
        />

    </div>
 ) 
};

export default App
