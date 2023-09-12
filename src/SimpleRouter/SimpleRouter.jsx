import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import Component1 from "./Component1";
import Component2 from "./Component2";
import Component3 from "./Component3";
import "./routerStyle.css";

export default function SimpleRouter() {
  return (
    <>
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
        {/* <ul>
          <li>
            <Link to="/Link1">Link1</Link>
          </li>
          <li>
            <Link to="/Link2">Link2</Link>
          </li>
          <li>
            <Link to="/Link3">Link3</Link>
          </li>
        </ul> */}
      </nav>
      <Routes>
        <Route path="/" element={<div>Main Page</div>} />
        <Route path="/Link1" element={<Component1 />} />
        <Route path="/Link2" element={<Component2 />} />
        <Route path="/Link3" element={<Component3 />} />
        <Route path="*" element={<div>No Component</div>} />
      </Routes>
    </>
  );
}
