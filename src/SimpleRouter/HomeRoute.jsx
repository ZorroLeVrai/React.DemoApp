import React from "react";
import { Link } from "react-router-dom";

export default function HomeRoute() {
  return (
    <nav>
      <span>
        <Link to="/">Home</Link>
      </span>
      <span>
        <Link to="/Link1">Link1</Link>
      </span>
      <span>
        <Link to="/Link2">Link2</Link>
      </span>
      <span>
        <Link to="/Link3">Link3</Link>
      </span>
    </nav>
  );
}
