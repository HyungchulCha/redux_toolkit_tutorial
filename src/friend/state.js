import { createSlice } from '@reduxjs/toolkit';
import { MAX_AGE_LIMIT, MAX_SHOW_LIMIT } from './config';

const friendSlice = createSlice({
  name: 'friend',
  initialState: {
    friends: [],
    ageLimit: MAX_AGE_LIMIT,
    showLimit: MAX_SHOW_LIMIT,
  },
  reducers: {
    add: {
      reducer: (state, { payload }) => {
        state.friends.push(payload);
      },
    },
    remove: {
      reducer: (state, { payload }) => {
        const index = state.friends.filter((friend) => friend.id === payload.id);
        state.friends.splice(index, 1);
      },
    },
    edit: {
      reducer: (state, { payload }) => {
        const index = state.friends.filter((friend) => friend.id === payload.id);
        state.friends[index] = payload;
      },
    },
    setAgeLimit: {
      reducer: (state, { payload }) => {
        state.ageLimit = payload;
      },
    },
    setShowLimit: {
      reducer: (state, { payload }) => {
        state.showLimit = payload;
      },
    },
  },
});

export const { add, remove, edit, setAgeLimit, setShowLimit } = friendSlice.actions;
export default friendSlice.reducer;
