import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const config = {
  headers: {
    'Content-Type': 'application/json',
  },
};

export const fetchPosts = createAsyncThunk('/posts/fetchPosts', async () => {
  try {
    const res = await axios.get(
      'http://localhost:8000/posts?_sort=id&_order=desc'
    );
    return res.data;
  } catch (error) {
    return error.response.statusText;
  }
});

export const addPostApi = createAsyncThunk('/posts/addPost', async (post) => {
  try {
    const res = await axios.post('http://localhost:8000/posts', post, config);
    return res.data;
  } catch (error) {
    return error.response.statusText;
  }
});

const postsSlice = createSlice({
  name: 'posts',
  initialState: { value: [], status: '' },
  reducers: {},
  extraReducers: {
    [fetchPosts.pending]: (state) => {
      state.status = 'loading';
    },
    [fetchPosts.fulfilled]: (state, { payload }) => {
      state.value = payload;
      state.status = 'success';
    },
    [fetchPosts.rejected]: (state) => {
      state.status = 'failed';
    },
    [addPostApi.fulfilled]: (state, { payload }) => {
      state.value = [payload, ...state.value];
      state.status = 'success';
    },
  },
});

// export the reducers function
export const { addPost } = postsSlice.actions;

export default postsSlice.reducer;
