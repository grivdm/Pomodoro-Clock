import { configureStore } from "@reduxjs/toolkit";
import timeSlice from "./slices/TimeSlice";

export default configureStore({
  reducer: {
    time: timeSlice,
  },
});
