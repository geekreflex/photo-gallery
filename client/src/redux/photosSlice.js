import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { token } from '../helper/token';
import { BASE_URL } from '../helper/baseUrl';

const initialState = {
  photos: [],
  status: 'idle',
  error: null,
};

export const uploadPhotoAsync = createAsyncThunk(
  'photos/uploadPhotoAsync',
  async (payload, thunkAPI) => {
    try {
      const config = {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      };

      const { data } = await axios.post(
        `${BASE_URL}/photos/upload`,
        payload,
        config
      );

      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response && error.response.data.message
          ? error.response.data.mesaage
          : error.message
      );
    }
  }
);

export const getPhotosAsync = createAsyncThunk(
  'photo/getPhotoAsync',
  async (payload, thunkAPI) => {
    try {
      const config = {
        headers: {
          'Content-Type': 'application/json',
        },
      };

      const { data } = await axios.get(`${BASE_URL}/photos`, payload, config);

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

const photosSlice = createSlice({
  name: 'photos',
  initialState,
  reducers: {
    //
  },
  extraReducers: {
    //
    [uploadPhotoAsync.pending]: (state) => {
      state.status = 'loading';
    },
    [uploadPhotoAsync.fulfilled]: (state, action) => {
      state.status = 'idle';
      window.location = '/dashboard';
    },
    [uploadPhotoAsync.rejected]: (state, action) => {
      state.status = 'idle';
      console.log(action.payload);
    },

    // fetch photos
    [getPhotosAsync.pending]: (state) => {
      state.status = 'loading';
    },
    [getPhotosAsync.fulfilled]: (state, action) => {
      state.status = 'idle';
      state.photos = action.payload.photos;
    },
    [getPhotosAsync.rejected]: (state, action) => {
      state.status = 'idle';
      state.error = action.payload;
    },
  },
});

// export const {} = uploadSlice.actions;

export default photosSlice.reducer;
