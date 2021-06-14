import React from 'react';

const FriendList = ({ friends }) => {
  return <ul>{!!friends && friends.map((friend) => <li key={friend.id}>{friend.name}</li>)}</ul>;
};

export default FriendList;
