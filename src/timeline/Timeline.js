import React, { useEffect, useReducer } from 'react';
import { getNextTimeline } from '../common/mockData';
import store from '../common/store';
import { add } from './state';
import TimelineList from './TimelineList';

const Timeline = () => {
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
  return (
    <div>
      <button onClick={onAdd}>Add Timeline</button>
      <TimelineList timelines={timelines} />
    </div>
  );
};

export default Timeline;
