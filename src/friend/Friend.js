import React, { useEffect, useMemo, useReducer } from 'react';
import { getNextFriend } from '../common/mockData';
import FriendList from './FriendList';
import { add, setAgeLimit, setShowLimit } from './state';
import { useDispatch, useSelector } from 'react-redux';
import NumberSelect from './NumberSelect';
import { AGE_LIMIT_OPTIONS, SHOW_LIMIT_OPTIONS } from './config';
import { getFriends, getAgeLimit, getShowLimit, getFriendsWithAgeLimit, getFriendsWithAgeShowLimit } from './selector';

const Friend = () => {
  const friends = useSelector(getFriends);
  const ageLimit = useSelector(getAgeLimit);
  const showLimit = useSelector(getShowLimit);
  const friendsWithAgeLimit = useSelector(getFriendsWithAgeLimit);
  const friendsWithAgeShowLimit = useSelector(getFriendsWithAgeShowLimit);
  const dispatch = useDispatch();
  function onAdd() {
    const friend = getNextFriend();
    dispatch(add(friend));
  }
  return (
    <div>
      <button onClick={onAdd}>Add Friend</button>
      <FriendList friends={friends} />
      <br />
      <NumberSelect onChange={(v) => dispatch(setAgeLimit(v))} value={ageLimit} options={AGE_LIMIT_OPTIONS} postfix={`세 이하만 보기`} />
      <FriendList friends={friendsWithAgeLimit} />
      <br />
      <NumberSelect onChange={(v) => dispatch(setShowLimit(v))} value={showLimit} options={SHOW_LIMIT_OPTIONS} postfix={`명 이하만 보기 (연령 제한 적용)`} />
      <FriendList friends={friendsWithAgeShowLimit} />
    </div>
  );
};

export default Friend;
