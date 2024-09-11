import Player from './components/Player.jsx';
import TimerChallenge from './components/TimerChallenge.jsx';

function App() {
  return (
    <>
      <Player />
      <div id="challenges">
        <TimerChallenge title={"easy"} targetTime={1}/>
        <TimerChallenge title={"not easy"} targetTime={5}/>
        <TimerChallenge title={"getting tough"} targetTime={10}/>
        <TimerChallenge title={"pros only"} targetTime={15}/>
      </div>
    </>
  );
}

export default App;


// import React, { useState, useRef } from "react";

// function Timer() {
//   const [time, setTime] = useState(0);
//   const [isRunning, setIsRunning] = useState(false);
//   const intervalRef = useRef(null);

//   const startTimer = () => {
//     setIsRunning(true);
//     intervalRef.current = setInterval(() => {
//       setTime((prevTime) => prevTime + 1);
//     }, 1000);
//   };

//   const stopTimer = () => {
//     setIsRunning(false);
//     clearInterval(intervalRef.current);
//   };

//   const resetTimer = () => {
//     setTime(0);
//     setIsRunning(false);
//     clearInterval(intervalRef.current);
//   };

//   return (
//     <div>
//       <h1>Timer: {time}</h1>
//       {!isRunning ? (
//         <button onClick={startTimer}>Start</button>
//       ) : (
//         <button onClick={stopTimer}>Stop</button>
//       )}
//       <button onClick={resetTimer}>Reset</button>
//     </div>
//   );
// }

// export default Timer;
