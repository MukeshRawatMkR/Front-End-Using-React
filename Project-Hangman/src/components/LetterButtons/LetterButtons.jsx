import React from "react";
const ALPHABETS = "QWERTYUIOPASDFGHJKLZXCVBNM".split("");

function LetterButtons({ text, guessedLetters, onLetterClick }) {
  const originalLetter = new Set(text.toUpperCase().split(""));
  const guessedLetterSet = new Set(guessedLetters);

  const buttonStyling = (letter) => {
    if (guessedLetterSet.has(letter)) {
        return `${originalLetter.has(letter) ? "bg-green-500" : "bg-red-500"}`;
    } else {
        return "bg-blue-500 hover:bg-blue-700";
    }
};

function handleLetterClick(eventObject){
const characterOfTheLetter= eventObject.target.value;
onLetterClick?.(characterOfTheLetter);

}

  const buttons = ALPHABETS.map((letter) => {
    // const isDisabled = guessedLetters.has(letter);
    return (
      <button
        key={`button-${letter}`}
        value={letter}
        onClick={handleLetterClick}
        disabled={guessedLetterSet.has(letter)}
        className={`h-12 w-12 m-1 text-white rounded-md ${buttonStyling(letter)}`}
      >
        {letter}
      </button>
    );
  });
  return <>{buttons}</>;
}

export default LetterButtons;
