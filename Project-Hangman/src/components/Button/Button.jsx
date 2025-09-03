import React from "react";
import getButtonStyling from "./getButtonStyling";
function Button({ text, onClickHandler, styleType ="primary" }) {

return (
<button onClick={onClickHandler} className={`text-white px-4 py-2 ${getButtonStyling(styleType)}`}>
    {text}
</button>    
);
};

export default Button;