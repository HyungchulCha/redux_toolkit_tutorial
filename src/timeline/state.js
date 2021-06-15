import { createSlice } from '@reduxjs/toolkit';

const timelineSlice = createSlice({
  name: 'timeline',
  initialState: { timelines: [], nextPage: 0 },
  reducers: {
    add: (state, { payload }) => {
      state.timelines.push(payload);
    },
    remove: (state, { payload }) => {
      const index = state.timelines.findIndex((timeline) => timeline.id === payload.id);
      state.timelines[index].splice(index, 1);
    },
    edit: (state, { payload }) => {
      const index = state.timelines.findIndex((timeline) => timeline.id === payload.id);
      state.timelines[index] = payload;
    },
    increaseNextPage: (state, { payload }) => {
      state.nextPage += 1;
    },
  },
});

export const { add, remove, edit, increaseNextPage } = timelineSlice.actions;
export default timelineSlice.reducer;
