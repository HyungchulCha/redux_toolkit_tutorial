import React, { useEffect, useReducer, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getNextTimeline } from '../common/mockData';
import store from '../common/store';
import { add, requestLike, trySetText, TS } from './state';
import TimelineList from './TimelineList';

const Timeline = () => {
  /*
  // 리덕스 상태가 변경되면 무조건 컴포넌트를 렌더링하기 위해서 forceUpdate 함수를 사용한다.
  const [, forceUpdate] = useReducer((v) => v + 1, 0);
  useEffect(() => {
    // 액션이 처리될 때마다 화면을 다시 그리기 위해 subscribe 메서드를 사용한다.
    let prevTimelines = store.getState().timeline.timelines;
    const unsubscribe = store.subscribe(() => {
      const timelines = store.getState().timeline.timelines;
      if (prevTimelines !== timelines) {
        forceUpdate();
      }
      prevTimelines = timelines;
    });
    return () => unsubscribe();
  }, []);
  function onAdd() {
    const timeline = getNextTimeline();
    store.dispatch(add(timeline));
  }
  const timelines = store.getState().timeline.timelines;
  */
  const dispatch = useDispatch();
  const timelines = useSelector((state) => state.timeline.timelines);
  const isLoading = useSelector((state) => state.timeline.isLoading);
  const error = useSelector((state) => state.timeline.error);
  const text = useSelector((state) => state.timeline.text);
  const [currentText, setCurrentText] = useState('');
  function onChangeText(e) {
    const text = e.target.value;
    dispatch(trySetText(text));
    setCurrentText(text);
  }
  function onAdd() {
    const timeline = getNextTimeline();
    dispatch(add(timeline));
  }
  function onLike(e) {
    const id = Number(e.target.dataset.id);
    const timeline = timelines.find((item) => item.id === id);
    dispatch(requestLike(timeline)); // dispatch({ type: 'timeline/requestLike', payload: { desc, likes, id } })
  }
  return (
    <div>
      <button onClick={onAdd}>Add Timeline</button>
      <TimelineList timelines={timelines} onLike={onLike} />
      {!!isLoading && <p>전송 중...</p>}
      {!!error && <p>예외 발생 : {error}</p>}
      <input type='text' value={currentText} onChange={onChangeText} />
      {!!text && <p>{text}</p>}
    </div>
  );
};

export default Timeline;
