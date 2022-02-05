import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchUser = createAsyncThunk(`/users/fetchUser`, async (id) => {
  try {
    const res = await axios.get(`http://localhost:8000/users/${id}`);
    return res.data;
  } catch (error) {
    return error.response.statusText;
  }
});
export const updateUser = createAsyncThunk(
  `/users/updateUser`,
  async (user) => {
    try {
      const res = await axios.put(`/users/${user.id}`, user, {
        'Content-Type': 'application/json',
      });
      return res.data;
    } catch (error) {
      return error.response.statusText;
    }
  }
);

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
    [updateUser.fulfilled]: (state, { payload }) => {
      state.value = payload;
      state.status = 'success';
    },
    [updateUser.rejected]: (state) => {
      state.status = 'failed';
    },
  },
});

// export const { user } = userSlice.actions;

export default userSlice.reducer;
