import React from "react";
import { useOutletContext } from "react-router-dom";

export default function Component1() {
  const message = useOutletContext();

  return <div>Component1 message: {message}</div>;
}
