import React from "react";
import TimerBlock from "./components/TimerBlock";
import PauseLabel from "./components/PauseLabel";
import SessionLabel from "./components/SessionLabel";

const MainPage = () => {
  return (
    <div
      className="
    d-flex flex-column justify-content-center align-items-center
    h-100 w-100  
    "
    >
      <div className="">
        <h1 className="text-center d-none d-lg-block m-3">
          Pomodoro Clock 🍅
        </h1>
      </div>

      <div
        className="  d-flex justify-content-center align-items-center mb-5 
    flex-column
    flex-lg-row"
      >
        <SessionLabel />
        <TimerBlock />
        <PauseLabel />
      </div>
    </div>
  );
};

export default MainPage;
