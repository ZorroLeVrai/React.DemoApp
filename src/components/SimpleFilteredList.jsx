import { useRef, useState } from "react";

export default function SimpleFilteredList() {
  const [myList, setMyList] = useState([]);
  const refInput = useRef();

  return (
    <>
      <form
        onSubmit={(e) => {
          const currentValue = refInput.current.value;
          e.preventDefault();
          console.log("refInput", currentValue);
          setMyList([...myList, currentValue]);
          refInput.current.value = "";
        }}
      >
        <label htmlFor="listItem">New Item</label>
        <input ref={refInput} id="listItem" type="text" />
        <button type="submit">Add item</button>
      </form>
      <div>My list:</div>
      <ul>
        {myList.map((it, index) => (
          <li key={index}>{it}</li>
        ))}
      </ul>
    </>
  );
}
