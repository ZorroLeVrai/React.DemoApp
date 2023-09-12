export default function SimpleFilteredList() {
  return (
    <>
      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <label htmlFor="listItem">New Item</label>
        <input id="listItem" type="text" />
        <button type="submit">Add item</button>
      </form>
      <div>My list:</div>
      <ul>
        <li>Item1</li>
      </ul>
    </>
  );
}
