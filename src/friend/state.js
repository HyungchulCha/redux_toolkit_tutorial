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
    add: (state, action) => {
      state.friends.push(action.payload);
    },
    remove: (state, action) => {
      const index = state.friends.filter(
        (friend) => friend.id === action.payload.id
      );
      state.friends.splice(index, 1);
    },
    edit: (state, action) => {
      const index = state.friends.filter(
        (friend) => friend.id === action.payload.id
      );
      state.friends[index] = action.payload;
    },
    setAgeLimit: (state, action) => {
      state.ageLimit = action.payload;
    },
    setShowLimit: (state, action) => {
      state.showLimit = action.payload;
    },
  },
});

export const { add, remove, edit, setAgeLimit, setShowLimit } =
  friendSlice.actions;
export default friendSlice.reducer;
