import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
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
  reducers: {
    setLike(state, action: PayloadAction<number>) {
      const card = state.cards.find(
        item => item.id === action.payload
      );
      if (card) {
        card.like = !card.like;
      }
    },
    removeCard(state, action: PayloadAction<number>) {
      state.cards = state.cards.filter(
        (item) => item.id !== action.payload
      );
    },
  },
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
          const body = item.body + ' ' + item.body;
          return { ...item, body, color, like: false };
        });
        state.cards = data;
        state.loading = false;
        state.error = '';
      });
  }
});

const mainReducer = mainSlice.reducer;
export default mainReducer;
export const fetchPosts = createAsyncThunk('posts/get', async () => getPosts());
export const { selectCards } = mainSlice.selectors;
export const { setLike, removeCard } = mainSlice.actions;