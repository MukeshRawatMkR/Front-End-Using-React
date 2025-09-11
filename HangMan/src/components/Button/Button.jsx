import getStyle from "./getButtonStyling";

function Button({ text, onClickHandler, styleType='default' }) {
  return( 
  <button onClick={onClickHandler} className={`px-4 py-2 rounded-b-sm ${getStyle(styleType)}`}>{text}</button>
  );
}


export default Button;


