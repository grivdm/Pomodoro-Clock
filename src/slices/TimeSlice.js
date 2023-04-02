import { createSlice } from "@reduxjs/toolkit";
import moment from "moment";

const defaultSession = 25;
const defaultBreak = 5;

const initialState = {
  session: defaultSession,
  breaking: defaultBreak,
  isRunning: false,
  isBreak: false,
  sessionTime: defaultSession,
  breakTime: defaultBreak,
};

export const timeSlice = createSlice({
  name: "time",
  initialState,
  reducers: {
    setSession: (state, action) => {
      state.session = action.payload;
    },
    setBreak: (state, action) => {
      state.breaking = action.payload;
    },
    tick: (state) => {
      if (state.isBreak) {
        const breakDuration = moment.duration(state.breaking, "minutes");
        if (breakDuration.asSeconds() >= 1) {
          state.breaking = breakDuration.subtract(1, "seconds").asMinutes();
        } else {
          state.isBreak = false;
          state.breaking = state.breakTime;

        }
      } else {
        const sessionDuration = moment.duration(state.session, "minutes");
        if (sessionDuration.asSeconds() >= 1) {
          state.session = sessionDuration.subtract(1, "seconds").asMinutes();
        } else {
          state.isBreak = true;
          state.session = state.sessionTime;
        }
      }
    },
    startTimer: (state) => {
      state.isRunning = true;
    },
    stopTimer: (state) => {
      state.isRunning = false;
    },
    endSession: (state) => {
      state.isRunning = false;
      state.isBreak = true;
    },
    endBreak: (state) => {
      state.isRunning = false;
      state.isBreak = false;
    },
    resetTimer: (state) => {
      state.session = defaultSession;
      state.breaking = defaultBreak;
      state.sessionTime = defaultSession;
      state.breakTime = defaultBreak;
      state.isRunning = false;
      state.isBreak = false;
    },
    incrementSession: (state) => {
      if (state.sessionTime >= 60) {
        state.sessionTime = 60;
        state.session = state.sessionTime;
      } else {
        state.sessionTime++;
        state.session = state.sessionTime;
      }
    },
    decrementSession: (state) => {
      if (state.sessionTime <= 1) {
        state.sessionTime = 1;
      } else {
        state.sessionTime--;
        state.session = state.sessionTime;
      }
    },
    incrementBreak: (state) => {
      if (state.breakTime >= 60) {
        state.breakTime = 60;
      } else {
        state.breakTime++;
        state.breaking = state.breakTime;
      }
    },
    decrementBreak: (state) => {
      if (state.breakTime <= 1) {
        state.breakTime = 1;
      } else {
        state.breakTime--;
        state.breaking = state.breakTime;
      }
    },
  },
});

export const {
  setSession,
  setBreak,
  tick,
  startTimer,
  stopTimer,
  endSession,
  endBreak,
  resetTimer,
  incrementSession,
  decrementSession,
  incrementBreak,
  decrementBreak,
} = timeSlice.actions;

export default timeSlice.reducer;
