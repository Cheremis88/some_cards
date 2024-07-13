import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { TCard } from '../utils/types';
import { getPosts } from '../utils/api';
import generateColor from '../utils/generateColor';

export type TAppState = {
  cards: TCard[];
  loading: boolean;
  error: string;
}

export const initialState: TAppState = {
  cards: [],
  loading: true,
  error: ''
};

const mainSlice = createSlice({
  name: 'cards',
  initialState,
  reducers: {},
  selectors: {
    selectCards: (state) => state
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchPosts.pending, (state) => {
        state.loading = true;
        state.error = '';
      })
      .addCase(fetchPosts.rejected, (state) => {
        state.loading = false;
        state.error = 'Не удалось загрузить данные';
      })
      .addCase(fetchPosts.fulfilled, (state, action) => {
        const data = action.payload.map(item => {
          const color = generateColor();
          return { ...item, color };
        });
        state.cards = data;
        state.loading = false;
        state.error = '';
      });
  }
});


export const fetchPosts = createAsyncThunk('posts/get', async () => getPosts());

export const { selectCards } = mainSlice.selectors;
const mainReducer = mainSlice.reducer;

export default mainReducer;