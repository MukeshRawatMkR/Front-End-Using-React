import getStyle from "./getButtonStyling";

function Button({ text, onClickHandler, styleType='primary', type="button" }) {
  return( 
  <button onClick={onClickHandler}
   className={`px-4 py-2 rounded-b-sm ${getStyle(styleType)}`}
   type={type}
   >
    {text}</button>
  );
}


export default Button;


