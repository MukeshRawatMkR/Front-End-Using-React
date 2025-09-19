import { getMaskedString } from "./MaskingUtility";

function MaskedText({text, guessedLetters}){
const maskedString = getMaskedString(text, guessedLetters);
    return(
        <>
        {maskedString.map((char, ind)=>(
            <span key={ind}>
                {char}
            </span>
        ))}
        </>

    );
}

export default MaskedText;
