import React from 'react';

const FriendList = ({ friends }) => {
  return (
    <ul>
      {friends.map((friend) => (
        <li style={{ display: 'inline-block', fontSize: '18px' }} key={friend.id}>
          {friend.name}
        </li>
      ))}
    </ul>
  );
};

export default FriendList;
