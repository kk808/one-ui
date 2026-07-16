import { Button } from "./Button";
import React from "react";
import { Heading } from "../Typography";
export default function Playground() {
  const [counter, setCounter] = React.useState(0);

  
  return (
    <div className="flex gap-3 flex-col items-center">
      <Heading level={2}>Counter</Heading>

      <div className="flex gap-3 items-center">
        <Button onClick={() => setCounter(counter - 1)} size="lg" disabled={counter === 0}>
          -
        </Button>

        <span style={{ fontSize: "1.8rem" }}>{counter}</span>
        
        <Button onClick={() => setCounter(counter + 1)} size="lg">
          +
        </Button>
      </div>
    </div>
  );
}
