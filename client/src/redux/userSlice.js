import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

import { token } from '../helper/token';
import { BASE_URL } from '../helper/baseUrl';

const initialState = {
  user: {},
  token: null,
  status: 'idle',
  isAuth: false,
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
      state.user = action.payload.user;
    },
    [registerUserAsync.rejected]: (state, action) => {
      state.status = 'idle';
      state.error = action.payload;
    },

    // login reducer
    [loginUserAsync.pending]: (state) => {
      state.status = 'loading';
    },
    [loginUserAsync.pending]: (state, action) => {
      state.status = 'idle';
      state.isAuth = true;
      localStorage.setItem('authToken', JSON.stringify(action.payload.token));
      state.user = action.payload.user;
    },
    [loginUserAsync.rejected]: (state, action) => {
      state.status = 'idle';
      state.error = action.payload;
    },
  },
});

export const {} = userSlice.actions;

export default userSlice.reducer;
