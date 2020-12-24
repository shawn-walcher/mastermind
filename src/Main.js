import React from "react";
import { ReactComponent as StatusLight } from './circle.svg';
import Guess from './Guess';
import './main.css';

const Main = () => {

  return (
    <div>
      <div>
        <h3>Legend:</h3>
        <div>
        How many with no match: 
        <StatusLight className={`led gray`}/>
        </div>
        <div>
        How many with correct number wrong location: 
        <StatusLight className={`led white`}/>
        </div>
        <div>
        How many with correct number correct location:
        <StatusLight className={`led red`}/>
        </div>
        <br />
        <br />
        <br />
      </div>
      <Guess />
      <Guess />
      <Guess />
      <Guess />
      <Guess />
      </div>
  );
};

export default Main;
