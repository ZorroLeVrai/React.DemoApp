import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import Component1 from "./Component1";
import Component2 from "./Component2";
import Component3 from "./Component3";
import RouterLayout from "./RouterLayout";
import "./routerStyle.css";
import HomeRoute from "./HomeRoute";

export default function SeparateLinkRouter() {
  return (
    <>
      <Routes>
        <Route element={<RouterLayout />}>
          <Route path="Link1" element={<Component1 />} />
          <Route path="Link2" element={<Component2 />} />
          <Route path="Link3" element={<Component3 />} />
          <Route path="*" element={<div>No Component</div>} />
        </Route>
      </Routes>
    </>
  );
}
