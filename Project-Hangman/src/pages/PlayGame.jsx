import React from "react";
import { Link, useLocation } from "react-router";
import MaskedText from "../components/MaskedText/MaskedText";
function PlayGame() {
  /* 
  const [queryParam] = useSearchParams();
 console.log('query params:',queryParam.get("text"));
 */

  //  let {text}= useParams();

  const {
    state: { selectedWord },
  } = useLocation();

  return (
    <>
      <h1>play Game page {selectedWord}</h1>
      <MaskedText text={selectedWord} guessedLetters={["H"]} />
      <Link to={"/start"} className="text-blue-400">
        start Game Link
      </Link>
    </>
  );
}

export default PlayGame;
