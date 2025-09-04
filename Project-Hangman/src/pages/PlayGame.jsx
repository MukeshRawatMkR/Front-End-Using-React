import React from "react";
import { Link } from "react-router";
function PlayGame() {
  return (
    <>
      <h1>play Game page</h1>
      <Link to={"/start"} className="text-blue-400">
        start Game Link
      </Link>
    </>
  );
}

export default PlayGame;
