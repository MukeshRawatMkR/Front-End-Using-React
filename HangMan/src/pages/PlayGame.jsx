import { Link, useLocation} from "react-router-dom";
function PlayGame() {

    const {state: {guessedWord}} = useLocation();
// console.log(state);
    return (
        <div>
            <h1>Play Game Page{guessedWord}</h1>
            <Link to="/start" className="text-blue-800">Go to Start Game Page</Link>
        </div>
    );
}

export default PlayGame;