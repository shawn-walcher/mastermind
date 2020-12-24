import React from "react";
import { useHistory } from "react-router-dom";
import Guess from "./Guess";

import { ReactComponent as StatusLight } from "./assets/circle.svg";
import "./css/main.css";

const Main = () => {
  const history = useHistory();

  return (
    <div className="main">
      <div>
        <h3>Legend:</h3>
        <div className="legend">
          The 3 lights don't indicate location, just how many.
          <div>
            No match:
            <StatusLight className={`led gray`} />
            Correct number in wrong location:
            <StatusLight className={`led white`} />
            Correct:
            <StatusLight className={`led red`} />
          </div>
        </div>
        <br />
      </div>
      <hr />
      <Guess />
      <Guess />
      <Guess />
      <Guess />
      <Guess />
      <Guess />
      <Guess />
      <Guess />
      <Guess />
      <Guess />
      <br />
      <form>
        <button type="submit" onClick={(e) => history.push("/")}>
          Restart
        </button>
      </form>
    </div>
  );
};

export default Main;
