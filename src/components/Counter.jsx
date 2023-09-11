import { useState } from "react";

export default function Counter(props) {
  let [nb, setNb] = useState(0);

  return (
    <>
      <h1>Counter nb {nb}</h1>
      <button onClick={() => setNb(nb + 1)}>Increment</button>
    </>
  );
}
