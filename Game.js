import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Game = () => {
  const [balloonSize, setBalloonSize] = useState(50); // Initial size of the balloon
  const [isPopped, setIsPopped] = useState(false); // State to track if the balloon is popped
  const [score, setScore] = useState(0); // Bonus points

  const pumpBalloon = () => {
    if (!isPopped) {
      setBalloonSize((prevSize) => prevSize + 10); // Increase the size of the balloon
      if (balloonSize >= 150) {
        setIsPopped(true); // Balloon pops if it's pumped too much
        setScore((prevScore) => prevScore + 100); // Increase score on popping
      }
    }
  };

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.5 }}>
      <h2>Balloon Pumping Game</h2>
      <div style={{ width: '300px', height: '300px', border: '1px solid black', position: 'relative' }}>
        {!isPopped ? (
          <div
            style={{
              width: `${balloonSize}px`,
              height: `${balloonSize}px`,
              borderRadius: '50%',
              backgroundColor: 'red',
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              cursor: 'pointer',
            }}
            onClick={pumpBalloon}
          ></div>
        ) : (
          <p>The balloon popped! Bonus points: {score}</p>
        )}
      </div>
    </motion.div>
  );
};

export default Game;
