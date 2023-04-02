import React from "react";
import { incrementSession, decrementSession } from "../slices/TimeSlice";
import { useSelector, useDispatch } from "react-redux";
import formatTime from "./FormatTime";
import { BsFillCaretUpFill, BsFillCaretDownFill } from "react-icons/bs";
import { Button, InputGroup, ButtonGroup } from "react-bootstrap";

const SessionLabel = () => {
  const sessionTime = useSelector((state) => state.time.sessionTime);
  const dispatch = useDispatch();
  const isRunning = useSelector((state) => state.time.isRunning);

  return (
    <div
      id="session-label"
      className="m-3"
      style={{
        filter: isRunning ? "blur(2px)" : "none",
        transform: isRunning ? "scale(0.9)" : "none",
        pointerEvents: isRunning ? "none" : "auto",
        transition: "all 0.5s ease-in-out",
      }}
    >
      <h3 className="text-center">Session Length</h3>
      <InputGroup className="mb-3 border border-secondary rounded"
      >
        
        <Button
          id="session-decrement"
          variant="light"
          onClick={() => dispatch(decrementSession())}
        >
          <BsFillCaretDownFill size={40} />
        </Button>
        <Button variant="light" disabled>
          <InputGroup.Text id="session-length">
            {formatTime(sessionTime, "m")}
          </InputGroup.Text>
        </Button>
        
        <Button
          id="session-increment"
          variant="light"
          onClick={() => dispatch(incrementSession())}
        >
          <BsFillCaretUpFill size={40} />
        </Button>
      </InputGroup>
    </div>
  );
};

export default SessionLabel;
