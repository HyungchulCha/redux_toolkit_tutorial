/*

  prevState = initialState -> action -> dispatch(action(value))(여기서 입력한 value가 reducer에 작성한 함수에서 어떻게 동작할지 생각하고 코딩하자) -> nextState

  1. createAction
  const a = createAction('a');
  action = a(); // { type: 'a' }
  action = a(1); // { type: 'a', payload: 1 }

  2. createReducer
  const b = createReducer(0, {
    c: (state, action) => state + action.payload
    d: (state, action) => state - action.payload
  });

  3. createAction + createReducer
  const a = createAction('a');
  const b = createAction('b');
  const c = createReducer(0, {
    [a]: (state, action) => state + action.payload
    [b]: (state, action) => state - action.payload
  });

  4. createSlice = action + reducer
  const c = createSlice({
    name: 'prefix',
    initialState: 0,
    reducers: {
      a: (state, action) => { state.value += action.payload }
      b: (state, action) => { state.value += action.payload }
    }
  });
  export const { a, b } = c.actions;
  export default c.reducer;

  5. configureStore - default : redux devtool
  import { configureStore } from '@reduxjs/toolkit';
  export const store = configureStore({
    reducer: {
      a: aReducer,
      b: bReducer
    }
  });

  6. createAsyncThunk + createSlice
  export const a = createAsyncThunk('a', async () => {
    try {
      const response = await fetch(...);
      const data = await response.json();
      return data;
    } catch (e) {
      // ...
    }
  });

  export const b = createSlice({
    name: 'prefix',
    initialState: {
      loading: false,
      hasErrors: false,
      list: []
    },
    reducer: {
      c: (state, action) => {
        state.list = action.payload
      }
    }
    extraReducers: {
      [a.pending]: (state, action) => {
        state.loading = true;
      },
      [a.fulfilled]: (state, action) => {
        state.loading = false;
        state.list = action.payload
        state.hasError = false;
      },
      [a.rejected]: (state, action) => {
        state.loading = false;
        state.hasError = true;
      }
    }
  });

  export default b.reducer;

*/

import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import friendReducer from '../friend/state';
import timelineReducer from '../timeline/state';
// import createSagaMiddleware from 'redux-saga';
// import saga from './saga';

// const sagaMiddleware = createSagaMiddleware();
// const middleware = [...getDefaultMiddleware({ thunk: false }), sagaMiddleware];
// const middleware = [...getDefaultMiddleware({ thunk: false })];

const store = configureStore({
  reducer: {
    friend: friendReducer,
    timeline: timelineReducer,
  },
  // middleware,
});

// sagaMiddleware.run(saga);

export default store;
