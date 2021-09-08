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
        `${BASE_URL}/api/users/register`,
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

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    //
  },
  extraReducers: {
    //
  },
});

export const {} = userSlice.actions;

export default userSlice.reducer;
