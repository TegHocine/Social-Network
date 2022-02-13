import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

const config = {
  headers: {
    'Content-Type': 'application/json'
  }
}

export const fetchPosts = createAsyncThunk('/posts/fetchPosts', async () => {
  try {
    const res = await axios.get('/api/posts')
    return res.data
  } catch (error) {
    return error.response.statusText
  }
})

export const addPostApi = createAsyncThunk(
  '/posts/addPost',
  async (post, { rejectWithValue }) => {
    try {
      const res = await axios.post('/api/posts', post, config)
      return res.data
    } catch (err) {
      if (!err.response) {
        throw err
      }
      return rejectWithValue(err.response.data.errors)
    }
  }
)

const postsSlice = createSlice({
  name: 'posts',
  initialState: { posts: [], status: 'loading', errors: null },
  reducers: {},
  extraReducers: {
    [fetchPosts.fulfilled]: (state, { payload }) => {
      state.posts = payload
      state.status = 'success'
      state.errors = null
    },
    [fetchPosts.rejected]: (state) => {
      state.status = 'failed'
    },
    [addPostApi.fulfilled]: (state, { payload }) => {
      state.posts = [payload, ...state.posts]
      state.status = 'success'
      state.errors = null
    }
  }
})

// export the reducers function
export const { addPost } = postsSlice.actions

export default postsSlice.reducer
