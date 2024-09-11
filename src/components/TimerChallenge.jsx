import { useRef, useState } from "react";
import ResultsModal from "./ResultsModal";

function TimerChallenge({ title, targetTime }) {
  //   const [timerExpired, setTimerExpired] = useState(false);
  //   const [timerStarted, setTimerStarted] = useState(false);
  const [timeRemaining, seTimeRemaining] = useState(targetTime * 1000);

  const timerIsActive = timeRemaining > 0 && timeRemaining < targetTime * 1000;

  const timer = useRef();

  const dialog = useRef();

  if (timeRemaining <= 0) {
    clearInterval(timer.current);
    dialog.current.open();
  }

  function handleReset() {
    seTimeRemaining(targetTime * 1000);
  }

  function handleStart() {
    timer.current = setInterval(() => {
      seTimeRemaining((prevtimeRemaining) => prevtimeRemaining - 10);
    }, 10);
    // setTimerStarted(true);
  }

  function handleStop() {
    dialog.current.pen();
    clearInterval(timer.current);
    // setTimerStarted(false);
  }

  return (
    <>
      <ResultsModal
        ref={dialog}
        targetTime={targetTime}
        remaininigTime={timeRemaining}
        onReset={handleReset}
      />
      <section className="challenge">
        <h1>{title}</h1>
        {/* {timerExpired && <p>You Lost</p>} */}
        <p className="challenge-time">
          {targetTime} second {targetTime > 1 ? "s" : ""}
        </p>
        <p>
          <button onClick={timerIsActive ? handleStop : handleStart}>
            {timerIsActive ? "Stop" : "Start"} Challenge
          </button>
        </p>
        <p className={timerIsActive ? "active" : undefined}>
          {timerIsActive ? "Time is running" : "Timer inactive"}
        </p>
      </section>
    </>
  );
}

export default TimerChallenge;

// import { useRef, useState } from "react";
// import ResultsModal from "./ResultsModal";

// function TimerChallenge({ title, targetTime }) {
//   const [timerExpired, setTimerExpired] = useState(false);
//   const [timerStarted, setTimerStarted] = useState(false);
//   const timer = useRef();
//   const dialog = useRef();

//   function handleStart() {
//     timer.current = setTimeout(() => {
//       setTimerExpired(true);
//       dialog.current.show()
//     }, targetTime * 1000);
//     setTimerStarted(true);
//   }

//   function handleStop() {
//     clearTimeout(timer.current);
//   }

//   return (
//     <>
//       <ResultsModal ref={dialog} targetTime={targetTime} result="lost" />
//       <section className="challenge">
//         <h1>{title}</h1>
//         {/* {timerExpired && <p>You Lost</p>} */}
//         <p className="challenge-time">
//           {targetTime} second {targetTime > 1 ? "s" : ""}
//         </p>
//         <p>
//           <button onClick={timerStarted ? handleStop : handleStart}>
//             {timerStarted ? "Stop" : "Start"} Challenge
//           </button>
//         </p>
//         <p className={timerStarted ? "active" : undefined}>
//           {timerStarted ? "Time is running" : "Timer inactive"}
//         </p>
//       </section>
//     </>
//   );
// }

// export default TimerChallenge;
