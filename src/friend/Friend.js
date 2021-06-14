import React, { useEffect, useMemo, useReducer } from 'react';
import { getNextFriend } from '../common/mockData';
import FriendList from './FriendList';
import { add, setAgeLimit, setShowLimit } from './state';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import NumberSelect from './NumberSelect';
import { AGE_LIMIT_OPTIONS, SHOW_LIMIT_OPTIONS } from './config';
import {
  getAgeLimit,
  getShowLimit,
  getFriendsWithAgeLimit,
  getFriendsWithAgeShowLimit,
} from './selector';

const Friend = () => {
  // const ageLimit = useSelector(getAgeLimit);
  // const showLimit = useSelector(getShowLimit);
  // const friendsWithAgeLimit = useSelector(getFriendsWithAgeLimit);
  // const friendsWithAgeShowLimit = useSelector(getFriendsWithAgeShowLimit);
  const ageLimit = useSelector((state) => state.friend.ageLimit);
  const showLimit = useSelector((state) => state.friend.showLimit);
  const friendsWithAgeLimit = useSelector((state) =>
    state.friend.friends.filter((friend) => friend.age <= ageLimit)
  );
  const friendsWithAgeShowLimit = friendsWithAgeLimit.splice(0, showLimit);
  const dispatch = useDispatch();
  function onAdd() {
    const friend = getNextFriend();
    dispatch(add(friend));
  }
  console.log('Friend Render');
  return (
    <div>
      <button onClick={onAdd}>Add Friend</button>
      <NumberSelect
        onChange={(v) => dispatch(setAgeLimit(v))}
        value={ageLimit}
        options={AGE_LIMIT_OPTIONS}
        postfix={`세 이하만 보기`}
      />
      <FriendList friends={friendsWithAgeLimit} />
      <NumberSelect
        onChange={(v) => dispatch(setShowLimit(v))}
        value={showLimit}
        options={SHOW_LIMIT_OPTIONS}
        postfix={`명 이하만 보기 (연령 제한 적용)`}
      />
      <FriendList friends={friendsWithAgeShowLimit} />
    </div>
  );
};

export default Friend;
