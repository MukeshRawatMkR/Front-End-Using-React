import { Link, useLocation} from "react-router-dom";
import MaskedText from "../components/MaskedText/MasketText";
function PlayGame() {

    const {state: {guessedWord}} = useLocation();
// console.log(state);
    return (
        <div>
            <h1>Play Game Page: {guessedWord.toUpperCase()}</h1>
            <MaskedText
                text={guessedWord}
                guessedLetters={['A','e']}
            />
            <Link to="/start" className="text-blue-800">Go to Start Game Page</Link>
        </div>
    );
}

export default PlayGame;