import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const API_URL = "http://localhost:5000/api";

export const fetchLectures = createAsyncThunk(
  "instructor/fetchLectures",
  async (instructorId) => {
    const response = await axios.get(`${API_URL}/lectures/${instructorId}`);
    return response.data;
  }
);

const instructorSlice = createSlice({
  name: "instructor",
  initialState: {
    lectures: [],
    status: "idle",
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchLectures.fulfilled, (state, action) => {
      state.lectures = action.payload;
    });
  },
});

export default instructorSlice.reducer;
