import React from "react";
import Display from "./Display";
import Timer from "./Timer";
import { useSelector } from "react-redux";
import { Card } from "react-bootstrap";
const TimerBlock = () => {
  const isRunning = useSelector((state) => state.time.isRunning);

  return (
    <Card className="
    d-flex 
    flex-column 
    justify-content-center 
    align-items-center 
    m-2 p-3
    border border-seconsary
    rounded
    "
  
    style={{
      transform: isRunning ? "scale(1.15)" : "none",
        transition: "all 0.5s ease-in-out",
        zIndex: isRunning ? "1" : "0",
    }}
    >
      <Display />
      <Timer />
    </Card>
  );
};

export default TimerBlock;
