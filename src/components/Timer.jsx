import React, { useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { startTimer, stopTimer, resetTimer, tick } from "../slices/TimeSlice";
import { Button, ButtonGroup } from "react-bootstrap";

const Timer = () => {
  const dispatch = useDispatch();
  const isRunning = useSelector((state) => state.time.isRunning);
  const isBreak = useSelector((state) => state.time.isBreak);
  const session = useSelector((state) => state.time.session);
  const breaking = useSelector((state) => state.time.breaking);
  const audioRef = useRef(null);

  const handleStartStop = () => {
    if (isRunning) {
      dispatch(stopTimer());
    } else {
      dispatch(startTimer());
    }
  };

  const handleReset = () => {
    dispatch(resetTimer());
    audioRef.current.pause();
    audioRef.current.currentTime = 0;
  };

  useEffect(() => {
    let interval = null;
    if (isRunning) {
      interval = setInterval(() => {
        dispatch(tick());
        const timeLeft = isBreak ? breaking : session;
        if (timeLeft < 0.01) {
          console.log("time left", timeLeft);
          audioRef.current.play();
        }
      }, 1000);
    }

    return () => clearInterval(interval);
  }, [isRunning, isBreak, dispatch, session, breaking]);

  return (
    <div className="text-center">
      <ButtonGroup>
        <Button
          variant="primary"
          id="start_stop"
          size="lg"
          className="mr-2"
          onClick={handleStartStop}
        >
          {isRunning ? "Stop" : "Start"}
        </Button>
        <Button variant="danger" size="lg" onClick={handleReset} id="reset">
          Reset
        </Button>
      </ButtonGroup>

      <audio
        id="beep"
        ref={audioRef}
        src="https://raw.githubusercontent.com/freeCodeCamp/cdn/master/build/testable-projects-fcc/audio/BeepSound.wav"
      />
    </div>
  );
};

export default Timer;
