
import { React, forwardRef, useRef, useImperativeHandle } from "react";
import { createPortal } from "react-dom";

const ResultsModal = forwardRef(function ResultsModal(
  { targetTime, remaininigTime, onReset },
  ref
) {
  const dialog = useRef();
  const userLost = remaininigTime <= 0;
  const formattedRemainingTime = (remaininigTime / 1000).toFixed(2);
  const score = Math.round((1 - remaininigTime / (targetTime * 1000)) * 100);

  useImperativeHandle(ref, () => {
    return {
      pen() {
        dialog.current.showModal();
      },
    };
  });
  return createPortal(
    <dialog ref={dialog} className="result-modal">
      {userLost && <h1>You Lost</h1>}
      {!userLost && <h1>Your score: {score} </h1>}
      <p>
        The target time was <strong>{targetTime} seconds.</strong>
      </p>
      <p>
        You stopped the timer with{" "}
        <strong>{formattedRemainingTime} time left</strong>
      </p>
      <form method="dialog" onSubmit={onReset}>
        <button>close</button>
      </form>
    </dialog>,
    document.getElementById("modal")
  );
});

export default ResultsModal;
