import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import SetAuthToken from './SetAuthToken'
import instance from './axiosInstance'
const config = {
  headers: {
    'Content-Type': 'application/json'
  }
}

// load the user info
export const loadUser = createAsyncThunk(
  '/users/loadUser',
  async (dispatch, { rejectWithValue }) => {
    // set token on initial app loading
    SetAuthToken(dispatch)

    try {
      const res = await instance.get('http://localhost:5000/api/auth')
      return res.data
    } catch (err) {
      if (!err.response) {
        throw err
      }
      return rejectWithValue(err.response.data.errors)
    }
  }
)

//register a new user
export const addUser = createAsyncThunk(
  '/users/postUser',
  async (user, { rejectWithValue }) => {
    try {
      const res = await instance.post('http://localhost:5000/api/users', user)
      return res.data
    } catch (err) {
      if (!err.response) {
        throw err
      }
      return rejectWithValue(err.response.data.errors)
    }
  }
)

// authentificate a user
export const authUser = createAsyncThunk(
  '/users/authUser',
  async (user, { rejectWithValue }) => {
    try {
      const res = await instance.post('http://localhost:5000/api/auth', user)
      return res.data
    } catch (err) {
      if (!err.response) {
        throw err
      }
      return rejectWithValue(err.response.data.errors)
    }
  }
)

// to make user update his info's not working yes
export const updateUser = createAsyncThunk(
  `/users/updateUser`,
  async (user) => {
    try {
      const res = await instance.put(`/users/${user.id}`, user, config)
      return res.data
    } catch (err) {
      return err.response.data.msg
    }
  }
)

const userSlice = createSlice({
  name: 'user',
  initialState: {
    user: {},
    status: 'loading',
    errors: null,
    isAuthenticated: null,
    token: localStorage.getItem('token')
  },
  reducers: {
    logOut: (state) => {
      localStorage.removeItem('token')
      state.isAuthenticated = false
      state.user = {}
      state.token = null
      state.errors = null
      state.status = 'loged out'
    },
    clearERR: (state) => {
      state.errors = null
      console.log('here we go again')
    }
  },
  extraReducers: {
    // loading user
    [loadUser.fulfilled]: (state, { payload }) => {
      state.user = payload
      state.isAuthenticated = true
      state.status = 'loged in'
      state.errors = null
    },
    [loadUser.rejected]: (state) => {
      state.status = 'No token! Rejected'
    },

    // adding a user
    [addUser.fulfilled]: (state, { payload }) => {
      localStorage.setItem('token', payload.token)
      state.token = payload.token
      state.isAuthenticated = true
      state.status = 'User registered successfully'
      state.errors = null
    },
    [addUser.rejected]: (state, { payload }) => {
      localStorage.removeItem('token')
      state.isAuthenticated = false
      state.user = {}
      state.token = null
      state.status = 'User registration rejected'
      state.errors = payload
    },

    // Authenticate a user
    [authUser.fulfilled]: (state, { payload }) => {
      localStorage.setItem('token', payload.token)
      state.token = payload.token
      state.isAuthenticated = true
      state.status = 'User registered successfully'
    },
    [authUser.rejected]: (state, { payload }) => {
      localStorage.removeItem('token')
      state.isAuthenticated = false
      state.user = {}
      state.token = null
      state.status = 'User registration rejected'
      state.errors = payload
    },

    //update user
    [updateUser.fulfilled]: (state, { payload }) => {
      state.user = payload
      state.status = 'Updated successfully'
    },
    [updateUser.rejected]: (state) => {
      state.status = 'Update failed'
    }
  }
})

export const { logOut, clearERR } = userSlice.actions

export default userSlice.reducer
