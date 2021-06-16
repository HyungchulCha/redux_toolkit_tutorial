import { all, call, debounce, fork, put, take } from 'redux-saga/effects';
import { callApiLike } from '../common/api';
import { addLike, requestLike, setLoading, setError, trySetText, setText } from './state';

export function* fetchData() {
  while (true) {
    console.log(requestLike, trySetText);
    const { payload } = yield take(requestLike.type); // requestLike = f timeline/requestLike or requestLike.type = "timeline/requestLike
    yield put(setLoading(true));
    yield put(addLike(payload.id, 1));
    yield put(setError(''));
    try {
      yield call(callApiLike);
    } catch (error) {
      yield put(setError(error));
      yield put(addLike(payload.id, -1));
    }
    yield put(setLoading(false));
  }
}

export function* _trySetText(action) {
  const { payload } = action; // { type: 'timeline/trySetText', payload: '' }
  yield put(setText(payload));
}

export default function* watcher() {
  // yield all([ fork(f1), fork(f2), ... ])
  yield all([fork(fetchData), debounce(500, trySetText.type, _trySetText)]);
}

/*
  function* loginFlow() {
    while (true) {
      const { payload } = yield take(login);
      const userInfo = yield call(callApiLogin, payload.id, payload.password);
      yield put(setUserInfo, userInfo);
      yield take(logout);
      yield call(callApiLogout, payload.id);
      yield put(setUserInfo, null);
    }
  }
*/
