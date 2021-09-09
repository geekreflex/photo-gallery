import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

import { BASE_URL } from '../helper/baseUrl';

const initialState = {
  user: {},
  token: null,
  status: 'idle',
  isAuth: false,
  error: null,
};

export const registerUserAsync = createAsyncThunk(
  'user/registerUserAsync',
  async (payload, thunkAPI) => {
    try {
      const config = {
        headers: {
          'Content-Type': 'application/json',
        },
      };

      const { data } = await axios.post(
        `${BASE_URL}/users/register`,
        payload,
        config
      );

      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message
      );
    }
  }
);

export const loginUserAsync = createAsyncThunk(
  'user/loginUserAsync',
  async (payload, thunkAPI) => {
    try {
      const config = {
        headers: {
          'Content-Type': 'application/json',
        },
      };

      const { data } = await axios.post(
        `${BASE_URL}/users/login`,
        payload,
        config
      );

      console.log(data);

      return data;
    } catch (error) {
      console.log(error.response.data.message);
      return thunkAPI.rejectWithValue(
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message
      );
    }
  }
);

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    //
    getTokenFromStorage(state) {
      const authToken = localStorage.getItem('authToken')
        ? JSON.parse(localStorage.getItem('authToken'))
        : null;

      if (authToken) {
        state.isAuth = true;
        state.token = authToken;
      }
    },

    getUserDataFromStorage(state) {
      const userData = localStorage.getItem('userData')
        ? JSON.parse(localStorage.getItem('userData'))
        : null;

      if (userData) {
        state.user = userData;
      }
    },

    logoutUser(state) {
      localStorage.removeItem('authToken');
      localStorage.removeItem('userData');
      state.isAuth = false;
      window.location = '/';
    },

    clearError(state) {
      state.error = null;
    },
  },
  extraReducers: {
    // register reducer
    [registerUserAsync.pending]: (state) => {
      state.status = 'loading';
    },
    [registerUserAsync.fulfilled]: (state, action) => {
      state.status = 'idle';
      state.isAuth = true;
      localStorage.setItem('authToken', JSON.stringify(action.payload.token));
      localStorage.setItem('userData', JSON.stringify(action.payload.user));
      window.location = '/dashboard';
    },
    [registerUserAsync.rejected]: (state, action) => {
      state.status = 'idle';
      state.error = action.payload;
    },

    // login reducer
    [loginUserAsync.pending]: (state) => {
      state.status = 'loading';
    },
    [loginUserAsync.fulfilled]: (state, action) => {
      state.status = 'idle';
      state.isAuth = true;
      localStorage.setItem('authToken', JSON.stringify(action.payload.token));
      localStorage.setItem('userData', JSON.stringify(action.payload.user));
      window.location = '/dashboard';
    },
    [loginUserAsync.rejected]: (state, action) => {
      state.status = 'idle';
      state.error = action.payload;
    },
  },
});

export const {
  getTokenFromStorage,
  getUserDataFromStorage,
  logoutUser,
  clearError,
} = userSlice.actions;

export default userSlice.reducer;
