import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import MaskedText from "../components/MaskedText/MaskedText";
import LetterButtons from "../components/LetterButtons/LetterButtons";
function PlayGame() {
  const {
    state: { guessedWord },
  } = useLocation();
  // console.log(state);

  const[guessedLetters, setGuessedLetters] = useState([]);
  function handleLetterClick(letter){
    setGuessedLetters([...guessedLetters, letter]);//*
}

  return (
    <div>
      <h1>Play Game Page: {guessedWord.toUpperCase()}</h1>
      <MaskedText text={guessedWord} guessedLetters={guessedLetters} />

<div>
      <LetterButtons
        text={guessedWord}
        guessedLetters={guessedLetters}
        onLetterClick={handleLetterClick}
      />
</div>
      <Link to="/start" className="text-blue-800">
        Go to Start Game Page
      </Link>
    </div>
  );
}

export default PlayGame;
