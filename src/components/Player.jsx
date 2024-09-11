import { useState, useRef } from "react";

export default function Player() {
  const [playerName, setPlayerName] = useState("");
  const name = useRef();

  function handleClick() {
    setPlayerName(name.current.value);
    name.current.value = "";
  }

  return (
    <section id="player">
      <h2>Welcome {playerName ? playerName : "unknown entity"}</h2>
      <p>
        <input type="text" ref={name} />
        <button onClick={handleClick}>Set Name</button>
      </p>
    </section>
  );
}
