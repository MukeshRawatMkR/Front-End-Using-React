import React from "react";
import TextInputFormContainer from "./components/TextInputForm/TextInputFormContainer";
import { Route, Routes } from "react-router-dom";
import StartGame from "./pages/StartGame";
import PlayGame from "./pages/PlayGame";

function App() {
  return (

      <Routes>
        <Route path="/start" element={<StartGame/>}/>  
        <Route path="/play" element={<PlayGame/>}/>  
     <Route path="/" element={<h1>Home</h1>}/>
      </Routes>

    );
}

export default App;
