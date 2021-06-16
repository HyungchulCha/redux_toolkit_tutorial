import { createSlice } from '@reduxjs/toolkit';

const timelineSlice = createSlice({
  name: 'timeline',
  initialState: { timelines: [], nextPage: 0, isLoading: false, error: '', text: '' },
  reducers: {
    add: {
      reducer: (state, { payload }) => {
        state.timelines.push(payload);
      },
    },
    remove: {
      reducer: (state, { payload }) => {
        const index = state.timelines.findIndex((timeline) => timeline.id === payload.id);
        state.timelines[index].splice(index, 1);
      },
    },
    edit: {
      reducer: (state, { payload }) => {
        const index = state.timelines.findIndex((timeline) => timeline.id === payload.id);
        state.timelines[index] = payload;
      },
    },
    increaseNextPage: {
      reducer: (state) => {
        state.nextPage += 1;
      },
    },
    requestLike: () => {},
    addLike: {
      reducer: (state, { payload }) => {
        const timeline = state.timelines.find((item) => item.id === payload.timelineId);
        if (timeline) {
          timeline.likes += payload.value;
        }
      },
      prepare: (timelineId, value) => ({ payload: { timelineId, value } }),
    },
    setLoading: {
      reducer: (state, { payload }) => {
        state.isLoading = payload;
      },
    },
    setError: {
      reducer: (state, { payload }) => {
        state.error = payload;
      },
    },
    setText: {
      reducer: (state, { payload }) => {
        state.text = payload;
      },
    },
    trySetText: () => {},
  },
});
export const TS = timelineSlice;
export const { add, remove, edit, increaseNextPage, requestLike, addLike, setLoading, setError, setText, trySetText } = timelineSlice.actions;
export default timelineSlice.reducer;
