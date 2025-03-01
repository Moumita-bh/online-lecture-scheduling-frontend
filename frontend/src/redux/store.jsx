import { configureStore } from "@reduxjs/toolkit";
import adminReducer from "./slices/adminSlice";
import instructorReducer from "./slices/instructorSlice";

const store = configureStore({
  reducer: {
    admin: adminReducer,
    instructor: instructorReducer,
  },
});

export default store;
