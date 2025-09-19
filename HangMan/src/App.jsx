import "./App.css";
import { Route, Routes } from "react-router-dom";
import StartGame from "./pages/StartGame";
import PlayGame from "./pages/PlayGame";
import TextInputFormContainer from "./components/TextInputForm/TextInputFormContainer";
function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<h1>Home Page</h1>} />
        <Route path="/start" element={<StartGame />} />
        <Route path="/play" element={<PlayGame />} />
      </Routes>
    </div>
  );
}

export default App;

//Todo
//congrations if word is correct
//bummed if lost. 