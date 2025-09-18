import { Link } from "react-router-dom";
import TextInputFormContainer from "../components/TextInputForm/TextInputFormContainer";

function StartGame(){
return(
    <>
    <h1>Start Game Page</h1>
    <Link to="/play" className="text-blue-800">Go to Play Game</Link>
    <TextInputFormContainer />
  

    </>
);
};
export default StartGame;
