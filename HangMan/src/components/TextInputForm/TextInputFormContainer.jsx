import TextInputForm from "./TextInputForm";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

//container component
function TextInputFormContainer() {
  //usestate hook to display show/hide content.
  const [inputType, setInputType] = useState("text");

  //use state hook to save the value of the text input
  const [value, setValue] = useState("");

  //useNavigate hook to navigate to another route programmatically i.e, without using Link component and have some logic before redirection.
  const navigate = useNavigate();

  function handleFormSubmit(e) {
    e.preventDefault();
    console.log("Form Submitted and the value is:", value);
    if (value.trim()) {
      navigate("/play", {state: {guessedWord: value}});
    }
  }

  function handleTextInputChange(e) {
    console.log("value changed!");
    console.log(e.target.value);
    setValue(e.target.value);
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
