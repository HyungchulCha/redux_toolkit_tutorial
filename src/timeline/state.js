import { createSlice } from '@reduxjs/toolkit';

const timelineSlice = createSlice({
  name: 'timeline',
  initialState: { timelines: [], nextPage: 0, isLoading: false, error: '', text: '' },
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
    increaseNextPage: (state) => {
      state.nextPage += 1;
    },
    requestLike: () => {},
    addLike: (state, { payload }) => {
      const timeline = state.timelines.find((item) => item.id === payload.timelineId);
      if (timeline) {
        timeline.likes += payload.value;
      }
    },
    setLoading: (state, { payload }) => {
      state.isLoading = payload;
    },
    setError: (state, { payload }) => {
      state.error = payload.error;
    },
    setText: (state, { payload }) => {
      state.text = payload.text;
    },
    trySetText: () => {},
  },
});

export const { add, remove, edit, increaseNextPage, requestLike, addLike, setLoading, setError, setText, trySetText } = timelineSlice.actions;
export default timelineSlice.reducer;
