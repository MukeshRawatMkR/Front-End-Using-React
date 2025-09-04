import React from "react";
import getButtonStyling from "./getButtonStyling";
function Button({ text, onClickHandler, styleType ="primary", type="button"}) {

return (
<button onClick={onClickHandler}
type={type}
className={`text-white px-4 py-2 ${getButtonStyling(styleType)}`}>
    {text}
</button>    
);
};

export default Button;