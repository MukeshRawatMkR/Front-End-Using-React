import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import MaskedText from "../components/MaskedText/MaskedText";
import LetterButtons from "../components/LetterButtons/LetterButtons";
import HangMan from "../components/HangMan/HangMan";
function PlayGame() {
  const {
    state: { guessedWord },
  } = useLocation();
  // console.log(state);

  const[guessedLetters, setGuessedLetters] = useState([]);
  const[step, setSteup]=useState(0);

  function handleLetterClick(letter){
    if(guessedWord.toUpperCase().includes(letter)){
      console.log("correct");
    }
    else{
      console.log("incorrect");
      setSteup(step+1);
    }


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
<div>
  <HangMan step={step}/>
</div>
      <Link to="/start" className="text-blue-800">
        Go to Start Game Page
      </Link>
    </div>
  );
}

export default PlayGame;
//todo -> divide the file into presenter and container pattern.