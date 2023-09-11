import React from "react";

export default function ListGroup(props) {
  const { title, listItems } = props;

  return (
    <>
      <h4>{title}</h4>
      {listItems.length === 0 && <p>No item found</p>}
      <ul className="list-group">
        {listItems.map((item, index) => (
          <li key={index} className="list-group-item">
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}
