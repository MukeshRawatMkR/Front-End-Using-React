import { Link } from "react-router-dom";
function PlayGame() {
    return (
        <div>
            <h1>Play Game Page</h1>
            <Link to="/start" className="text-blue-800">Go to Start Game Page</Link>
        </div>
    );
}

export default PlayGame;