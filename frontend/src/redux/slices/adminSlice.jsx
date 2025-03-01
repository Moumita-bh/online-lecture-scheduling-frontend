import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const API_URL = "http://localhost:5000/api";

export const fetchInstructors = createAsyncThunk(
  "admin/fetchInstructors",
  async () => {
    const response = await axios.get(`${API_URL}/instructors`);
    return response.data;
  }
);

export const addInstructor = createAsyncThunk(
  "admin/addInstructor",
  async (instructor) => {
    const response = await axios.post(`${API_URL}/instructors`, instructor);
    return response.data;
  }
);

const adminSlice = createSlice({
  name: "admin",
  initialState: {
    instructors: [],
    status: "idle",
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchInstructors.fulfilled, (state, action) => {
        state.instructors = action.payload;
      })
      .addCase(addInstructor.fulfilled, (state, action) => {
        state.instructors.push(action.payload);
      });
  },
});

export default adminSlice.reducer;
