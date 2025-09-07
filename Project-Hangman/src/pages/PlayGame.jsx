import React from "react";
import { Link, useLocation } from "react-router";
import MaskedText from "../components/MaskedText/MaskedText";
import LetterButtons from "../components/LetterButtons/LetterButtons";
function PlayGame() {
  /* 
  const [queryParam] = useSearchParams();
 console.log('query params:',queryParam.get("text"));
 */

  //  let {text}= useParams();

  const {
    state: { selectedWord },
  } = useLocation();

  const [guessedLetters, setGuessedLetters] = React.useState([]);

  function handleLetterClick(letter) {
    setGuessedLetters([...guessedLetters, letter]);
  }

  return (
    <>
      <h1>play Game page {selectedWord}</h1>
      <MaskedText text={selectedWord} guessedLetters={guessedLetters} />
      <div>
        <LetterButtons
          text={selectedWord}
          guessedLetters={guessedLetters}
          onLetterClick={handleLetterClick}
        />
      </div>
      <Link to={"/start"} className="text-blue-400">
        start Game Link
      </Link>
    </>
  );
}

export default PlayGame;
