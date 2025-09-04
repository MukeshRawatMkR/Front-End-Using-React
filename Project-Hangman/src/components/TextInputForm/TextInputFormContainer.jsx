import React,{useState} from "react";
import TextInputForm from "./TextInputForm";
import { useNavigate } from "react-router";


function TextInputFormContainer() {
// let inputType = "password";
const [inputType, setInputType]=useState("password");
const[value, setValue]=useState("");

const navigate = useNavigate();//returns navigator function.

  function handleFormSubmit(event) {
    event.preventDefault(); //to prevent the default behaviour of submit button which is to reload the page.
    console.log("Form Submitted: ", value);
  if(value){
    navigate('/play');//or we can do it in setTimeout().
  }
  }

  function handleTextInputChange(event) {
    console.log("Text Input Changed");
    console.log(event.target.value);
    setValue(event.target.value);
  }

  function handleShowHideClick(){
console.log("clicked show/hide button");
  if(inputType==="password")setInputType("text");
  else setInputType("password");

}

//calling presentation layer:
  return( <TextInputForm 
  inputType={inputType}
    handleFormSubmit={handleFormSubmit}
    handleTextInputChange={handleTextInputChange}
    handleShowHideClick={handleShowHideClick}
    />
  );
}
export default TextInputFormContainer;
