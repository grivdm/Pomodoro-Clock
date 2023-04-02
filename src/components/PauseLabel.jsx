import React from "react";
import { incrementBreak, decrementBreak } from "../slices/TimeSlice";
import { useDispatch, useSelector } from "react-redux";
import formatTime from "./FormatTime";
import { Button, ButtonGroup, InputGroup } from "react-bootstrap";
import { BsFillCaretUpFill, BsFillCaretDownFill } from "react-icons/bs";

const BreakLabel = () => {
  const dispatch = useDispatch();
  const breaking = useSelector((state) => state.time.breaking);
  const isRunning = useSelector((state) => state.time.isRunning);
  const handleIncrement = () => {
    dispatch(incrementBreak());
  };

  const handleDecrement = () => {
    dispatch(decrementBreak());
  };

  return (
    <div
      id="break-label"
      className="m-3"
      style={{
        filter: isRunning ? "blur(2px)" : "none",
        transform: isRunning ? "scale(0.9)" : "none",
        pointerEvents: isRunning ? "none" : "auto",
        transition: "all 0.5s ease-in-out",
      }}
    >
      <h3 className="text-center">Break Length</h3>
      <InputGroup className="mb-3 border border-secondary rounded">
        <Button id="break-decrement" variant="light" onClick={handleDecrement}>
          <BsFillCaretDownFill size={40} />
        </Button>
        <Button variant="light" disabled>
          <InputGroup.Text id="break-length">
            {formatTime(breaking, "m")}
          </InputGroup.Text>
        </Button>
        <Button id="break-increment" variant="light" onClick={handleIncrement}>
          <BsFillCaretUpFill size={40} />
        </Button>
      </InputGroup>
    </div>
  );
};

export default BreakLabel;
