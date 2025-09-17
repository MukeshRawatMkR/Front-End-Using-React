import TextInputForm from "./TextInputForm";
import { useState } from "react";

//container component
function TextInputFormContainer() {
  const [inputType, setInputType] = useState("text");

  function handleFormSubmit(e) {
    e.preventDefault();
    console.log("Form Submitted!");
  }
  function handleTextInputChange(e) {
    console.log("value changed!");
    console.log(e.target.value);
  }
  function handleShowHideClick() {
    if (inputType === "text") {
      setInputType("password");
    } else {
      setInputType("text");
    }
  }

  //return presenter component
  return (
    <TextInputForm
      inputType={inputType}
      handleShowHideClick={handleShowHideClick}
      handleFormSubmit={handleFormSubmit}
      handleTextInputChange={handleTextInputChange}
    />
  );
}

export default TextInputFormContainer;
