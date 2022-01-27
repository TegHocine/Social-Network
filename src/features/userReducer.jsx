import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const id = 1;
export const fetchUser = createAsyncThunk(`/users`, async () => {
  try {
    const res = await axios.get(`/users/${id}`);
    return res.data;
  } catch (error) {
    return error.response.statusText;
  }
});

const userSlice = createSlice({
  name: 'user',
  initialState: { value: {}, status: null },
  reducers: {},
  extraReducers: {
    [fetchUser.pending]: (state) => {
      state.status = 'loading';
    },
    [fetchUser.fulfilled]: (state, { payload }) => {
      state.value = payload;
      state.status = 'success';
    },
    [fetchUser.rejected]: (state) => {
      state.status = 'failed';
    },
  },
});

// export const { user } = userSlice.actions;

export default userSlice.reducer;
