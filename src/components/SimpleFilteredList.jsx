import { useRef } from "react";

export default function SimpleFilteredList() {
  const refInput = useRef();

  return (
    <>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          console.log("refInput", refInput.current.value);
        }}
      >
        <label htmlFor="listItem">New Item</label>
        <input ref={refInput} id="listItem" type="text" />
        <button type="submit">Add item</button>
      </form>
      <div>My list:</div>
      <ul>
        <li>Item1</li>
      </ul>
    </>
  );
}
