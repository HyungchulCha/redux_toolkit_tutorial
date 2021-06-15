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
    add: (state, { payload }) => {
      state.friends.push(payload);
    },
    remove: (state, { payload }) => {
      const index = state.friends.filter((friend) => friend.id === payload.id);
      state.friends.splice(index, 1);
    },
    edit: (state, { payload }) => {
      const index = state.friends.filter((friend) => friend.id === payload.id);
      state.friends[index] = payload;
    },
    setAgeLimit: (state, { payload }) => {
      state.ageLimit = payload;
    },
    setShowLimit: (state, { payload }) => {
      state.showLimit = payload;
    },
  },
});

export const { add, remove, edit, setAgeLimit, setShowLimit } = friendSlice.actions;
export default friendSlice.reducer;
