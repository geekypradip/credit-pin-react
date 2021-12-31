import { useState } from "react";
import { Pin } from "./Pin";
import "./styles.css";

export default function App() {
  const [text, setText] = useState("");
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <Pin length={4} perBox={2} onChange={(value) => setText(value)} />
      <h3>{text}</h3>
    </div>
  );
}
