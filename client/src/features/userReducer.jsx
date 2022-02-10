import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import SetAuthToken from './SetAuthToken';
import axios from 'axios';

const config = {
  headers: {
    'Content-Type': 'application/json',
  },
};

export const loadUser = createAsyncThunk(
  '/users/loadUser',
  async ({ rejectWithValue }) => {
    if (localStorage.token) {
      SetAuthToken(localStorage.token);
    }
    try {
      const res = await axios.get('http://localhost:5000/api/auth');
      return res.data;
    } catch (err) {
      if (!err.response) {
        throw err;
      }
      console.log(err.response.data);
      return rejectWithValue(err.response.data);
    }
  }
);

export const addUser = createAsyncThunk(
  '/users/postUser',
  async (user, { rejectWithValue }) => {
    try {
      const res = await axios.post(
        'http://localhost:5000/api/users',
        user,
        config
      );
      loadUser();
      return res.data;
    } catch (err) {
      if (!err.response) {
        throw err;
      }
      console.log(err.response.data);
      return rejectWithValue(err.response.data.errors);
    }
  }
);

export const authUser = createAsyncThunk(
  '/users/authUser',
  async (user, { rejectWithValue }) => {
    try {
      const res = await axios.post(
        'http://localhost:5000/api/auth',
        user,
        config
      );

      loadUser();
      return res.data;
    } catch (err) {
      if (!err.response) {
        throw err;
      }

      return rejectWithValue(err.response.data.errors);
    }
  }
);

export const updateUser = createAsyncThunk(
  `/users/updateUser`,
  async (user) => {
    try {
      const res = await axios.put(`/users/${user.id}`, user, config);
      return res.data;
    } catch (err) {
      return err.response.data.msg;
    }
  }
);

const userSlice = createSlice({
  name: 'user',
  initialState: {
    user: {},
    status: null,
    errors: null,
    isAuthenticated: null,
    token: localStorage.token,
  },
  reducers: {
    logOut: (state) => {
      localStorage.removeItem('token');
      state.isAuthenticated = false;
      state.user = {};
      state.token = null;
      state.status = 'loged out';
    },
  },
  extraReducers: {
    // loading user
    [loadUser.pending]: (state) => {
      state.status = 'loading';
    },
    [loadUser.fulfilled]: (state, { payload }) => {
      state.user = payload;
      state.isAuthenticated = true;
      state.status = 'loged in';
    },
    [loadUser.rejected]: (state) => {
      state.status = 'No token! Rejected';
    },

    // adding a user
    [addUser.pending]: (state) => {
      state.status = 'loading';
    },
    [addUser.fulfilled]: (state, { payload }) => {
      localStorage.setItem('token', payload.token);
      state.user = { ...payload };
      state.isAuthenticated = true;
      state.status = 'User registered successfully';
    },
    [addUser.rejected]: (state, { payload }) => {
      localStorage.removeItem('token');
      state.isAuthenticated = false;
      state.user = {};
      state.token = null;
      state.status = 'User registration rejected';
      state.errors = payload;
    },

    // Authenticate a user
    [authUser.pending || addUser.pending]: (state) => {
      state.status = 'loading';
    },
    [authUser.fulfilled || addUser.fulfilled]: (state, { payload }) => {
      localStorage.setItem('token', payload.token);
      state.user = payload;
      state.isAuthenticated = true;
      state.status = 'User successfully authentificated';
    },
    [authUser.rejected || addUser.rejected]: (state, { payload }) => {
      localStorage.removeItem('token');
      state.isAuthenticated = false;
      state.user = {};
      state.token = null;
      state.status = 'Authentification failed';
      state.errors = payload;
    },

    //update user
    [updateUser.fulfilled]: (state, { payload }) => {
      state.user = payload;
      state.status = 'Updated successfully';
    },
    [updateUser.rejected]: (state) => {
      state.status = 'Update failed';
    },
  },
});

export const { logOut } = userSlice.actions;

export default userSlice.reducer;
