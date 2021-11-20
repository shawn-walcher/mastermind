import React, { useEffect, useState } from "react";
import Confetti from "react-dom-confetti";
import "./css/Win.css";

const Win = () => {
  const [popIt, setPopIt] = useState(false);

  const pop = () => {
    setPopIt(true);
    for (let i = 1; i < 10; i++) {
      setTimeout(() => {
        console.log(i % 2 === 0);
        setPopIt(i % 2 === 0);
      }, i * 1000);
    }
  };

  useEffect(() => {
    pop();
  }, []);

  return (
    <div className="Confet">
      <h1>You Win</h1>
      <h1>Combo = 2 8 3</h1>
      <Confetti
        angle="45"
        spread="360"
        startVelocity="400"
        elementCount="600"
        dragFriction=".12"
        duration="1000"
        stagger="8000"
        width="1000"
        height="1000"
        perspective="500"
        active={popIt}
      />
    </div>
  );
};

export default Win;
