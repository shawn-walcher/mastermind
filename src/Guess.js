import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { ReactComponent as StatusLight } from './assets/circle.svg';
import './css/main.css';

const Guess = () => {
  const history = useHistory();
  let combo = ["2", "8", "3"];
  const [guess, setGuess] = useState(["0", "0", "0"]);
  const [led1, setLed1] = useState(["gray", "gray", "gray"]);
  const [shouldDisable, setShouldDisable] = useState(false);

  const adjustLights = (color) => {
    let led = led1
    if (led1[0] === "gray") {
      led[0] = color
      setLed1(led);
      return;
    }
    if (led1[1] === "gray") {
      led[1] = color
      setLed1(led)
      return
    }
    if (led1[2] === "gray") {
      led[2] = color
      setLed1(led)
      return
    }
  }

  const submitted = () => {
    setShouldDisable(true);
    if (guess[0] === combo[0] && guess[1] === combo[1] && guess[2] === combo[2]) {
      setLed1(["red","red","red"]);
      history.push('/win');
      return;
    }
    setLed1(["gray","gray","gray"]);
    guess.forEach((v, i) => {
      if (v >= 0 && combo[i] === v) {
        combo[i] = "-1";
        adjustLights("red");
      }
    });
      guess.forEach((v, i) => {
        if (v >= 0 && combo.includes(v)) {
        combo[combo.indexOf(v)] = "-1";
        adjustLights("white")
      }
    })
  }

  return (
    <div>
        <label for="number1">{guess[0]}</label>
        <input
          type="range"
          min="0"
          max="9"
          name="number1"
          value={guess[0]}
          disabled={shouldDisable}
          onChange={(e) => setGuess([e.target.value, guess[1], guess[2]])}
        />
        <label for="number2">{guess[1]}</label>
        <input
          type="range"
          min="0"
          max="9"
          name="number2"
          value={guess[1]}
          disabled={shouldDisable}
          onChange={(e) => setGuess([guess[0], e.target.value, guess[2]])}
        />
        <label for="number3">{guess[2]}</label>
        <input
          type="range"
          min="0"
          max="9"
          name="number3"
          value={guess[2]}
          disabled={shouldDisable}
          onChange={(e) => setGuess([guess[0], guess[1], e.target.value])}
        />
        <button className="button" type="submit" disabled={shouldDisable} onClick={(e)=>submitted(e)}>Guess</button>

        <StatusLight className={`led ${led1[2]}`}/>
        <StatusLight className={`led ${led1[1]}`}/>
        <StatusLight className={`led ${led1[0]}`}/>
    </div>
  );
};

export default Guess;
