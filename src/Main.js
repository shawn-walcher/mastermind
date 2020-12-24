import React from "react";
import { useHistory } from "react-router-dom";
import Guess from "./Guess";

import { ReactComponent as StatusLight } from "./assets/circle.svg";
import "./css/main.css";

const Main = () => {
  const history = useHistory();

  return (
    <div>
      <div>
        <h3>Legend:</h3>
        <div>
          How many with no match:
          <StatusLight className={`led gray`} />
        </div>
        <div>
          How many with correct number wrong location:
          <StatusLight className={`led white`} />
        </div>
        <div>
          How many with correct number correct location:
          <StatusLight className={`led red`} />
        </div>
        <br />
      </div>
      <Guess />
      <Guess />
      <Guess />
      <Guess />
      <Guess />
      <br />
      <form>
        <button type="submit" onClick={(e)=> history.push('/')}>Restart</button>
      </form>
    </div>
  );
};

export default Main;
